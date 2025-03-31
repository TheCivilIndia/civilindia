//import React from "react";
// import './brand.css'
// import FlipCard from "./cards/ResultFlipCard";
// import Annapurna from '../assets/images/Students/Annapurna.webp'
// import Neelendra from '../assets/images/Students/Neelendra.webp'
// import Shilpi from '../assets/images/Students/Shilpi.webp'
// import ArunYadav from '../assets/images/Students/ArunYadav.webp'
// import RajolTrivedi from '../assets/images/Students/RajolTrivedi.webp'
// import RohitKumar from '../assets/images/Students/RohitKumar.webp'
// import DeepSonkar from '../assets/images/Students/DeepSonkar.webp'
// import RajKishor from '../assets/images/Students/RajKishor.webp'

// const TestimonialsData = [
//   {
//     id: 10,
//     name: "Annapurna Mishra",
//     text: "My name is Annapurna. I'm selected as BPSC Batch 2024. Civil india institute provided me exam oriented guidance.The staff and teachers are supportive and have excellent experience.The facilities are top notch, and the environment helped me to achieve my goal.",
//     img: Annapurna,
//     delay: 1.1,
//   },
//   // {
//   //   id: 11,
//   //   name: "Balgovind",
//   //   text: "I'm Balgovind selected in UPP.The faculty of civil india actively monitored my progress and provided individual guidance to address my weaknesses, which significantly boosted my confidence.Thank you",
//   //   img: "https://picsum.photos/103/103",
//   //   delay: 1.1,
//   // },
//   {
//     id: 12,
//     name: "Neelendra Shakya",
//     text: "I'm Neelendra selected as UPSI. I'm really thankful to all civil india team, the study material provided by the institute is well  structured, updated and covered all important topics, ensuring I had access to the best possible resources.",
//     img: Neelendra,
//     delay: 1.1,
//   },
//   {
//     id: 13,
//     name: "Shilpi Gupta",
//     text: "My name is Shilpi selected as UPSI.The frequent mock tests with detailed analysis helped me identify my strengths and weaknesses, allowing me to focus on areas needing improvement.",
//     img: Shilpi,
//     delay: 1.1,
//   },
//   {
//     id: 14,
//     name: "Arun Yadav",
//     text: "My name is Arun Yadav selected in RPF.I was very under confident that how I will cover syllabus with practice but guidance of Civil India's faculty I was able to crack the exam.",
//     img: ArunYadav,
//     delay: 1.1,
//   },
//   {
//     id: 15,
//     name: "Rohit Kumar",
//     text: "My name is Rohit Kumar selected as UPSI.I'm very Thankful to the faculty of civil india who provided me exam oriented guidance that's why I cracked the exam,",
//     img: RohitKumar,
//     delay: 1.1,
//   },
//   {
//     id: 16,
//     name: "Rajol Trivedi",
//     text: "My name is Rajol Trivedi selected as ASM.I was continuously failed in every exam due to wrong guidance but when I started classes in civil India I got the exam oriented support that's why I was able to crack the exam.",
//     img: RajolTrivedi,
//     delay: 1.1,
//   },
//   {
//     id: 17,
//     name: "Deep Sonkar",
//     text: "My name is Deep Sonkar selected in RRB GROUP D.The Civil India Institute is a reputable coaching institute with experienced faculty, providing good quality study material and a focused learning environment for competitive exams.",
//     img: DeepSonkar,
//     delay: 1.1,
//   },
//   {
//     id: 18,
//     name: "Raj Kishore",
//     text: "My name is Raj Kishore selected as ALP.The expertise and Teaching skills of the facilities of civil india is Appreciative, particularly for their in depth subject knowledge and ability to explain complex concepts clearly.",
//     img: RajKishor,
//     delay: 1.1,
//   },
// ];
// const Result = ({ id }) => {
//   const sliderItems = [...TestimonialsData, ...TestimonialsData];
//   const trackRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const animationRef = useRef(null);
//   const startX = useRef(0);
//   const initialScroll = useRef(0);

