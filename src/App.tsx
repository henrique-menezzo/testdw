import { useEffect, useState } from 'react'
import { ExploreScreen, type ExploreTheme } from './ExploreScreen'

function readStoredTheme(): ExploreTheme {
  try {
    const t = localStorage.getItem('dw-theme')
    if (t === 'light' || t === 'dark') return t
  } catch {
    /* ignore */
  }
  return 'light'
}

function App() {
  const [theme, setTheme] = useState<ExploreTheme>(readStoredTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem('dw-theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  return (
    <div className="app-root">
      <ExploreScreen theme={theme} onThemeChange={setTheme} />
    </div>
  )
}

export default App
