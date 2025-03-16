import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="container mx-auto px-4 py-16">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App 