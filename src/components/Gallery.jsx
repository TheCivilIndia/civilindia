

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './gallery.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module

import slide_image_1 from '../assets/images/gallery/gallery1.jpg';
import slide_image_2 from '../assets/images/gallery/gallery2.jpg';
import slide_image_3 from '../assets/images/img_3.jpg';
import slide_image_4 from '../assets/images/gallery/gallery4.jpg';
import slide_image_5 from '../assets/images/img_5.jpg';
import slide_image_6 from '../assets/images/img_6.jpg';
import slide_image_7 from '../assets/images/img_7.jpg';

// Importing React Icons for the arrows


function Gallery() {
  return (
    <div className="w-full relative py-12 flex flex-col items-center justify-center">
      <h1 className="heading text-center text-5xl text-blue-500 font-bold tracking-wide py-6">Picture Gallery</h1>
      <p className='max-w-4xl text-xl font-semibold text-center tracking-wide content-center'>Explore the journey of IAS & PCS aspirants at CivilIndia through our gallery. From engaging classes to success celebrations, witness the dedication, guidance, and achievements that define our institute.</p>

      {/* Left and Right Tint Overlays */}
      {/* <div className="tint-overlay left-tint z-20"></div>
      <div className="tint-overlay right-tint z-10"></div> */}
        <div className='w-full'>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 1000, // Set autoplay delay to 1 second (1000 milliseconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
          pauseOnMouseEnter: true, // Pause autoplay on hover
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Include Autoplay module
        className="swiper_container w-full"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        {/* Custom Navigation Arrows using React Icons */}
        <div className="absolute top-1/2 left-1 transform -translate-y-1/2 z-110">
          <div className="swiper-button-prev slider-arrow text-white p-2 rounded-full z-110">
            <FaArrowLeft/>
          </div>
        </div>
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 z-200">
          <div className="swiper-button-next slider-arrow text-white p-2 rounded-full z-110">
            <FaArrowRight />
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
        </div>
      
    </div>
  );
}

export default Gallery;

// import Slider from 'react-slick';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
// import { motion } from 'framer-motion'; // Import framer-motion for animation
// import './gallery.css'; // Your custom styles

// import slide_image_1 from '../assets/images/gallery/gallery1.jpg';
// import slide_image_2 from '../assets/images/gallery/gallery2.jpg';
// import slide_image_3 from '../assets/images/img_3.jpg';
// import slide_image_4 from '../assets/images/gallery/gallery4.jpg';
// import slide_image_5 from '../assets/images/img_5.jpg';
// import slide_image_6 from '../assets/images/img_6.jpg';
// import slide_image_7 from '../assets/images/img_7.jpg';

// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-110 cursor-pointer">
//       <div className="slider-arrow text-white p-2 rounded-full" onClick={onClick}>
//         <FaArrowRight size={20} />
//       </div>
//     </div>
//   );
// }

// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-110 cursor-pointer">
//       <div className="slider-arrow text-white p-2 rounded-full" onClick={onClick}>
//         <FaArrowLeft size={20} />
//       </div>
//     </div>
//   );
// }

// function Gallery() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px', // No extra padding on sides
//     autoplay: true,
//     autoplaySpeed: 1000,
//     pauseOnHover: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerMode: true,
//         },
//       },
//     ],
//   };

//   const images = [
//     slide_image_1,
//     slide_image_2,
//     slide_image_3,
//     slide_image_4,
//     slide_image_5,
//     slide_image_6,
//     slide_image_7,
//   ];

//   return (
//     <div className="w-11/12 px-10 relative py-12 flex flex-col items-center justify-center">
//       <h1 className="heading text-center text-5xl text-blue-500 font-bold tracking-wide py-6">
//         Picture Gallery
//       </h1>
//       <p className="max-w-4xl text-xl font-semibold text-center tracking-wide content-center">
//         Explore the journey of IAS & PCS aspirants at CivilIndia through our gallery. From engaging
//         classes to success celebrations, witness the dedication, guidance, and achievements that
//         define our institute.
//       </p>

//       {/* Slick Slider */}
//       <div className="w-full mt-8">
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <motion.div
//               key={index}
//               className="slide-container"
//               whileHover={{ scale: 1.1 }} // Enlarge slightly on hover
//               whileTap={{ scale: 0.95 }} // Shrink slightly on tap
//             >
//               <img src={image} alt={`slide_image_${index + 1}`} className="slider-image" />
//             </motion.div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Gallery;
