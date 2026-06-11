import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Layanan from './components/Layanan'
import DataSection from './components/DataSection'
import Berita from './components/Berita'
import Users from './components/Users'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
      <Navbar />
      <Hero />
      <Layanan />
      <DataSection/>
      <Berita />
      <Users />
      <Footer />
    </div>
    
  )
}

export default App
