import { useSyncExternalStore } from 'react'
import { english, french, lingala } from './translations.js'

export type Language = 'fr' | 'en' | 'ln'
export type Theme = 'light' | 'dark'

const languageKey = 'tozala-language'
const themeKey = 'tozala-theme'
const listeners = new Set<() => void>()

function read(key: string) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Le choix reste actif pour la visite en cours.
  }
}

const dictionaries: Record<Language, Record<string, string>> = {
  fr: french,
  en: english,
  ln: lingala,
}

const savedLanguage = read(languageKey)
let language: Language = savedLanguage === 'en' || savedLanguage === 'ln' ? savedLanguage : 'fr'
let theme: Theme = read(themeKey) === 'dark' ? 'dark' : 'light'

function apply() {
  document.documentElement.lang = language
  document.documentElement.dataset.theme = theme
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setLanguage(next: Language) {
  language = next
  write(languageKey, language)
  apply()
}

export function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark'
  write(themeKey, theme)
  apply()
}

export function useTheme() {
  return useSyncExternalStore(subscribe, () => theme)
}

export function useLanguage() {
  const current = useSyncExternalStore(subscribe, () => language)

  return {
    language: current,
    t: (text: string) => dictionaries[current][text] ?? french[text] ?? text,
  }
}

apply()
