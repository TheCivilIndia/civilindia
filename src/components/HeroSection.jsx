// import React from 'react';
// import Slider from 'react-slick';
// import image1 from '../assets/hero/Hero1.jpg';
// import image2 from '../assets/hero/Hero2.jpg';

// // Custom Previous Arrow
// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20"
//     onClick={onClick}
//   >
//     &#10094; {/* Left arrow symbol */}
//   </div>
// );

// // Custom Next Arrow
// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20"
//     onClick={onClick}
//   >
//     &#10095; {/* Right arrow symbol */}
//   </div>
// );

// // Slider settings
// const settings = {
//   dots: false, // Disable default dots
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows: true,
//   pauseOnHover: false, // Disable stopping on hover
//   prevArrow: <PrevArrow />, // Custom Previous Arrow
//   nextArrow: <NextArrow />, // Custom Next Arrow
// };

// const HeroSection = () => {
//   const images = [image1, image2];

//   return (
//     <header className="relative w-full h-screen">
//       <div className="relative z-10 h-full">
//         <Slider {...settings}>
//           {images.map((img, index) => (
//             <div key={index}>
//               <div
//                 className="w-full h-screen bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${img})`,
//                   backgroundSize: 'cover', // Ensures background image covers the area
//                   backgroundPosition: 'center', // Centers the image
//                 }}
//               >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black opacity-10"></div>

//                 {/* Hero Content */}
//                 <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
//                   <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                     Welcome to The Civil India
//                   </h1>
//                   <p className="text-lg md:text-2xl mb-6">
//                     Your Pathway to Success in Civil Services Exams
//                   </p>
//                   <a
//                     href="#courses"
//                     className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
//                   >
//                     Explore Our Courses
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </header>
//   );
// };

// export default HeroSection;



// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import image1 from '../assets/hero/Hero1.jpg';
// import image2 from '../assets/hero/Hero2.jpg';

// // Custom Previous Arrow
// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20"
//     onClick={onClick}
//   >
//     &#10094; {/* Left arrow symbol */}
//   </div>
// );

// // Custom Next Arrow
// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20"
//     onClick={onClick}
//   >
//     &#10095; {/* Right arrow symbol */}
//   </div>
// );

// // Slider settings
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 800,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   arrows: true,
//   pauseOnHover: false,
//   prevArrow: <PrevArrow />,
//   nextArrow: <NextArrow />,
// };

// // Intro animation variants
// const introVariant = {
//   hidden: { opacity: 0, y: 100 }, // Start hidden and slightly down
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
//   exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }, // Exit animation
// };

// const HeroSection = () => {
//   // Different content for each image
//   const heroContent = [
//     {
//       image: image1,
//       title: "Welcome to The Civil India",
//       subtitle: "Your Pathway to Success in Civil Services Exams",
//       buttonText: "Explore Our Courses",
//       buttonLink: "#courses",
//     },
//     {
//       image: image2,
//       title: "Achieve Your Dreams",
//       subtitle: "Guiding You Through Every Step of the Journey",
//       buttonText: "Join Us Today",
//       buttonLink: "#join",
//     },
//   ];

//   // State to control animation for each slide
//   const [currentSlide, setCurrentSlide] = useState(0); // Start with the first slide
//   const [isAnimating, setIsAnimating] = useState(true);

//   // Trigger animation after each slide change
//   const handleSlideChange = (index) => {
//     setIsAnimating(false); // Reset animation
//     setCurrentSlide(index); // Update current slide index
//     setTimeout(() => {
//       setIsAnimating(true); // Trigger animation after the new slide is visible
//     }, 100); // Small delay to ensure the new slide is visible before animating
//   };

//   return (
//     <header className="relative w-full h-screen">
//       <div className="relative z-10 h-full">
//         <Slider {...settings} afterChange={handleSlideChange}>
//           {heroContent.map((content, index) => (
//             <div key={index}>
//               <div
//                 className="w-full h-screen bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${content.image})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                 }}
//               >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black opacity-10"></div>

//                 {/* Hero Content */}
//                 {index === currentSlide && isAnimating && (
//                   <motion.div
//                     key={index} // Ensure re-render for every slide change
//                     className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     variants={introVariant}
//                   >
//                     {/* Animated Hero Title */}
//                     <motion.h1
//                       className="text-4xl md:text-6xl font-bold mb-4"
//                       variants={introVariant}
//                     >
//                       {content.title}
//                     </motion.h1>

//                     {/* Animated Hero Subtitle */}
//                     <motion.p
//                       className="text-lg md:text-2xl mb-6"
//                       variants={introVariant}
//                       transition={{ delay: 0.2 }} // Delay the subtitle animation
//                     >
//                       {content.subtitle}
//                     </motion.p>

