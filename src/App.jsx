import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidebarComponent from './components/SidebarComponent'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <SidebarComponent />
      <div>
        <Home />
        <About />
        <Experiences />
      </div>
    </div>
  )
}

export default App
