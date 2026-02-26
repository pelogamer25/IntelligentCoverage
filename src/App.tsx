import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import Security from './components/Security';
import Booking from './components/Booking';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="grain-overlay" />
      <div className="gradient-bg" />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Metrics />
        <Testimonials />
        <Security />
        <Booking />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