//   // Auto-scroll animation
//   useEffect(() => {
//     const animate = () => {
//       if (!isHovered && !isDragging && trackRef.current) {
//         const currentTransform = getCurrentTransform();
//         let newTransform = currentTransform - 0.02;
        
//         if (newTransform <= -50) newTransform = 0;
//         trackRef.current.style.transform = `translateX(${newTransform}%)`;
//       }
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     animationRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationRef.current);
//   }, [isHovered, isDragging]);

//   // Manual navigation
//   const handleNavigation = (direction) => {
//     const currentTransform = getCurrentTransform();
//     const scrollAmount = direction === 'prev' ? 5 : -5;
//     const newTransform = currentTransform + scrollAmount;
    
//     trackRef.current.style.transform = `translateX(${newTransform}%)`;
//     resetAutoScrollTimeout();
//   };

//   // Drag functionality
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     startX.current = e.clientX;
//     initialScroll.current = getCurrentTransform();
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
    
//     const deltaX = e.clientX - startX.current;
//     const containerWidth = containerRef.current.offsetWidth;
//     const scrollPercent = (deltaX / containerWidth) * 100;
//     trackRef.current.style.transform = `translateX(${initialScroll.current - scrollPercent}%)`;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     resetAutoScrollTimeout();
//   };

//   // Helpers
//   const getCurrentTransform = () => {
//     return parseFloat(
//       trackRef.current.style.transform
//         .replace('translateX(', '')
//         .replace('%)', '')
//     ) || 0;
//   };

//   const resetAutoScrollTimeout = () => {
//     setIsHovered(true);
//     setTimeout(() => setIsHovered(false), 3000);
//   };

//   return (
//     <div id={id} className="py-12 md:py-16 lg:py-20 w-full flex justify-center bg-[#0f256e]">
//       <div className="w-full my-1 py-1 relative">
//         {/* Header same as before */}
        
//         <div 
//           className="brand-slider"
//           ref={containerRef}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           //onMouseLeave={handleMouseUp}
//         >
//           <div 
//             className="slider-track" 
//             ref={trackRef}
//             style={{ transform: 'translateX(0%)' }}
//           >
//             {sliderItems.map((item, index) => (
//               <FlipCard key={`${item.id}-${index}`} item={item} />
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button 
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
//             onClick={() => handleNavigation('prev')}
//           >
//             <ChevronLeft size={24} className="text-white" />
//           </button>
//           <button 
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
//             onClick={() => handleNavigation('next')}
//           >
//             <ChevronRight size={24} className="text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Result;



import React from "react";
import Slider from "react-slick";
import FlipCard from "./cards/ResultFlipCard";
import Annapurna from '../assets/images/Students/Annapurna.webp';
import Neelendra from '../assets/images/Students/Neelendra.webp';
import Shilpi from '../assets/images/Students/Shilpi.webp';
import ArunYadav from '../assets/images/Students/ArunYadav.webp';
import RajolTrivedi from '../assets/images/Students/RajolTrivedi.webp';
import RohitKumar from '../assets/images/Students/RohitKumar.webp';
import DeepSonkar from '../assets/images/Students/DeepSonkar.webp';
import RajKishor from '../assets/images/Students/RajKishor.webp';

