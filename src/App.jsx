import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Acctual />} />
          <Route path="/use-cases/:slug" element={<IndustryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
