import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANG, LANG_CODES } from './config'

// UI-string namespaces (flat/nested key → text). Deeply-nested use-case content
// is handled separately in ../designs/acctual/industry/content, not here.
import enCommon from './locales/en/common.json'
import enHome from './locales/en/home.json'
import enAbout from './locales/en/about.json'
import enUseCases from './locales/en/useCases.json'

import esCommon from './locales/es/common.json'
import esHome from './locales/es/home.json'
import esAbout from './locales/es/about.json'
import esUseCases from './locales/es/useCases.json'

import frCommon from './locales/fr/common.json'
import frHome from './locales/fr/home.json'
import frAbout from './locales/fr/about.json'
import frUseCases from './locales/fr/useCases.json'

import ptCommon from './locales/pt/common.json'
import ptHome from './locales/pt/home.json'
import ptAbout from './locales/pt/about.json'
import ptUseCases from './locales/pt/useCases.json'

const resources = {
  en: { common: enCommon, home: enHome, about: enAbout, useCases: enUseCases },
  es: { common: esCommon, home: esHome, about: esAbout, useCases: esUseCases },
  fr: { common: frCommon, home: frHome, about: frAbout, useCases: frUseCases },
  pt: { common: ptCommon, home: ptHome, about: ptAbout, useCases: ptUseCases },
}

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  supportedLngs: LANG_CODES,
  ns: ['common', 'home', 'about', 'useCases'],
  defaultNS: 'home',
  interpolation: { escapeValue: false }, // React already escapes
  react: { useSuspense: false },
})

export default i18n
