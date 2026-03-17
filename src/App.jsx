import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from './Gallery'

const IndustryPage = lazy(() => import('./designs/acctual/industry/IndustryPage'))

// Auto-discover all designs: just create src/designs/<name>/index.jsx
const modules = import.meta.glob('./designs/*/index.jsx')

const designs = Object.entries(modules).map(([path, load]) => {
  const slug = path.split('/')[2] // ./designs/<slug>/index.jsx
  return { slug, Component: lazy(load) }
})

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
          <Route path="/" element={<Gallery />} />
          <Route path="/use-cases/:slug" element={<IndustryPage />} />
          {designs.map(({ slug, Component }) => (
            <Route key={slug} path={`/${slug}`} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
