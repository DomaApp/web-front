import { useTheme } from './hooks/useTheme.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Screenshots from './components/Screenshots.jsx'
import Testimonials from './components/Testimonials.jsx'
import DownloadCTA from './components/DownloadCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Testimonials />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
