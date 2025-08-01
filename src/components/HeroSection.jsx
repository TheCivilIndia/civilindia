


// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import image1 from '../assets/hero/Hero1.jpg';
// import image2 from '../assets/hero/Hero04.svg';
// import imagemob4 from '../assets/hero/Hero4.jpeg';
// import image3 from '../assets/hero/Hero3.jpg';
// import image4 from '../assets/hero/Hero5.svg';
// import image5 from '../assets/hero/Hero6.svg';
// import { FaGooglePlay } from 'react-icons/fa';

// // Custom Previous Arrow
// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20 hidden lg:block"
//     onClick={onClick}
//   >
//     &#10094; {/* Left arrow symbol */}
//   </div>
// );

// // Custom Next Arrow
// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20 hidden lg:block"
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
//   hidden: { opacity: 0, y: 50 }, // Start hidden and slightly lower
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: 'easeInOut' }, // Slower transition
//   },
//   exit: { opacity: 0, y: -50, transition: { duration: 0.8 } }, // Smooth exit
// };

// const HeroSection = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Check screen width on mount & resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed (768px = Tailwind's 'md')
//     };
    
//     handleResize(); // Initial check
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   // commit
//   const heroContent = [
//     {
//       image: image3,
//       title: "Welcome to ",
//       highlight: "The Civil India",
//       subtitle: "Your Pathway to Success in Civil Services Exams",
//       buttonText: "Play store",
//       buttonLink: "https://play.google.com/store/apps/details?id=com.civil.india.official&hl=en-US"
//     },
//     {
//       image: image2,
//       // title: "Achieve Your Dreams",
//       // subtitle: "Guiding You Through Every Step of the Journey",
//       // buttonText: "Join Us Today",
//       // buttonLink: "#join",
//     },
  
//     {
//       image: image4,
//       // mobImage: imagemob4,
//       // title: "Achieve Your Dreams",
//       // subtitle: "Guiding You Through Every Step of the Journey",
//       // buttonText: "Join Us Today",
//       // buttonLink: "#join",
//     },{
//       image: image5,
//       // title: "Achieve Your Dreams",
//       // subtitle: "Guiding You Through Every Step of the Journey",
//       // buttonText: "Join Us Today",
//       // buttonLink: "#join",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(true);

//   const handleSlideChange = (index) => {
//     setIsAnimating(false);
//     setCurrentSlide(index);
//     setTimeout(() => {
//       setIsAnimating(true);
//     }, 100);
//   };

//   return (
//     <header className="relative w-full mt-[72px] lg:mt-0 bg-white">
//    { console.log("mobile",isMobile)}
//       <div className="relative z-10">
//         <Slider {...settings} afterChange={handleSlideChange}>
//           {heroContent.map((content, index) => (
//             <div key={index}>
//               <div
//                 className="w-full h-auto 2xl:h-screen bg-cover bg-center "
//                 style={{
//                 backgroundImage: `url(${
//       isMobile && content.mobImage ? content.mobImage : content.image
//     })`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   aspectRatio: '16/9',
//                 }}
//               >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black opacity-[5%] h-[97%] sm:h-[98%] md:h-[99%]"></div>

//                 {/* Hero Content */}
//                 {index === currentSlide && isAnimating && (
//                   <motion.div
//                     key={index}
//                     className="relative w-11/12 mx-auto z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 "
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     variants={introVariant}
//                   >
//                     {/* Animated Hero Title */}
//                     <motion.h1
//                       className="text-2xl md:text-6xl font-bold mb-2 md:mb-4"
//                       variants={introVariant}
//                       transition={{ duration: 1.2 }} // Increase duration for title
//                     >
//                       {content.title} 
//                       {
//                         content.highlight && (<span className='bg-blue-900 px-2 rounded-xl block sm:inline-block'>
//                         {content.highlight}
//                       </span>)
//                       }
                      
//                     </motion.h1>

//                     {/* Animated Hero Subtitle */}
//                     <motion.p
//                       className="text-lg md:text-2xl mb-3 md:mb-6"
//                       variants={introVariant}
//                       transition={{ duration: 1.2, delay: 0.3 }} // Add delay for subtitle
//                     >
//                       {content.subtitle}
//                     </motion.p>

//                     {/* Animated Button */}
//                     {/* <motion.a
//                       href={content.buttonLink}
//                       className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
//                       variants={introVariant}
//                       transition={{ duration: 1.2, delay: 0.5 }} // Delay and longer duration for button
//                     >
//                       {content.buttonText}
//                     </motion.a> */}
//                   { content.buttonLink &&  <motion.a
//   href={content.buttonLink}
//   target="_blank" 
//   rel="noopener noreferrer" 
//   className="flex items-center justify-center bg-blue-900 text-md md:text-2xl text-white py-2 md:py-3 px-3 md:px-6 rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out"
//   variants={introVariant}
//   transition={{ duration: 1.2, delay: 0.5 }} // Delay and longer duration for button
// >
//   <FaGooglePlay className="mr-2 text-xl md:text-2xl" />
//   {content.buttonText}
// </motion.a>}

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


