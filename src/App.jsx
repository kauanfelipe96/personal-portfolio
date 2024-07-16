import { useState, useEffect, useLayoutEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'
import Preloader from "./components/Preloader"
import 'flowbite';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [screenLoading, setScreenLoading] = useState(false);
  const [screenLoaded, setScreenLoaded] = useState(false);

  useLayoutEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
      setScreenLoaded(true)
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
      {screenLoading && <Preloader />}
      <Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <div className="lg:ml-[256px] ml-0">
          <Home />
          <About />
          <Experiences />
        </div>
      </div>
    </>
  )
}


export default App
