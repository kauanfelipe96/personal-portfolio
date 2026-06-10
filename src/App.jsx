import { useLayoutEffect, useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import AuraBackground from './components/AuraBackground'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experiences from './components/Experiences'
import Stack from './components/Stack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
      <AuraBackground intensity={0.4} />
      <div className="content">
        <Navbar />
        <main className="main">
          <Home />
          <Experiences />
          <Stack />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
