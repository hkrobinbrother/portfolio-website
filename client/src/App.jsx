
import './App.css'
import About from './Components/About'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Hero/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {


  return (
    <>
      <Navbar />
    <Hero />
    
    <Skills/>
    <Projects/>
    <About/>
    <Experience/>
    <Footer/>

    </>
  )
}

export default App
