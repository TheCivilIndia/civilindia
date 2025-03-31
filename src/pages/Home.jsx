
import { useLocation } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import BrandSlider from '../components/BrandLogoSlider';
import Courses from '../components/Courses';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import HeroSection from '../components/HeroSection';
import NumberCounter from '../components/NumberCounter';
import Result from '../components/Result';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import WhyChooseUs from '../components/WhyChooseUs';
import { useEffect } from 'react';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAboutUs) {
      const aboutUsSection = document.getElementById("aboutus");
      const offset = location.state.offset || 80; // Default offset
  
      if (aboutUsSection) {
        const sectionPosition = aboutUsSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      
    }
    else if (location.state?.scrollToTeam) {
      const aboutUsSection = document.getElementById("course");
      const offset = location.state.offset || 80; // Default offset
  
      if (aboutUsSection) {
        const sectionPosition = aboutUsSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      
    }
    else if (location.state?.scrollToResult) {
      const aboutUsSection = document.getElementById("result");
      const offset = location.state.offset || 80; // Default offset
  
      if (aboutUsSection) {
        const sectionPosition = aboutUsSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      
    }
  }, [location]);
  
  return (
    <div className='w-full min-h-screen flex flex-col items-center overflow-x-hidden gap-2 '>
        <HeroSection/>
        <AboutUs id="aboutus"/>
        <Courses id="course"/>
        <WhyChooseUs/>
        <NumberCounter/>
        {/* <Gallery/> */}
        <Testimonial/>
        <DownloadApp/>
        <Result id="result"/>
        <Team id="team"/>
        <Contact id="contact"/>
        {/* <BrandSlider/> */}
        <Footer/>
    </div>
  )
}

export default Home