//                     {/* Animated Button */}
//                     <motion.a
//                       href={content.buttonLink}
//                       className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
//                       variants={introVariant}
//                       transition={{ delay: 0.5 }} // Delay the button animation
//                     >
//                       {content.buttonText}
//                     </motion.a>
//                   </motion.div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </header>
//   );
// };

// export default HeroSection;
// export default HeroSection;


import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import image1 from '../assets/hero/Hero1.jpg';
import image2 from '../assets/hero/Hero04.svg';
import imagemob4 from '../assets/hero/Hero4.jpeg';
import image3 from '../assets/hero/Hero3.jpg';
import image4 from '../assets/hero/Hero5.svg';
import image5 from '../assets/hero/Hero6.svg';
import { FaGooglePlay } from 'react-icons/fa';

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20 hidden lg:block"
    onClick={onClick}
  >
    &#10094; {/* Left arrow symbol */}
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20 hidden lg:block"
    onClick={onClick}
  >
    &#10095; {/* Right arrow symbol */}
  </div>
);

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  pauseOnHover: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

// Intro animation variants
const introVariant = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and slightly lower
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' }, // Slower transition
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.8 } }, // Smooth exit
};

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on mount & resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed (768px = Tailwind's 'md')
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // commit
  const heroContent = [
    {
      image: image3,
      title: "Welcome to ",
      highlight: "The Civil India",
      subtitle: "Your Pathway to Success in Civil Services Exams",
      buttonText: "Play store",
      buttonLink: "https://play.google.com/store/apps/details?id=com.civil.india.official&hl=en-US"
    },
    {
      image: image2,
      // title: "Achieve Your Dreams",
      // subtitle: "Guiding You Through Every Step of the Journey",
      // buttonText: "Join Us Today",
      // buttonLink: "#join",
    },
  
    {
      image: image4,
      // mobImage: imagemob4,
      // title: "Achieve Your Dreams",
      // subtitle: "Guiding You Through Every Step of the Journey",
      // buttonText: "Join Us Today",
      // buttonLink: "#join",
    },{
      image: image5,
      // title: "Achieve Your Dreams",
      // subtitle: "Guiding You Through Every Step of the Journey",
      // buttonText: "Join Us Today",
      // buttonLink: "#join",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const handleSlideChange = (index) => {
    setIsAnimating(false);
    setCurrentSlide(index);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  };

  return (
    <header className="relative w-full mt-[72px] lg:mt-0 bg-white">
   { console.log("mobile",isMobile)}
      <div className="relative z-10">
        <Slider {...settings} afterChange={handleSlideChange}>
          {heroContent.map((content, index) => (
            <div key={index}>
              <div
                className="w-full h-auto 2xl:h-screen bg-cover bg-center "
                style={{
                backgroundImage: `url(${
      isMobile && content.mobImage ? content.mobImage : content.image
    })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  aspectRatio: '16/9',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-[5%] h-[97%] sm:h-[98%] md:h-[99%]"></div>

                {/* Hero Content */}
                {index === currentSlide && isAnimating && (
                  <motion.div
                    key={index}
                    className="relative w-11/12 mx-auto z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 "
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={introVariant}
                  >
                    {/* Animated Hero Title */}
                    <motion.h1
                      className="text-2xl md:text-6xl font-bold mb-2 md:mb-4"
                      variants={introVariant}
                      transition={{ duration: 1.2 }} // Increase duration for title
                    >
                      {content.title} 
                      {
                        content.highlight && (<span className='bg-blue-900 px-2 rounded-xl block sm:inline-block'>
                        {content.highlight}
                      </span>)
                      }
                      
                    </motion.h1>

                    {/* Animated Hero Subtitle */}
                    <motion.p
                      className="text-lg md:text-2xl mb-3 md:mb-6"
                      variants={introVariant}
                      transition={{ duration: 1.2, delay: 0.3 }} // Add delay for subtitle
                    >
                      {content.subtitle}
                    </motion.p>

                    {/* Animated Button */}
                    {/* <motion.a
                      href={content.buttonLink}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                      variants={introVariant}
                      transition={{ duration: 1.2, delay: 0.5 }} // Delay and longer duration for button
                    >
                      {content.buttonText}
                    </motion.a> */}
                  { content.buttonLink &&  <motion.a
  href={content.buttonLink}
  target="_blank" 
  rel="noopener noreferrer" 
  className="flex items-center justify-center bg-blue-900 text-md md:text-2xl text-white py-2 md:py-3 px-3 md:px-6 rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out"
  variants={introVariant}
  transition={{ duration: 1.2, delay: 0.5 }} // Delay and longer duration for button
>
  <FaGooglePlay className="mr-2 text-xl md:text-2xl" />
  {content.buttonText}
</motion.a>}

                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </header>
  );
};

export default HeroSection;
