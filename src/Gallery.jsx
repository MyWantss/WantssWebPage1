import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

// Auto-discover all designs (eager: false = lazy, we just need meta)
const modules = import.meta.glob('./designs/*/index.jsx')

const entries = Object.entries(modules).map(([path, load]) => ({
  slug: path.split('/')[2],
  load,
}))

export default function Gallery() {
  const [designs, setDesigns] = useState([])

  useEffect(() => {
    Promise.all(
      entries.map(async ({ slug, load }) => {
        try {
          const mod = await load()
          return { slug, meta: mod.meta || {} }
        } catch {
          return { slug, meta: {} }
        }
      })
    ).then(setDesigns)
  }, [])

  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1 className="gallery-title">Web Page Creator</h1>
        <p className="gallery-subtitle">Design Collection</p>
      </header>

      <div className="gallery-grid">
        {designs.map(({ slug, meta }) => (
          <Link to={`/${slug}`} key={slug} className="gallery-card">
            <div className="gallery-card-thumb">
              {meta.thumbnail ? (
                <img src={meta.thumbnail} alt={meta.title || slug} />
              ) : (
                <div className="gallery-card-placeholder">
                  <span>{(meta.title || slug).charAt(0).toUpperCase()}</span>
                </div>
              )}
            </div>
            <div className="gallery-card-info">
              <h2>{meta.title || slug}</h2>
              {meta.description && <p>{meta.description}</p>}
              {meta.date && <time>{meta.date}</time>}
            </div>
          </Link>
        ))}

        {/* Placeholder card for next design */}
        <div className="gallery-card gallery-card-new">
          <div className="gallery-card-thumb">
            <div className="gallery-card-placeholder">
              <span>+</span>
            </div>
          </div>
          <div className="gallery-card-info">
            <h2>New Design</h2>
            <p>Create a folder in src/designs/</p>
          </div>
        </div>
      </div>
    </div>
  )
}
