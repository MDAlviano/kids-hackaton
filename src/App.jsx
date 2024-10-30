import './App.css'
import About from './components/About'
import Aksi from './components/Aksi'
import Artikel from './components/Artikel'
import Contact from './components/Contact'
import Donasi from './components/Donasi'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Donasi/>
      <Aksi/>
      <Artikel/>
      <Contact/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
