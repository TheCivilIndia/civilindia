import React from "react";
import Slider from "react-slick";
import Gaurav from '../assets/images/Students/GauravPratap.webp'
import Iti from '../assets/images/Students/ItiSharma.webp'
import Arjoo from '../assets/images/Students/Aarjoo.webp'
import Ruchi from '../assets/images/Students/RuchiSharma.webp'
import Priyanka from '../assets/images/Students/Priyanka.webp'
import Mahesh from '../assets/images/Students/Mahesh.webp'
import SaurabhSachan from '../assets/images/Students/SaurabhSachan.webp'

const TestimonialsData = [
  {
    id: 1,
    name: "Gaurav Pratap",
    text: "My name is Gaurav Pratap. I'm selected as UPSI Batch 2024. Civil india institute provided me exam oriented guidance.The staff and teachers are supportive and have excellent experience. The facilities are top notch, and the environment helped me to achieve my goal.",
    img: Gaurav,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Iti Sharma",
    text: "I'm Iti Sharma selected as upsssc(Junior assistant).The faculty of civil india actively monitored my progress and provided individual guidance to address my weaknesses, which significantly boosted my confidence.Thank you",
    img: Iti,
    delay: 0.5,
  },
  {
    id: 3,
    name: "Arju Prajapati",
    text: "I'm Arju Prajapati selected as UPSI. I'm really thankful to all civil india team, the study material provided by the institute is well  structured, updated and covered all important topics, ensuring I had access to the best possible resources.",
    img: Arjoo,
    delay: 0.8,
  },
  {
    id: 4,
    name: "Ruchi Sharma",
    text: "My name is Ruchi Sharma selected as Clerk at Allahabad highcourt.The frequent mock tests with detailed analysis helped me identify my strengths and weaknesses, allowing me to focus on areas needing improvement.",
    img: Ruchi,
    delay: 1.1,
  },
  {
    id: 5,
    name: "Priyanka Purwar",
    text: "My name is Priyanka Purwar selected as BPSC teacher.I was very under confident that how I will cover syllabus with practice but guidance of Civil India's faculty I was able to crack the exam.",
    img: Priyanka,
    delay: 1.1,
  },
  {
    id: 6,
    name: "Sushmita Dwivedi",
    text: "My name is Sushmita Dwivedi selected as BPSC teacher.I'm very Thankful to the faculty of civil india who provided me exam oriented guidance that's why I cracked the exam,",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
  {
    id: 7,
    name: "Arvind Kumar",
    text: "My name is Arvind Kumar selected as a employee of Railway.I was continuously failed in every exam due to wrong guidance but when I started classes in civil India I got the exam oriented support that's why I was able to crack the exam.",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
  {
    id: 8,
    name: "Mahesh Kumar",
    text: "My name is Mahesh Kumar selected in SSC CGL.The Civil India Institute is a reputable coaching institute with experienced faculty, providing good quality study material and a focused learning environment for competitive exams.",
    img: Mahesh,
    delay: 1.1,
  },
  {
    id: 9,
    name: "Saurabh Sachan",
    text: "My name is Saurabh Sachan selected in SSC CGL.The expertise and Teaching skills of the facilities of civil india is Appreciative, particularly for their in depth subject knowledge and ability to explain complex concepts clearly.",
    img: SaurabhSachan,
    delay: 1.1,
  },

];
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-10 hidden sm:block"
    onClick={onClick}
  >
    &#10094;
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute -right-5  top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer z-10 hidden sm:block"
    onClick={onClick}
  >
    &#10095;
  </div>
);

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    nextArrow: <NextArrow />,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" py-12 sm:py16 lg:py-20 mt-0 sm:me-5 lg:mt-10 w-full flex justify-center bg-[#0f256e] ">
      <div className="container w-11/12 my-1 py-1 ">
        {/* header section */}
        {/* <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl ">
            What Our Students Say About Us
          </p>
        </div> */}
        <div className="space-y-4 text-center max-w-[90%] md:max-w-[600px] mx-auto mb-4 md:mb-6 ">
  <h1 className="uppercase text-lg md:font-bold text-white md:text-4xl">
    OUR TESTIMONIALS
  </h1>
  <p className="font-semibold text-2xl md:text-3xl text-white">
    What Our Students Say About Us
  </p>
</div>

        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-[#0063ff]/10 hover-border-fix cursor-pointer">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-semibold text-white">
                          {item.name}
                        </p>
                 
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-white">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
