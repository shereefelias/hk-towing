import Navbar from './components/Navbar';
import HolidayBanner from './components/HolidayBanner';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
// import Team from './components/Team';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCallBar from './components/StickyCallBar';
import { useScrollDepth } from './hooks/useScrollDepth';
import './index.css';

export default function App() {
  useScrollDepth();
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to Main Content</a>
      <Navbar />
      <HolidayBanner />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        {/* <Team /> */}
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
