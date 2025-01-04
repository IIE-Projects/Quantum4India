import './App.css'
import { About, Blogs, Contact, Events, FocusArea, HeroSection } from './components'
import { Footer, Navbar } from './components/navigation'

function App() {

  return (
    <>
      <Navbar />

      <HeroSection />
      <About />
      <FocusArea />
      <Blogs />
      <Events />
      <Contact />

      <Footer />

    </>
  )
}

export default App