const TestimonialsData = [
  {
    id: 10,
    name: "Annapurna Mishra",
    text: "My name is Annapurna. I'm selected as BPSC Batch 2024. Civil india institute provided me exam oriented guidance.The staff and teachers are supportive and have excellent experience.The facilities are top notch, and the environment helped me to achieve my goal.",
    img: Annapurna,
    delay: 1.1,
  },
  {
    id: 12,
    name: "Neelendra Shakya",
    text: "I'm Neelendra selected as UPSI. I'm really thankful to all civil india team, the study material provided by the institute is well  structured, updated and covered all important topics, ensuring I had access to the best possible resources.",
    img: Neelendra,
    delay: 1.1,
  },
  {
    id: 13,
    name: "Shilpi Gupta",
    text: "My name is Shilpi selected as UPSI.The frequent mock tests with detailed analysis helped me identify my strengths and weaknesses, allowing me to focus on areas needing improvement.",
    img: Shilpi,
    delay: 1.1,
  },
  {
    id: 14,
    name: "Arun Yadav",
    text: "My name is Arun Yadav selected in RPF.I was very under confident that how I will cover syllabus with practice but guidance of Civil India's faculty I was able to crack the exam.",
    img: ArunYadav,
    delay: 1.1,
  },
  {
    id: 15,
    name: "Rohit Kumar",
    text: "My name is Rohit Kumar selected as UPSI.I'm very Thankful to the faculty of civil india who provided me exam oriented guidance that's why I cracked the exam,",
    img: RohitKumar,
    delay: 1.1,
  },
  {
    id: 16,
    name: "Rajol Trivedi",
    text: "My name is Rajol Trivedi selected as ASM.I was continuously failed in every exam due to wrong guidance but when I started classes in civil India I got the exam oriented support that's why I was able to crack the exam.",
    img: RajolTrivedi,
    delay: 1.1,
  },
  {
    id: 17,
    name: "Deep Sonkar",
    text: "My name is Deep Sonkar selected in RRB GROUP D.The Civil India Institute is a reputable coaching institute with experienced faculty, providing good quality study material and a focused learning environment for competitive exams.",
    img: DeepSonkar,
    delay: 1.1,
  },
  {
    id: 18,
    name: "Raj Kishore",
    text: "My name is Raj Kishore selected as ALP.The expertise and Teaching skills of the facilities of civil india is Appreciative, particularly for their in depth subject knowledge and ability to explain complex concepts clearly.",
    img: RajKishor,
    delay: 1.1,
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-0 top-1/2 transform -translate-y-1/2 text-white text-6xl cursor-pointer z-10 hidden sm:block "
    onClick={onClick}
  >
    &#10094;
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute -right-0  top-1/2 transform -translate-y-1/2 text-white  text-6xl cursor-pointer z-110 hidden sm:block"
    onClick={onClick}
  >
    &#10095;
  </div>
);

const Result = ({ id }) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   cssEase: "ease-in-out",
  //   pauseOnHover: true,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 10000,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         arrows: true
  //       }
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         arrows: true
  //       }
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false // Hide arrows on mobile
  //       }
  //     }
  //   ],
  // };
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    nextArrow: <NextArrow />,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // Force full width for single card
          centerMode: false,
          variableWidth: false
        }
      }
    ],
  };

  return (
    <div id={id} className="py-12 md:py-16 lg:py-20 w-full flex justify-center bg-blue-900">
      <div className="w-full my-1 py-1 mx-auto">
        <div className="space-y-4 text-center max-w-[90%] md:max-w-[600px] mx-auto mb-4 md:mb-6">
          <h1 className="uppercase text-lg md:font-bold text-white md:text-4xl">
            OUR RESULTS
          </h1>
          <p className="font-semibold text-2xl md:text-3xl text-white">
            See how our students have excelled with our guidance – real success stories, real achievements!
          </p>
        </div>

        <div className="relative mx-auto w-[100%] px-1 lg:px-7"> {/* Added padding to prevent arrows from overlapping content */}
          <Slider {...settings} className="brand-slider ">
            {TestimonialsData.map((item) => (
              <div key={item.id} className="px-2">
                <FlipCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Result;
// import React, { useState } from "react";
// import './brand.css';
// import FlipCard from "./cards/ResultFlipCard";
// import Annapurna from '../assets/images/Students/Annapurna.webp';
// import Neelendra from '../assets/images/Students/Neelendra.webp';
// import Shilpi from '../assets/images/Students/Shilpi.webp';
// import ArunYadav from '../assets/images/Students/ArunYadav.webp';
// import RajolTrivedi from '../assets/images/Students/RajolTrivedi.webp';
// import RohitKumar from '../assets/images/Students/RohitKumar.webp';
// import DeepSonkar from '../assets/images/Students/DeepSonkar.webp';
// import RajKishor from '../assets/images/Students/RajKishor.webp';

// const TestimonialsData = [
//   {
//     id: 10,
//     name: "Annapurna Mishra",
//     text: "My name is Annapurna. I'm selected as BPSC Batch 2024. Civil india institute provided me exam oriented guidance.The staff and teachers are supportive and have excellent experience.The facilities are top notch, and the environment helped me to achieve my goal.",
//     img: Annapurna,
//     delay: 1.1,
//   },
//   {
//     id: 12,
//     name: "Neelendra Shakya",
//     text: "I'm Neelendra selected as UPSI. I'm really thankful to all civil india team, the study material provided by the institute is well  structured, updated and covered all important topics, ensuring I had access to the best possible resources.",
//     img: Neelendra,
//     delay: 1.1,
//   },
//   {
//     id: 13,
//     name: "Shilpi Gupta",
//     text: "My name is Shilpi selected as UPSI.The frequent mock tests with detailed analysis helped me identify my strengths and weaknesses, allowing me to focus on areas needing improvement.",
//     img: Shilpi,
//     delay: 1.1,
//   },
//   {
//     id: 14,
//     name: "Arun Yadav",
//     text: "My name is Arun Yadav selected in RPF.I was very under confident that how I will cover syllabus with practice but guidance of Civil India's faculty I was able to crack the exam.",
//     img: ArunYadav,
//     delay: 1.1,
//   },
//   {
//     id: 15,
//     name: "Rohit Kumar",
//     text: "My name is Rohit Kumar selected as UPSI.I'm very Thankful to the faculty of civil india who provided me exam oriented guidance that's why I cracked the exam,",
//     img: RohitKumar,
//     delay: 1.1,
//   },
//   {
//     id: 16,
//     name: "Rajol Trivedi",
//     text: "My name is Rajol Trivedi selected as ASM.I was continuously failed in every exam due to wrong guidance but when I started classes in civil India I got the exam oriented support that's why I was able to crack the exam.",
//     img: RajolTrivedi,
//     delay: 1.1,
//   },
//   {
//     id: 17,
//     name: "Deep Sonkar",
//     text: "My name is Deep Sonkar selected in RRB GROUP D.The Civil India Institute is a reputable coaching institute with experienced faculty, providing good quality study material and a focused learning environment for competitive exams.",
//     img: DeepSonkar,
//     delay: 1.1,
//   },
//   {
//     id: 18,
//     name: "Raj Kishore",
//     text: "My name is Raj Kishore selected as ALP.The expertise and Teaching skills of the facilities of civil india is Appreciative, particularly for their in depth subject knowledge and ability to explain complex concepts clearly.",
//     img: RajKishor,
//     delay: 1.1,
//   },
// ];

// const Result = ({ id }) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - e.currentTarget.offsetLeft);
//     setScrollLeft(e.currentTarget.scrollLeft);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - e.currentTarget.offsetLeft;
//     const walk = (x - startX) * 2;
//     e.currentTarget.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.touches[0].pageX - e.currentTarget.offsetLeft);
//     setScrollLeft(e.currentTarget.scrollLeft);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
//     const x = e.touches[0].pageX - e.currentTarget.offsetLeft;
//     const walk = (x - startX) * 2;
//     e.currentTarget.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <div id={id} className="py-12 md:py-16 lg:py-20 w-full flex justify-center bg-[#0f256e]">
//       <div className="w-full my-1 py-1">
//         <div className="space-y-4 text-center max-w-[90%] md:max-w-[600px] mx-auto mb-4 md:mb-6 ">
//           <h1 className="uppercase text-lg md:font-bold text-white md:text-4xl">
//             OUR RESULTS
//           </h1>
//           <p className="font-semibold text-2xl md:text-3xl text-white">
//             See how our students have excelled with our guidance – real success stories, real achievements!
//           </p>
//         </div>
//         <div 
//           className="brand-slider w-full"
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseUp}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={() => setIsDragging(false)}
//         >
//           <div className="slider-track">
//             {TestimonialsData.map((item) => (
//               <FlipCard key={item.id} item={item} />
//             ))}
//             {/* Duplicate the content to create the infinite effect */}
//             {TestimonialsData.map((item) => (
//               <FlipCard key={item.id + "_copy"} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Result;






// import React from "react";
// import './brand.css'
// import FlipCard from "./cards/ResultFlipCard";
// import Annapurna from '../assets/images/Students/Annapurna.webp'
// import Neelendra from '../assets/images/Students/Neelendra.webp'
// import Shilpi from '../assets/images/Students/Shilpi.webp'
// import ArunYadav from '../assets/images/Students/ArunYadav.webp'
// import RajolTrivedi from '../assets/images/Students/RajolTrivedi.webp'
// import RohitKumar from '../assets/images/Students/RohitKumar.webp'
// import DeepSonkar from '../assets/images/Students/DeepSonkar.webp'
// import RajKishor from '../assets/images/Students/RajKishor.webp'

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper'; // Import modules
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// const TestimonialsData = [
//   {
//     id: 10,
//     name: "Annapurna Mishra",
//     text: "My name is Annapurna. I'm selected as BPSC Batch 2024. Civil india institute provided me exam oriented guidance.The staff and teachers are supportive and have excellent experience.The facilities are top notch, and the environment helped me to achieve my goal.",
//     img: Annapurna,
//     delay: 1.1,
//   },
//   {
//     id: 12,
//     name: "Neelendra Shakya",
//     text: "I'm Neelendra selected as UPSI. I'm really thankful to all civil india team, the study material provided by the institute is well  structured, updated and covered all important topics, ensuring I had access to the best possible resources.",
//     img: Neelendra,
//     delay: 1.1,
//   },
//   {
//     id: 13,
//     name: "Shilpi Gupta",
//     text: "My name is Shilpi selected as UPSI.The frequent mock tests with detailed analysis helped me identify my strengths and weaknesses, allowing me to focus on areas needing improvement.",
//     img: Shilpi,
//     delay: 1.1,
//   },
//   {
//     id: 14,
//     name: "Arun Yadav",
//     text: "My name is Arun Yadav selected in RPF.I was very under confident that how I will cover syllabus with practice but guidance of Civil India's faculty I was able to crack the exam.",
//     img: ArunYadav,
//     delay: 1.1,
//   },
//   {
//     id: 15,
//     name: "Rohit Kumar",
//     text: "My name is Rohit Kumar selected as UPSI.I'm very Thankful to the faculty of civil india who provided me exam oriented guidance that's why I cracked the exam,",
//     img: RohitKumar,
//     delay: 1.1,
//   },
//   {
//     id: 16,
//     name: "Rajol Trivedi",
//     text: "My name is Rajol Trivedi selected as ASM.I was continuously failed in every exam due to wrong guidance but when I started classes in civil India I got the exam oriented support that's why I was able to crack the exam.",
//     img: RajolTrivedi,
//     delay: 1.1,
//   },
//   {
//     id: 17,
//     name: "Deep Sonkar",
//     text: "My name is Deep Sonkar selected in RRB GROUP D.The Civil India Institute is a reputable coaching institute with experienced faculty, providing good quality study material and a focused learning environment for competitive exams.",
//     img: DeepSonkar,
//     delay: 1.1,
//   },
//   {
//     id: 18,
//     name: "Raj Kishore",
//     text: "My name is Raj Kishore selected as ALP.The expertise and Teaching skills of the facilities of civil india is Appreciative, particularly for their in depth subject knowledge and ability to explain complex concepts clearly.",
//     img: RajKishor,
//     delay: 1.1,
//   },
// ];

// const Result = ({ id }) => {
//   return (
//     <div id={id} className="py-12 md:py-16 lg:py-20 w-full flex justify-center bg-[#0f256e]">
//       <div className="w-full my-1 py-1">
//         <div className="space-y-4 text-center max-w-[90%] md:max-w-[600px] mx-auto mb-4 md:mb-6">
//           <h1 className="uppercase text-lg md:font-bold text-white md:text-4xl">
//             OUR RESULTS
//           </h1>
//           <p className="font-semibold text-2xl md:text-3xl text-white">
//             See how our students have excelled with our guidance – real success stories, real achievements!
//           </p>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           slidesPerView={1}
//           spaceBetween={30}
//           navigation
//           loop={true}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           className="brand-slider"
//         >
//           {TestimonialsData.map((item, index) => (
//             <SwiperSlide key={index}>
//               <FlipCard item={item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Result;
