// Language-independent structure for use cases. All translatable text lives in
// ./content/{lang}.js keyed by the same slugs. Use getIndustries(lang) /
// getIndustry(lang, slug) to get merged, ready-to-render data.

import en from './content/en'
import es from './content/es'
import fr from './content/fr'
import pt from './content/pt'

const content = { en, es, fr, pt }

// Order defines display order; relatedUseCases is language-independent.
export const industryStructure = [
  { slug: 'commercial-real-estate', relatedUseCases: ['financial-services', 'manufacturing', 'legal-services'] },
  { slug: 'financial-services',     relatedUseCases: ['commercial-real-estate', 'legal-services', 'b2b-saas'] },
  { slug: 'marketing-agencies',     relatedUseCases: ['seo-agencies', 'b2b-saas', 'recruitment'] },
  { slug: 'legal-services',         relatedUseCases: ['financial-services', 'commercial-real-estate', 'cybersecurity'] },
  { slug: 'manufacturing',          relatedUseCases: ['commercial-real-estate', 'cybersecurity', 'recruitment'] },
  { slug: 'cybersecurity',          relatedUseCases: ['b2b-saas', 'financial-services', 'legal-services'] },
  { slug: 'seo-agencies',           relatedUseCases: ['marketing-agencies', 'b2b-saas', 'recruitment'] },
  { slug: 'recruitment',            relatedUseCases: ['marketing-agencies', 'manufacturing', 'b2b-saas'] },
  { slug: 'b2b-saas',               relatedUseCases: ['cybersecurity', 'marketing-agencies', 'recruitment'] },
]

export const industrySlugs = industryStructure.map((s) => s.slug)
export const FEATURED_SLUGS = ['b2b-saas', 'financial-services', 'recruitment']

function contentFor(lang) {
  return content[lang] || content.en
}

// Merge structure + localized content for one slug. Falls back to English for
// any missing translation.
export function getIndustry(lang, slug) {
  const c = contentFor(lang)
  const data = c[slug] || content.en[slug]
  if (!data) return null
  const struct = industryStructure.find((s) => s.slug === slug)
  return {
    slug,
    relatedUseCases: struct ? struct.relatedUseCases : [],
    ...data,
  }
}

// All industries in display order for a given language.
export function getIndustries(lang) {
  return industryStructure
    .map((s) => getIndustry(lang, s.slug))
    .filter(Boolean)
}
