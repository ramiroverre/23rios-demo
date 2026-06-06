import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Experiences from './components/Experiences'
import MenuCTA from './components/MenuCTA'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Experiences />
        <MenuCTA />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