import React, { useEffect, useState, useCallback, memo } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import image1 from '../assets/hero/Hero1.jpg';
import image2 from '../assets/hero/Hero4.webp';
import imagemob4 from '../assets/hero/Hero4.jpeg';
import image3 from '../assets/hero/Hero3.webp';
import image4 from '../assets/hero/Hero5.webp';
import image5 from '../assets/hero/Hero6.webp';
import { FaGooglePlay } from 'react-icons/fa';

/* 
  Optimization Best Practices:
  1. **Image Optimization**: Convert images to next-gen formats (e.g., WebP, AVIF) and compress them.
  2. **Lazy Loading**: For non-critical images, consider lazy loading. Here, react-slick's lazyLoad property is enabled.
  3. **CSS & JS Minification**: Ensure CSS and JS files are minified and compressed on the server.
  4. **Code Splitting & Caching**: Use code splitting (if applicable) and leverage browser caching.
  5. **Preload Critical Resources**: Preload key assets like fonts in your HTML head.
  6. **React Optimizations**: Use React.memo and useCallback to avoid unnecessary re-renders.
*/

// Wrap arrow components in React.memo to prevent unnecessary re-renders.
const PrevArrow = memo(({ onClick }) => {
  // useCallback can also be used if onClick is defined inline in a parent
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20 hidden lg:block"
      onClick={onClick}
    >
      &#10094; {/* Left arrow symbol */}
    </div>
  );
});

const NextArrow = memo(({ onClick }) => {
  return (
    <div
      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-20 hidden lg:block"
      onClick={onClick}
    >
      &#10095; {/* Right arrow symbol */}
    </div>
  );
});

// Slider settings with lazyLoad enabled to optimize offscreen slide loading.
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
  // Lazy loading slides only when they are needed
  lazyLoad: 'ondemand',
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

// Intro animation variants for a smooth entrance
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

  // Check screen width on mount & resize to set mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed (768px = Tailwind's 'md')
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define hero content. Ensure images are optimized and compressed.
  const heroContent = [
    {
      image: image3,
      title: "Welcome to ",
      highlight: "The Civil India",
      subtitle: "Your Pathway to Success in Government Exams",
      buttonText: "Play store",
      buttonLink: "https://play.google.com/store/apps/details?id=com.civil.india.official&hl=en-US"
    },
    {
      image: image2,
      // Additional slides can be uncommented and optimized similarly
    },
    {
      image: image4,
      // mobImage: imagemob4, // Consider providing optimized mobile images
    },
    {
      image: image5,
      // Further content...
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Handle slide change with minimal re-render delay
  const handleSlideChange = useCallback((index) => {
    setIsAnimating(false);
    setCurrentSlide(index);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  }, []);

  return (
    <header className="relative w-full mt-[72px] lg:mt-0 bg-white">
    <img
    src={image2}
    alt=""
    style={{ display: 'none' }}
    fetchPriority="high"
    decoding="async"
  />
      {/* Console log for debugging; remove in production */}
      { console.log("mobile", isMobile) }
      <div className="relative z-10">
        <Slider {...settings} afterChange={handleSlideChange}>
          {heroContent.map((content, index) => (
            <div key={index}>
              <div
                className="w-full h-auto 2xl:h-screen bg-cover bg-center"
                style={{
                  // Use optimized image formats for improved load times.
                  backgroundImage: `url(${
                    isMobile && content.mobImage ? content.mobImage : content.image
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  aspectRatio: '16/9', // Maintain aspect ratio to reduce layout shifts
                }}
              >
                {/* Semi-transparent overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-[5%] h-[97%] sm:h-[98%] md:h-[99%]"></div>

                {/* Hero Content */}
                {index === currentSlide && isAnimating && (
                  <motion.div
                    key={index}
                    className="relative w-11/12 mx-auto z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={introVariant}
                  >
                    {/* Animated Hero Title */}
                    <motion.h1
                      className="text-2xl md:text-6xl font-bold mb-2 md:mb-4"
                      variants={introVariant}
                      transition={{ duration: 1.2 }} // Increased duration for smoother animation
                    >
                      {content.title} 
                      {content.highlight && (
                        <span className="bg-blue-900 px-2 rounded-xl block sm:inline-block">
                          {content.highlight}
                        </span>
                      )}
                    </motion.h1>

                    {/* Animated Hero Subtitle */}
                    <motion.p
                      className="text-lg md:text-2xl mb-3 md:mb-6"
                      variants={introVariant}
                      transition={{ duration: 1.2, delay: 0.3 }} // Delayed transition for subtitle
                    >
                      {content.subtitle}
                    </motion.p>

                    {/* Animated Button */}
                    { content.buttonLink &&  
                      <motion.a
                        href={content.buttonLink}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center bg-blue-900 text-md md:text-2xl text-white py-2 md:py-3 px-3 md:px-6 rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out"
                        variants={introVariant}
                        transition={{ duration: 1.2, delay: 0.5 }} // Delayed and longer duration for button
                      >
                        <FaGooglePlay className="mr-2 text-xl md:text-2xl" />
                        {content.buttonText}
                      </motion.a>
                    }
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
