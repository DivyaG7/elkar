
import './App.css';
import About from './components/About';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import NavbarComponent from './components/Navbar';
import NewsCarousel from './components/NewsCarousel';
import RoomCarousel from './components/RoomCarousel';
import TestimonialCarousel from './components/TestimonialCarousel';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroCarousel />
      <About />
      <RoomCarousel />
      <ExperienceSection />
      <Facilities />
      <TestimonialCarousel />
      <NewsCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
