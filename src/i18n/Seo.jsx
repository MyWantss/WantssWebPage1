import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { LANGUAGES, DEFAULT_LANG, SITE_URL } from './config'
import { langFromPathname, stripLangPrefix, localizedPath } from './routing'

// Per-page SEO: sets <html lang>, title, description, canonical, Open Graph /
// Twitter tags, and hreflang alternates for every language + x-default.
//
// Props:
//   title, description       — already translated for the current language
//   image                    — absolute OG image URL (optional)
//   ogTitle, ogDescription   — optional overrides (default to title/description)
export default function Seo({ title, description, image, ogTitle, ogDescription }) {
  const { pathname } = useLocation()
  const lang = langFromPathname(pathname)
  const basePath = stripLangPrefix(pathname) // language-agnostic, starts with "/"
  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  const url = (code) => `${SITE_URL}${localizedPath(basePath, code)}`
  const canonical = url(lang)
  const ogImage = image || `${SITE_URL}/og-image.png`

  return (
    <Helmet>
      <html lang={current.hreflang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* hreflang alternates */}
      {LANGUAGES.map((l) => (
        <link key={l.code} rel="alternate" hrefLang={l.hreflang} href={url(l.code)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={url(DEFAULT_LANG)} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={current.hreflang.replace('-', '_')} />

      {/* Twitter */}
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
