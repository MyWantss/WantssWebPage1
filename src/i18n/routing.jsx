import { forwardRef, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { DEFAULT_LANG, PREFIXED_LANGS, isSupportedLang, STORAGE_KEY } from './config'

// Read the active language from the first path segment. Returns DEFAULT_LANG
// ("en") when there is no (valid) prefix.
export function langFromPathname(pathname) {
  const seg = pathname.split('/')[1]
  return PREFIXED_LANGS.includes(seg) ? seg : DEFAULT_LANG
}

// Strip a leading language prefix, returning the path as if it were English.
// "/es/about" -> "/about", "/es" -> "/", "/about" -> "/about".
export function stripLangPrefix(pathname) {
  const seg = pathname.split('/')[1]
  if (PREFIXED_LANGS.includes(seg)) {
    const rest = pathname.slice(seg.length + 1) // remove "/es"
    return rest || '/'
  }
  return pathname
}

// Build a path for a given language. `path` is a language-agnostic path that
// starts with "/" (e.g. "/", "/about", "/use-cases/b2b-saas").
export function localizedPath(path, lang) {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (!lang || lang === DEFAULT_LANG) return clean
  if (clean === '/') return `/${lang}`
  // Hash- or query-only paths on the root ("/#results") -> "/es#results"
  if (clean.startsWith('/#') || clean.startsWith('/?')) return `/${lang}${clean.slice(1)}`
  return `/${lang}${clean}`
}

// Hook returning the active language + the prefix to prepend to internal links.
export function useLang() {
  const { pathname } = useLocation()
  const lang = langFromPathname(pathname)
  return { lang, prefix: lang === DEFAULT_LANG ? '' : `/${lang}` }
}

// Convenience: build a localized href for the CURRENT language.
export function useLocalizedPath() {
  const { lang } = useLang()
  return useCallback((path) => localizedPath(path, lang), [lang])
}

// <LangLink to="/about"> — a Link that automatically prepends the active
// language prefix. `to` must be a language-agnostic path starting with "/".
export const LangLink = forwardRef(function LangLink({ to, ...rest }, ref) {
  const { lang } = useLang()
  return <Link ref={ref} to={localizedPath(to, lang)} {...rest} />
})

// Switch language while staying on the equivalent page, and remember the choice.
export function useChangeLanguage() {
  const { pathname, hash, search } = useLocation()
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  return useCallback(
    (nextLang) => {
      if (!isSupportedLang(nextLang)) return
      try {
        window.localStorage.setItem(STORAGE_KEY, nextLang)
      } catch { /* ignore private-mode storage errors */ }
      const basePath = stripLangPrefix(pathname)
      const target = localizedPath(basePath, nextLang) + search + hash
      i18n.changeLanguage(nextLang)
      navigate(target)
    },
    [pathname, hash, search, navigate, i18n],
  )
}
