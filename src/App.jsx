import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/hero/HeroSection'
import MetricsDashboard from './components/metrics/MetricsDashboard'
import VenezuelaMap from './components/map/VenezuelaMap'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) return savedTheme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <MetricsDashboard />
        <VenezuelaMap />
      </main>
      <Footer />
    </div>
  )
}
