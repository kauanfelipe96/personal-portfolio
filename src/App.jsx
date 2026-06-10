import { useLayoutEffect, useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experiences from './components/Experiences'
import Education from './components/Education'
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
      <Navbar />
      <main className="w-full">
        <Home />
        <Experiences />
        <Education />
      </main>
    </LanguageProvider>
  )
}

export default App
