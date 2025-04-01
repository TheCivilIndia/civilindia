import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FaTelegram, FaYoutube } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/images/Logo.png'

function NavItem({ href = "#", children, isScrolling, isHomePage, isMobile, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick} 
        className={`font-medium transition duration-300 ${
          isMobile
            ? "text-black" // Always black on mobile
            : isScrolling 
            ? "hover:text-blue-600 text-black" // Black when scrolling
            : isHomePage 
            ? "hover:text-blue-700 text-white" // White on home page (desktop)
            : "hover:text-blue-700 text-black" // Black on other pages (desktop)
        }`}
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if on the home page
  const navigate = useNavigate();
  const mobileMenuRef = React.useRef(null);
  const hamburgerButtonRef = React.useRef(null);

  function handleOpen() {
    setOpen((cur) => !cur);
  }
  React.useEffect(() => {
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
  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  React.useEffect(() => {
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
    <nav className={`fixed top-0 w-full z-50 ${isScrolling ? "bg-white" : "lg:bg-transparent bg-white"} shadow-md`}>

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
          
          <NavItem isScrolling={isScrolling} isHomePage={isHomePage} onClick={handleContactClick}>Contact Us</NavItem>
      
        </ul>
        <div className="hidden gap-3 lg:flex lg:items-center">
          <a href="https://www.youtube.com/@thecivilindiakanpur8682" target="_blank">
            <FaYoutube className={`text-xl ${isScrolling || !isHomePage ? "text-black" : "text-white"}`} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100069365156747" target="_blank">
            <FaFacebook className={`text-xl ${isScrolling || !isHomePage ? "text-black" : "text-white"}`} />
          </a>
          <a href="https://www.instagram.com/thecivilindia/?utm_medium=copy_link" target="_blank">
            <FaInstagram className={`text-xl ${isScrolling || !isHomePage ? "text-black" : "text-white"}`} />
          </a>
          <a href="https://t.me/thecivilindiakanpur" target="_blank">
            <FaTelegram className={`text-xl ${isScrolling || !isHomePage ? "text-black" : "text-white"}`} />
          </a>
          <Link to="/signup">
            <button className={`py-2 px-4 text-white cursor-pointer rounded-lg ${isScrolling || !isHomePage ? "bg-blue-900" : "bg-blue-900"} text-md tracking-wide`}>
              Sign Up
            </button>
          </Link>
        </div>
        {/* <button className="lg:hidden mr-3 text-2xl" onClick={handleOpen}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden max-w-full flex flex-col h-full bg-white p-4">
          <ul className="flex flex-col gap-4">
            <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true} href="/">Home</NavItem>
            <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true} onClick={handleAboutUsClick}>About Us</NavItem>
            <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true} onClick={handleTeamClick}>Course</NavItem>
            <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true} onClick={handleResultClick}>Results</NavItem>
            <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true}>Contact Us</NavItem>
           
            <Link to="/signup">
            <button className={`py-2 px-4 text-white cursor-pointer rounded-lg bg-blue-900 text-md tracking-wide`}>
              Sign Up
            </button>
          </Link>
          </ul>
        </div>
      )} */}
      <button ref={hamburgerButtonRef} name="menu-button" aria-label="Open navigation menu" className="lg:hidden mr-3 text-2xl" onClick={handleOpen}>
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
        <NavItem 
          isScrolling={isScrolling} 
          isHomePage={isHomePage} 
          isMobile={true} 
          onClick={(e) =>{handleContactClick(e);
           setOpen(false)}}
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



// import React from "react";
// import { FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
// import { FaTelegram, FaYoutube } from "react-icons/fa6";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from '../assets/images/Logo.png'

// function NavItem({ href = "#", children, isScrolling, isHomePage, isMobile, onClick }) {
//   return (
//     <li>
//       <a
//         href={href}
//         onClick={onClick} 
//         className={`font-medium transition duration-300 ${
//           isMobile
//             ? "text-black" // Always black on mobile
//             : isScrolling 
//             ? "hover:text-blue-600 text-black" // Black when scrolling
//             : isHomePage 
//             ? "hover:text-blue-700 text-white" // White on home page (desktop)
//             : "hover:text-blue-700 text-black" // Black on other pages (desktop)
//         }`}
//       >
//         {children}
//       </a>
//     </li>
//   );
// }

// export function Navbar() {
//   const [open, setOpen] = React.useState(false);
//   const [isScrolling, setIsScrolling] = React.useState(false);
//   const location = useLocation();
//   const isHomePage = location.pathname === "/"; // Check if on the home page
//   const navigate = useNavigate();

//   function handleOpen() {
//     setOpen((cur) => !cur);
//   }

//   React.useEffect(() => {
//     window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
//   }, []);

//   React.useEffect(() => {
//     function handleScroll() {
//       setIsScrolling(window.scrollY > 0);
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId, offset = 80) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
//       const offsetPosition = sectionPosition - offset; // Scroll to 100px above the section
  
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       });
//     }
//   };

//   const handleAboutUsClick = (event) => {
//     event.preventDefault();
//     const offset = 80; // Adjust this value as per your navbar's height
  
//     if (isHomePage) {
//       scrollToSection("aboutus", offset);
//     } else {
//       navigate("/", { state: { scrollToAboutUs: true, offset } });
//     }
//   };

//   const handleTeamClick = (event) => {
//     event.preventDefault();
//     const offset = 80; // Adjust this value as per your navbar's height
  
//     if (isHomePage) {
//       scrollToSection("course", offset);
//     } else {
//       navigate("/", { state: { scrollToTeam: true, offset } });
//     }
//   };

//   const handleResultClick = (event) => {
//     event.preventDefault();
//     const offset = 80; // Adjust this value as per your navbar's height
  
//     if (isHomePage) {
//       scrollToSection("result", offset);
//     } else {
//       navigate("/", { state: { scrollToResult: true, offset } });
//     }
//   };

//   return (
//     <nav className={`fixed top-0 w-full z-50 ${isScrolling || open ? "bg-white" : "bg-transparent"} shadow-md`}>
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <Link
//           to="/"
//           className={`text-2xl flex items-center gap-3 font-bold tracking-wider ${isScrolling || !isHomePage || open ? "text-black" : "text-white"}`}
//         >
//           <img src={logo} width={40} alt="logo" />
//           <p>The Civil India</p>
//         </Link>
//         <ul className="ml-10 hidden lg:flex items-center gap-6">
//           <NavItem isScrolling={isScrolling} isHomePage={isHomePage} href="/">Home</NavItem>
//           <NavItem isScrolling={isScrolling} isHomePage={isHomePage} onClick={handleAboutUsClick}>About Us</NavItem>
//           <NavItem isScrolling={isScrolling} isHomePage={isHomePage} onClick={handleResultClick}>Results</NavItem>
//           <NavItem isScrolling={isScrolling} isHomePage={isHomePage} onClick={handleTeamClick}>Course</NavItem>
//           <NavItem isScrolling={isScrolling} isHomePage={isHomePage}>Contact Us</NavItem>
//         </ul>
//         <div className="hidden gap-3 lg:flex lg:items-center">
//           <a href="https://www.youtube.com/@thecivilindiakanpur8682" target="_blank">
//             <FaYoutube className={`text-xl ${isScrolling || !isHomePage || open ? "text-black" : "text-white"}`} />
//           </a>
//           <a href="https://www.facebook.com/profile.php?id=100069365156747" target="_blank">
//             <FaFacebook className={`text-xl ${isScrolling || !isHomePage || open ? "text-black" : "text-white"}`} />
//           </a>
//           <a href="https://www.instagram.com/thecivilindia/?utm_medium=copy_link" target="_blank">
//             <FaInstagram className={`text-xl ${isScrolling || !isHomePage || open ? "text-black" : "text-white"}`} />
//           </a>
//           <a href="https://t.me/thecivilindiakanpur" target="_blank">
//             <FaTelegram className={`text-xl ${isScrolling || !isHomePage || open ? "text-black" : "text-white"}`} />
//           </a>
//           <Link to="/signup">
//             <button className={`py-2 px-4 text-white cursor-pointer rounded-lg ${isScrolling || !isHomePage || open ? "bg-blue-900" : "bg-blue-900"} text-md tracking-wide`}>
//               Sign Up
//             </button>
//           </Link>
//         </div>
//         <button className="lg:hidden mr-3 text-2xl" onClick={handleOpen}>
//           {open ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//       {open && (
//         <div className="lg:hidden max-w-full flex flex-col h-full bg-white p-4">
//           <ul className="flex flex-col gap-4">
//             <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true} href="/">Home</NavItem>
//             <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true} onClick={handleAboutUsClick}>About Us</NavItem>
//             <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true} onClick={handleTeamClick}>Course</NavItem>
//             <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true} onClick={handleResultClick}>Results</NavItem>
//             <NavItem isScrolling={isScrolling} isHomePage={isHomePage} isMobile={true}>Contact Us</NavItem>
//             <Link to="/signup">
//               <button className={`py-2 px-4 text-white cursor-pointer rounded-lg bg-blue-900 text-md tracking-wide`}>
//                 Sign Up
//               </button>
//             </Link>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;