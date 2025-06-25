import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import GradientText from "./GradientText";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa6";
import logo from '../assets/images/Logo.png'

const LINKS = [
  { name: "Home", fallbackPage: "/" },
  { name: "About Us", id: "aboutus", fallbackPage: "/" },
  { name: "Team", id: "team", fallbackPage: "/" },
  { name: "Sign Up", fallbackPage: "/signup" }, // No id, this will navigate to signup
];

const CURRENT_YEAR = new Date().getFullYear();


const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Function to scroll to a section
  const scrollToSection = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle link click logic
  const handleLinkClick = (event, sectionId, fallbackPage) => {
    event.preventDefault();
    if (sectionId && isHomePage) {
      // Scroll to the section if on the Home page
      scrollToSection(sectionId);
    } else {
      // Navigate to fallback page (e.g., Home or Signup)
      navigate(fallbackPage, { replace: true });
    }
  };

  return (
    <footer className=" bg-[#0f256e] px-8 pt-12 w-full">
      <div className="container mx-auto px-9">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
          
            <Link to="/" className="flex items-center gap-3 text-white mb-4 text-2xl font-semibold tracking-wide">
            <img src={logo} width={40} alt="logo"/>
              The Civil India
            </Link>
            <p className="text-white mb-3 font-normal text-lg">
            9C-Z Shree Jee Complex, Sachan Guest House Chauraha,<br></br> Barra Kanpur,<br></br> 208027
            </p>
            <p className="text-white mb-3 font-normal text-lg">
            Contact : 9451395056, 9336060185

            </p>
            <p className="text-white mb-3 font-normal text-lg">
            Email : thecivilindiakanpur@gmail.com

            </p>
            {/* <ul className="flex flex-wrap items-center text-[#ffffff] justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`text-[#ffffff] py-1 font-medium tracking-wide transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul> */}
            <ul className="flex flex-wrap items-center text-[#ffffff] justify-center md:justify-start">
              {LINKS.map((link) => (
                <li key={link.id || link.fallbackPage}>
                  <a
                    href={link.id ? `#${link.id}` : link.fallbackPage}
                    onClick={(e) => handleLinkClick(e, link.id, link.fallbackPage)}
                    className="text-[#ffffff] py-1 pr-3 font-medium tracking-wide transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <h6 className="text-white mb-3">Get the app</h6>
            <div className="flex flex-col gap-2">
              {/* <button className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-lg">
                <img
                  src="/logos/logo-apple.png"
                  alt="ios"
                  className="mr-2 h-6 w-6"
                />
                <FaApple />
                App Store
              </button> */}
              <button className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out">
                <FaApple className="mr-2 text-2xl" />
                App Store
              </button>
              <button className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out">
                <FaGooglePlay className="mr-2 text-2xl" />
                Play Store
              </button>

              {/* <button className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-lg">
                <img
                  src="/logos/logo-google.png"
                  alt="android"
                  className="mr-2 h-6 w-6"
                />
                Google Play
              </button> */}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-300 py-7 md:justify-between">
        <p className="text-white text-center font-normal opacity-75">
  {/* First line - always visible */}
  <span className="block md:inline">
    &copy; {CURRENT_YEAR} The Civil India
  </span>
  
  {/* Second line - developer credit */}
  <span className="block md:inline md:ml-1">
    <span className="hidden sm:inline"> | </span> 
    Developed by{" "}
    <a
      href="https://launchwebx.com"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-1 inline-block"
    >
      <GradientText
        colors={["#ff6f61", "#ffb347", "#ff6f61", "#ffb347", "#ff6f61"]}
        animationSpeed={3}
        showBorder={false}
        className="text-lg font-bold"
      >
        LaunchWebX
      </GradientText>
    </a>
  </span>
</p>


          <div className="flex gap-2">
            <a href="https://www.youtube.com/@thecivilindiakanpur8682" target="_blank">
              <FaYoutube className="text-white text-2xl opacity-75" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100069365156747" target="_blank">
              <FaFacebook className="text-white text-2xl opacity-75" />
            </a>
            <a href="https://www.instagram.com/thecivilindia/?utm_medium=copy_link" target="_blank">
              <FaInstagram className="text-white text-2xl opacity-75" />
            </a>
            <a href="https://t.me/thecivilindiakanpur" target="_blank">
              <FaTelegram className="text-white text-2xl opacity-75" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
