

import React, { useState, useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { FaTelegram, FaYoutube } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/images/Logo.png'

// Updated NavbarLinks with Career dropdown
export const NavbarLinks = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Services",
    path: "/services"
  },
  {
    title: "Blogs",
    path: "/blogs"
  },
  {
    title: "Career",
    path: "#",
    submenu: [
      { title: "UPSC", path: "/career/upsc-exam" },
      { title: "UPPSC", path: "/career/uppcs" },
      {
        title: "SSC",
        path: "#",
        submenu: [
          { title: "SSC CGL", path: "/career/ssc/cgl-exam" },
          { title: "SSC CHSL", path: "/career/ssc/chsl-exam" },
          { title: "SSC GD", path: "/career/ssc/gd-exam" },
          { title: "SSC MTS", path: "/career/ssc/mts-exams" },
          { title: "SSC CPO", path: "/career/ssc/cpo-exam" },
          { title: "SSC JE", path: "/career/ssc/je-exam" },
          { title: "SSC Stenographer", path: "/career/ssc/stanographer-exam" },
          { title: "Bank Exams", path: "/career/ssc/bank-exams" }
        ]
      },
       {
  title: "Railway",
  path: "#",
  submenu: [
    { title: "RRB ALP Exam", path: "/career/railway/alp-exam" },
    { title: "RPF Constable Exam", path: "/career/railway/rpf-constable-exam" },
    { title: "RPF SI Exam", path: "/career/railway/rpf-si-exam" },
    { title: "RRB Group D Exam", path: "/career/railway/rrb-group-d-exam" },
    { title: "RRB NTPC Exam", path: "/career/railway/rrb-ntpc-exam" }
  ]
},
      { title: "BANK", path: "/career/bank" },
      // { title: "UPSSSC", path: "/career/upsssc" },
      // { title: "UPP", path: "/career/upp" },
      // { title: "RAILWAY", path: "/career/railway" },
      {
        title: "TEACHING",
        path: "/career/teaching",
        submenu: [
          { title: "UP Super TET", path: "/career/teaching/up-super-tet" },
          { title: "DSSSB Exam", path: "/career/teaching/dssb-exam" },
          { title: "NVS Exam", path: "/career/teaching/nvs-exam" },
          { title: "KVS Primary Teacher", path: "/career/teaching/kvs-primary-exam" },
          { title: "CTET / UPTET", path: "/career/teaching/ctet-uptet-exam" },
        ],
      },
    ]
  },
  {
    title: "About Us",
    path: "/aboutus"
  },
  {
    title: "Contact Us",
    path: "/contactus"
  }
];

