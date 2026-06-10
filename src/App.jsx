import { useLayoutEffect, useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'
import Preloader from './components/Preloader'

function App() {
  const [screenLoading, setScreenLoading] = useState(false)

  useLayoutEffect(() => {
    setScreenLoading(true)
    const id = setTimeout(() => setScreenLoading(false), 1500)
    return () => clearTimeout(id)
  }, [])

  return (
    <LanguageProvider>
      {screenLoading && <Preloader />}
      <div className="w-full min-h-screen">
        <Home />
        <About />
        <Experiences />
      </div>
    </LanguageProvider>
  )
}

export default App
