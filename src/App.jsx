import Navbar from './components/Navbar'
import HeroSection from './components/hero/HeroSection'
import MetricsDashboard from './components/metrics/MetricsDashboard'
import VenezuelaMap from './components/map/VenezuelaMap'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy-900)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <MetricsDashboard />
        <VenezuelaMap />
      </main>
      <Footer />
    </div>
  )
}
