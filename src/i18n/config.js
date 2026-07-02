// Central language configuration shared across the i18n layer, routing and SEO.
//
// English is the default/canonical language and lives at the root ("/") with no
// URL prefix. The other languages live under a path prefix ("/es", "/fr", "/pt").
// `hreflang` uses regional variants for SEO targeting.

export const DEFAULT_LANG = 'en'

// Order here is the order shown in the language switcher.
export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English',    hreflang: 'en-CA' },
  { code: 'es', label: 'ES', name: 'Español',    hreflang: 'es-MX' },
  { code: 'fr', label: 'FR', name: 'Français',   hreflang: 'fr-CA' },
  { code: 'pt', label: 'PT', name: 'Português',  hreflang: 'pt-BR' },
]

export const LANG_CODES = LANGUAGES.map((l) => l.code)

// Languages that carry a URL prefix (everything except the default).
export const PREFIXED_LANGS = LANG_CODES.filter((c) => c !== DEFAULT_LANG)

export const STORAGE_KEY = 'intelinx_lang'

export const SITE_URL = 'https://intelinx.ai'

export function isSupportedLang(code) {
  return LANG_CODES.includes(code)
}

export function hreflangFor(code) {
  const entry = LANGUAGES.find((l) => l.code === code)
  return entry ? entry.hreflang : code
}
