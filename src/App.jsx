import { LanguageProvider } from './i18n/LanguageContext'
import AuraBackground from './components/AuraBackground'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experiences from './components/Experiences'
import Stack from './components/Stack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <AuraBackground intensity={0.4} />
      <div className="relative z-[1]">
        <Navbar />
        <main className="mx-auto max-w-container px-pad">
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