function NavItem({ href = "#", children, isScrolling, isHomePage, isMobile, onClick, hasSubmenu, submenu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isParentHovered, setIsParentHovered] = useState(false);
  const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Use effect to control dropdown visibility based on hover states
  useEffect(() => {
    if (hasSubmenu && !isMobile) {
      if (isParentHovered || isSubmenuHovered) {
        setDropdownOpen(true);
      } else {
        // Small delay before closing to make transition smoother
        const timer = setTimeout(() => {
          setDropdownOpen(false);
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [isParentHovered, isSubmenuHovered, hasSubmenu, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const textColorClass = isMobile
    ? "text-black" // Always black on mobile
    : isScrolling 
      ? "hover:text-blue-600 text-black" // Black when scrolling
      : isHomePage 
        ? "hover:text-blue-700 text-white" // White on home page (desktop)
        : "hover:text-blue-700 text-black"; // Black on other pages (desktop)

  if (hasSubmenu) {
    return (
      <li 
        className="relative" 
        ref={dropdownRef}
      >
        <button
          onClick={isMobile ? () => setDropdownOpen(!dropdownOpen) : undefined}
          className={`font-medium transition duration-300 flex items-center gap-1 cursor-pointer ${textColorClass}`}
          onMouseEnter={() => !isMobile && setIsParentHovered(true)}
          onMouseLeave={() => !isMobile && setIsParentHovered(false)}
        >
          {children} {dropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </button>
        {dropdownOpen && (
          <ul 
            className="absolute -left-10 top-full py-2 bg-white rounded-lg shadow-lg min-w-[150px] z-50"
            onMouseEnter={() => !isMobile && setIsSubmenuHovered(true)}
            onMouseLeave={() => !isMobile && setIsSubmenuHovered(false)}
          >
            {submenu.map((item, index) => (
  <li key={index} className="relative group">
    {item.submenu ? (
      <>
        <button className="flex items-center justify-between w-full px-4 py-2 text-left text-black hover:bg-gray-100">
          {item.title}
          <FaChevronRight className="ml-2" size={10} />
        </button>
        <ul className="absolute top-0 left-full mt-0 ml-[1px] w-40 bg-white rounded-lg shadow-lg hidden group-hover:block z-50">
          {item.submenu.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link
                to={subItem.path}
                className="block px-4 py-2 text-black hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <Link
        to={item.path}
        className="block px-4 py-2 text-black hover:bg-gray-100"
        onClick={() => setDropdownOpen(false)}
      >
        {item.title}
      </Link>
    )}
  </li>
))}

          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <a
        href={href}
        onClick={onClick} 
        className={`font-medium transition duration-300 ${textColorClass}`}
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if on the home page
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && 
          !mobileMenuRef.current?.contains(event.target) && 
          !hamburgerButtonRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionPosition - offset; // Scroll to 100px above the section
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  const handleAboutUsClick = (event) => {
    event.preventDefault();
    const offset = 80; // Adjust this value as per your navbar's height
  
    if (isHomePage) {
      // If already on the homepage, just scroll to About Us
      scrollToSection("aboutus", offset);
    } else {
      // If not on the homepage, navigate to the homepage and scroll after loading
      navigate("/", { state: { scrollToAboutUs: true, offset } });
    }
  };

  const handleTeamClick = (event) => {
    event.preventDefault();
    const offset = 80; // Adjust this value as per your navbar's height
  
    if (isHomePage) {
      // If already on the homepage, just scroll to About Us
      scrollToSection("course", offset);
    } else {
      // If not on the homepage, navigate to the homepage and scroll after loading
      navigate("/", { state: { scrollToTeam: true, offset } });
    }
  };

  const handleResultClick = (event) => {
    event.preventDefault();
    const offset = 80; // Adjust this value as per your navbar's height
  
    if (isHomePage) {
      // If already on the homepage, just scroll to About Us
      scrollToSection("result", offset);
    } else {
      // If not on the homepage, navigate to the homepage and scroll after loading
      navigate("/", { state: { scrollToResult: true, offset } });
    }
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    const offset = 80; // Adjust this value as per your navbar's height
  
    if (isHomePage) {
      // If already on the homepage, just scroll to About Us
      scrollToSection("contact", offset);
    } else {
      // If not on the homepage, navigate to the homepage and scroll after loading
      navigate("/", { state: { scrollToResult: true, offset } });
    }
  };
  
  return (
    <nav className={`fixed top-0 w-full z-50 ${
      isHomePage 
        ? (isScrolling ? "bg-white" : "lg:bg-transparent bg-white") 
        : "bg-white"
    } shadow-md`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          to="/"
          className={`text-2xl flex items-center gap-3 font-bold tracking-wider ${isScrolling || !isHomePage ? "text-black" : "lg:text-white text-black"}`}
        >
          <img src={logo} width={40} alt="logo"/>
          <p>The Civil India</p> 
        </Link>
        <ul className="ml-10 hidden lg:flex items-center gap-6">
          <NavItem isScrolling={isScrolling} isHomePage={isHomePage} href="/">Home</NavItem>
          <NavItem isScrolling={isScrolling} isHomePage={isHomePage} onClick={handleAboutUsClick}>About Us</NavItem>
          <NavItem isScrolling={isScrolling} isHomePage={isHomePage} onClick={handleTeamClick}>Course</NavItem>
          <NavItem isScrolling={isScrolling} isHomePage={isHomePage} onClick={handleResultClick}>Results</NavItem>
          
          {/* Career Dropdown */}
          <NavItem 
            isScrolling={isScrolling} 
            isHomePage={isHomePage} 
            hasSubmenu={true}
            submenu={NavbarLinks.find(item => item.title === "Career").submenu}
          >
            Career
          </NavItem>
          
          <NavItem isScrolling={isScrolling} isHomePage={isHomePage} onClick={handleContactClick}>Contact Us</NavItem>
        </ul>
        <div className="hidden gap-3 lg:flex lg:items-center">
          <a href="https://www.youtube.com/@thecivilindiakanpur8682" target="_blank" rel="noopener noreferrer">
            <FaYoutube className={`text-xl ${isScrolling || !isHomePage ? "text-black" : "text-white"}`} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100069365156747" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={`text-xl ${isScrolling || !isHomePage ? "text-black" : "text-white"}`} />
          </a>
          <a href="https://www.instagram.com/thecivilindia/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`text-xl ${isScrolling || !isHomePage ? "text-black" : "text-white"}`} />
          </a>
          <a href="https://t.me/thecivilindiakanpur" target="_blank" rel="noopener noreferrer">
            <FaTelegram className={`text-xl ${isScrolling || !isHomePage ? "text-black" : "text-white"}`} />
          </a>
          <Link to="/signup">
            <button className={`py-2 px-4 text-white cursor-pointer rounded-lg ${isScrolling || !isHomePage ? "bg-blue-900" : "bg-blue-900"} text-md tracking-wide`}>
              Sign Up
            </button>
          </Link>
        </div>
        <button ref={hamburgerButtonRef} className="lg:hidden mr-3 text-2xl" onClick={handleOpen}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div ref={mobileMenuRef} className="lg:hidden max-w-full flex flex-col h-full bg-white p-4">
          <ul className="flex flex-col gap-4">
            <NavItem 
              isScrolling={isScrolling} 
              isHomePage={isHomePage} 
              isMobile={true} 
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </NavItem>
            <NavItem 
              isScrolling={isScrolling} 
              isHomePage={isHomePage} 
              isMobile={true} 
              onClick={(e) => {
                handleAboutUsClick(e);
                setOpen(false);
              }}
            >
              About Us
            </NavItem>
            <NavItem 
              isScrolling={isScrolling} 
              isHomePage={isHomePage} 
              isMobile={true} 
              onClick={(e) => {
                handleTeamClick(e);
                setOpen(false);
              }}
            >
              Course
            </NavItem>
            <NavItem 
              isScrolling={isScrolling} 
              isHomePage={isHomePage} 
              isMobile={true} 
              onClick={(e) => {
                handleResultClick(e);
                setOpen(false);
              }}
            >
              Results
            </NavItem>
            
            {/* Mobile Career Dropdown */}
            <div className="mobile-dropdown">
  <button 
    className="flex items-center justify-between w-full text-black font-medium"
    onClick={() => {
      const submenu = document.getElementById('career-submenu');
      submenu.classList.toggle('hidden');
    }}
  >
    Career <FaChevronDown size={12} />
  </button>

  {/* First-level submenu */}
  <ul id="career-submenu" className="hidden pl-4 mt-2 space-y-2">
    <li>
      <Link to="/career/upsc-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>UPSC</Link>
    </li>
    <li>
      <Link to="/career/uppcs" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>UPPSC</Link>
    </li>

    {/* SSC nested submenu */}
    <li>
      <button 
        className="flex items-center justify-between w-full text-black font-medium"
        onClick={() => {
          const sscSubmenu = document.getElementById('ssc-submenu');
          sscSubmenu.classList.toggle('hidden');
        }}
      >
        SSC <FaChevronDown size={12} />
      </button>
      <ul id="ssc-submenu" className="hidden pl-4 mt-2 space-y-2">
        <li><Link to="/career/ssc/cgl-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>SSC CGL</Link></li>
        <li><Link to="/career/ssc/chsl-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>SSC CHSL</Link></li>
        <li><Link to="/career/ssc/gd-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>SSC GD</Link></li>
        <li><Link to="/career/ssc/mts-exams" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>SSC MTS</Link></li>
        <li><Link to="/career/ssc/cpo-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>SSC CPO</Link></li>
        <li><Link to="/career/ssc/je-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>SSC JE</Link></li>
        <li><Link to="/career/ssc/stanographer-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>SSC Stenographer</Link></li>
        <li><Link to="/career/ssc/bank-exams" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>Bank Exams</Link></li>
      </ul>
    </li>

         <li>
      <button 
        className="flex items-center justify-between w-full text-black font-medium"
        onClick={() => {
          const sscSubmenu = document.getElementById('railway-submenu');
          sscSubmenu.classList.toggle('hidden');
        }}
      >
        Railway <FaChevronDown size={12} />
      </button>
      <ul id="railway-submenu" className="hidden pl-4 mt-2 space-y-2">
        <li><Link to="/career/railway/alp-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>RRB ALP EXAM</Link></li>
         <li><Link 
        to="/career/railway/rpf-constable-exam" 
        className="block text-black hover:text-blue-600" 
        onClick={() => setOpen(false)}
      >
        RPF Constable Exam
      </Link>
    </li>
    <li>
      <Link 
        to="/career/railway/rpf-si-exam" 
        className="block text-black hover:text-blue-600" 
        onClick={() => setOpen(false)}
      >
        RPF SI Exam
      </Link>
    </li>
    <li>
      <Link 
        to="/career/railway/rrb-group-d-exam" 
        className="block text-black hover:text-blue-600" 
        onClick={() => setOpen(false)}
      >
        RRB Group D Exam
      </Link>
    </li>
         <li>
      <Link 
        to="/career/railway/rrb-ntpc-exam" 
        className="block text-black hover:text-blue-600" 
        onClick={() => setOpen(false)}
      >
        RRB NTPC Exam
      </Link>
    </li>
      </ul>
    </li>

    <li>
      <Link to="/career/bank" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>BANK</Link>
    </li>
    {/* <li>
      <Link to="/career/upsssc" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>UPSSSC</Link>
    </li>
    <li>
      <Link to="/career/upp" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>UPP</Link>
    </li>
    <li>
      <Link to="/career/railway" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>RAILWAY</Link>
    </li> */}
    <li>
  <button 
    className="flex items-center justify-between w-full text-black font-medium"
    onClick={() => {
      const teachingSubmenu = document.getElementById('teaching-submenu');
      teachingSubmenu.classList.toggle('hidden');
    }}
  >
    TEACHING <FaChevronDown size={12} />
  </button>
  <ul id="teaching-submenu" className="hidden pl-4 mt-2 space-y-2">
    <li><Link to="/career/teaching/up-super-tet" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>UP Super TET</Link></li>
    <li><Link to="/career/teaching/dssb-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>DSSSB Exam</Link></li>
    <li><Link to="/career/teaching/nvs-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>NVS Exam</Link></li>
    <li><Link to="/career/teaching/kvs-primary-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>KVS Primary Teacher</Link></li>
    <li><Link to="/career/teaching/ctet-uptet-exam" className="block text-black hover:text-blue-600" onClick={() => setOpen(false)}>CTET / UPTET</Link></li>
  </ul>
</li>
  </ul>
</div>
            
            <NavItem 
              isScrolling={isScrolling} 
              isHomePage={isHomePage} 
              isMobile={true} 
              onClick={(e) =>{
                handleContactClick(e);
                setOpen(false);
              }}
            >
              Contact Us
            </NavItem>
            <Link to="/signup" onClick={() => setOpen(false)}>
              <button className={`py-2 px-4 text-white cursor-pointer rounded-lg bg-blue-900 text-md tracking-wide`}>
                Sign Up
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
