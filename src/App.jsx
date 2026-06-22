import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
