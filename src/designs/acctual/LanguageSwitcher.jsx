import { useEffect, useRef, useState } from 'react'
import { LANGUAGES } from '../../i18n/config'
import { useLang, useChangeLanguage } from '../../i18n/routing'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { lang } = useLang()
  const changeLanguage = useChangeLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const pick = (code) => {
    setOpen(false)
    if (code !== lang) changeLanguage(code)
  }

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-switcher-btn"
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        {current.label}
        <span className={`lang-switcher-caret${open ? ' lang-switcher-caret--open' : ''}`} aria-hidden="true">▾</span>
      </button>
      {open && (
        <ul className="lang-switcher-menu" role="listbox">
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                className={`lang-switcher-option${l.code === lang ? ' lang-switcher-option--active' : ''}`}
                onClick={() => pick(l.code)}
              >
                <span className="lang-switcher-option-code">{l.label}</span>
                <span className="lang-switcher-option-name">{l.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
