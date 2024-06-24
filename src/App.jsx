import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidebarComponent from './components/SidebarComponent'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <SidebarComponent setDarkMode={setDarkMode} darkMode={darkMode} />
      <div>
        <Home />
        <About />
        <Experiences />
      </div>
    </div>
  )
}

export default App
