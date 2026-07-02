import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './i18n'
import { DEFAULT_LANG, PREFIXED_LANGS, STORAGE_KEY } from './i18n/config'

const Acctual = lazy(() => import('./designs/acctual/index'))
const IndustryPage = lazy(() => import('./designs/acctual/industry/IndustryPage'))
const AboutPage = lazy(() => import('./designs/acctual/about/AboutPage'))

function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      color: '#333',
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: '24px',
      letterSpacing: '4px',
    }}>
      LOADING...
    </div>
  )
}

// Keeps i18next in sync with the language prefix in the URL. An unknown prefix
// (e.g. "/xyz") is redirected to the English root so we never render a page in a
// bogus language.
function LangRoute({ children }) {
  const { lang } = useParams()
  const { i18n } = useTranslation()
  const valid = !lang || PREFIXED_LANGS.includes(lang)
  const target = valid && lang ? lang : DEFAULT_LANG

  useEffect(() => {
    if (valid && i18n.language !== target) i18n.changeLanguage(target)
  }, [valid, target, i18n])

  if (!valid) return <Navigate to="/" replace />
  return children
}

// On a bare "/" visit, honour a previously stored language preference by
// redirecting once. Crawlers (no localStorage) keep seeing English at "/".
function RootRedirect({ children }) {
  const stored = (() => {
    try { return window.localStorage.getItem(STORAGE_KEY) } catch { return null }
  })()
  if (stored && PREFIXED_LANGS.includes(stored)) {
    return <Navigate to={`/${stored}`} replace />
  }
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* English (default, no prefix) */}
          <Route path="/" element={<RootRedirect><LangRoute><Acctual /></LangRoute></RootRedirect>} />
          <Route path="/use-cases/:slug" element={<LangRoute><IndustryPage /></LangRoute>} />
          <Route path="/about" element={<LangRoute><AboutPage /></LangRoute>} />

          {/* Localized (/:lang prefix) */}
          <Route path="/:lang" element={<LangRoute><Acctual /></LangRoute>} />
          <Route path="/:lang/use-cases/:slug" element={<LangRoute><IndustryPage /></LangRoute>} />
          <Route path="/:lang/about" element={<LangRoute><AboutPage /></LangRoute>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
