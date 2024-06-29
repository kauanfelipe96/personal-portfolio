import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidebarComponent from './components/SidebarComponent'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'
import Preloader from "./components/Preloader"

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1500);
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <>
      {screenLoading ?
        <Preloader />
        :
        <>
          <SidebarComponent setDarkMode={setDarkMode} darkMode={darkMode} />
          <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
            <div className="lg:ml-[256px] ml-0">
              <Home />
              <About />
              <Experiences />
            </div>
          </div>
        </>
      }
    </>
  )
}


export default App
