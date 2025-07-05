
import NavbarComponent from '../components/Navbar';
import About from '../components/About';
import ContactSection from '../components/ContactSection';
// import ExperienceSection from '../components/ExperienceSection';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
// import LocationScroller from '../components/LocationScroller';
// import NewsCarousel from '../components/NewsCarousel';
// import RoomCarousel from '../components/RoomCarousel';
// import TestimonialCarousel from '../components/TestimonialCarousel';
import ScrollTopButton from '../components/ScrollTopButton';
import useScrollToHash from '../components/useScrollToHash';

const Home = () => {
    useScrollToHash();
    return (
        <div>
            <NavbarComponent />
            <HeroCarousel />
            <About />
            {/* <RoomCarousel /> */}
            {/* <ExperienceSection /> */}
            <Facilities />
            {/* <TestimonialCarousel /> */}
            {/* <LocationScroller /> */}
            {/* <NewsCarousel /> */}
            <ContactSection />
            <Footer />
            <ScrollTopButton />
        </div>
    )
}

export default Home