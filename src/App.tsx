import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
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
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCallBar />
    </>
  );
}
