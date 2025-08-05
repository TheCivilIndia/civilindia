// import React from "react";
// import { GrYoga } from "react-icons/gr";
// import { FaDumbbell } from "react-icons/fa6";
// import { GiGymBag } from "react-icons/gi";
// import { motion } from "framer-motion";
// import { SlideLeft } from "../utility/animation";
// export const WhyChooseData = [
//   {
//     id: 1,
//     title: "One-on-one Teaching",
//     desc: "We provide personalized one-on-one tutoring to meet the specific learning needs of every student. Our tutors hold degrees in special education and work closely with students to create custom lesson plans that ensure individual growth. This dedicated approach enables students to learn at their own pace and gives them the confidence to ask questions and clarify concepts in a supportive environment.",
//     icon: <GrYoga />,
//     bgColor: "#0063ff",
//     delay: 0.3,
//   },
//   {
//     id: 2,
//     title: "24/7 Tutor Availability",
//     desc: "Our tutors are available around the clock to assist students whenever they need help. We understand that learning doesn't follow a strict schedule, and our platform ensures that students receive timely support, whether it's late at night or early in the morning. With continuous availability, students can overcome academic challenges without waiting for traditional class hours.",
//     icon: <FaDumbbell />,
//     bgColor: "#73bc00",
//     delay: 0.6,
//   },
//   {
//     id: 3,
//     title: "Interactive Whiteboard",
//     desc: "Our interactive whiteboard offers a real-time learning experience, allowing students and tutors to collaborate on diagrams, equations, and visual explanations. With integrated audio and video chat, the whiteboard brings a classroom-like feel to online learning, making the sessions more engaging and productive. It’s an essential tool for effective, hands-on learning.",
//     icon: <GiGymBag />,
//     bgColor: "#fa6400",
//     delay: 0.9,
//   },
//   {
//     id: 4,
//     title: "Affordable Prices",
//     desc: "We believe quality education should be accessible to everyone. Our platform allows you to select a tutor that fits your budget, offering flexible pricing plans that cater to your financial needs. With competitive pricing, students can receive top-notch tutoring services without financial stress, ensuring academic success without breaking the bank.",
//     icon: <GiGymBag />,
//     bgColor: "#fe6baa",
//     delay: 0.9,
//   },
// ];


// // const WhyChooseData = [
// //   {
// //     id: 1,
// //     title: "One-on-one Teaching",
// //     desc: "All of our special education experts have a degree in special education.",
// //     icon: <GrYoga />,
// //     bgColor: "#0063ff",
// //     delay: 0.3,
// //   },
// //   {
// //     id: 2,
// //     title: "24/7 Tutor Availability",
// //     desc: "Our tutors are always available to respond as quick as possible for you",
// //     link: "/",
// //     icon: <FaDumbbell />,
// //     bgColor: "#73bc00",
// //     delay: 0.6,
// //   },
// //   {
// //     id: 3,
// //     title: "Interactive Whiteboard",
// //     desc: "Our digital whiteboard equipped with audio and video chat fetures.",
// //     link: "/",
// //     icon: <GiGymBag />,
// //     bgColor: "#fa6400",
// //     delay: 0.9,
// //   },
// //   {
// //     id: 4,
// //     title: "Affordable Prices",
// //     desc: "Choose an expert tutor based on your budget and per hour.",
// //     link: "/",
// //     icon: <GiGymBag />,
// //     bgColor: "#fe6baa",
// //     delay: 0.9,
// //   },
// // ];
// const WhyChooseUs = () => {
//   return (
//     <div className="bg-[#f9fafc] w-full flex justify-center py-12">
//       <div className="container py-5 w-11/12">
//         {/* header section */}
//         <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
//           <h1 className="uppercase font-bold text-5xl text-blue-600">
//             Why Choose Us
//           </h1>
//           <p className="font-semibold text-3xl">
//             Benefits of online tutoring services with us
//           </p>
//         </div>
//         {/* cards section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {WhyChooseData.map((item) => {
//             return (
//               <motion.div
//                 variants={SlideLeft(item.delay)}
//                 initial="hidden"
//                 whileInView={"visible"}
//                 className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
//               >
//                 {/* icon section */}
//                 <div
//                   style={{ backgroundColor: item.bgColor }}
//                   className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
//                 >
//                   <div className="text-2xl">{item.icon}</div>
//                 </div>
//                 <p className="font-semibold">{item.title}</p>
//                 <p className="text-sm text-gray-500">{item.desc}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;


// Version 2

// import React from "react";
// import { GrYoga } from "react-icons/gr";
// import { FaDumbbell } from "react-icons/fa6";
// import { GiGymBag } from "react-icons/gi";
// import { motion } from "framer-motion";
// import { SlideLeft } from "../utility/animation";
// export const WhyChooseData = [
//   {
//     id: 1,
//     title: "One-on-one Teaching",
//     desc: "Personalized one-on-one tutoring tailored to each student's needs, fostering individual growth and confidence in a supportive environment.",
//     icon: <GrYoga />,
//     bgColor: "#0063ff",
//     delay: 0.0,
//   },
//   {
//     id: 2,
//     title: "24/7 Tutor Availability",
//     desc: "Tutors available anytime, ensuring students get timely help whenever needed, even outside traditional class hours.",
//     icon: <FaDumbbell />,
//     bgColor: "#73bc00",
//     delay: 0.1,
//   },
//   {
//     id: 3,
//     title: "Interactive Whiteboard",
//     desc: "Real-time learning with an interactive whiteboard, enabling effective collaboration and engagement through visual explanations.",
//     icon: <GiGymBag />,
//     bgColor: "#fa6400",
//     delay: 0.2,
//   },
//   {
//     id: 4,
//     title: "Affordable Prices",
//     desc: "Affordable pricing with flexible plans, providing quality tutoring services without financial strain.",
//     icon: <GiGymBag />,
//     bgColor: "#fe6baa",
//     delay: 0.2,
//   },
// ];



// // const WhyChooseData = [
// //   {
// //     id: 1,
// //     title: "One-on-one Teaching",
// //     desc: "All of our special education experts have a degree in special education.",
// //     icon: <GrYoga />,
// //     bgColor: "#0063ff",
// //     delay: 0.3,
// //   },
// //   {
// //     id: 2,
// //     title: "24/7 Tutor Availability",
// //     desc: "Our tutors are always available to respond as quick as possible for you",
// //     link: "/",
// //     icon: <FaDumbbell />,
// //     bgColor: "#73bc00",
// //     delay: 0.6,
// //   },
// //   {
// //     id: 3,
// //     title: "Interactive Whiteboard",
// //     desc: "Our digital whiteboard equipped with audio and video chat fetures.",
// //     link: "/",
// //     icon: <GiGymBag />,
// //     bgColor: "#fa6400",
// //     delay: 0.9,
// //   },
// //   {
// //     id: 4,
// //     title: "Affordable Prices",
// //     desc: "Choose an expert tutor based on your budget and per hour.",
// //     link: "/",
// //     icon: <GiGymBag />,
// //     bgColor: "#fe6baa",
// //     delay: 0.9,
// //   },
// // ];
// const WhyChooseUs = () => {
//   return (
//     <div className="bg-[#f9fafc] w-full flex justify-center py-12">
//       <div className="container py-5 w-11/12">
//         {/* header section */}
//         <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
//           <h1 className="uppercase font-bold text-5xl text-blue-600">
//             Why Choose Us
//           </h1>
//           <p className="font-semibold text-3xl">
//             Benefits of online tutoring services with us
//           </p>
//         </div>

//       <div className=" w-full flex flex-col md:flex-row px-4 gap-8  shrink-0">
//            {/* cards section */}
//            <div className="w-full md:w-[50%] grid grid-rows-4 gap-6">
//           {WhyChooseData.map((item) => {
//             return (
//               <motion.div
//                 variants={SlideLeft(item.delay)}
//                 initial="hidden"
//                 whileInView={"visible"}
//                 className="space-y-4 p-6 rounded-xl flex flex-col md:flex-row justify-center gap-4 shadow-[0_0_22px_rgba(0,0,0,0.15)]"
//               >
//                 {/* icon section */}
//                 <div
//                   style={{ backgroundColor: item.bgColor }}
//                   className="w-full md:w-auto aspect-video md:h-full md:aspect-square rounded-lg flex justify-center items-center text-white"
//                 >
//                   <div className=" text-6xl md:text-4xl">{item.icon}</div>
//                 </div>
//                 <div> <p className="font-semibold">{item.title}</p>
//                 <p className="text-sm text-gray-500">{item.desc}</p></div>
//               </motion.div>
//             );
//           })}
//         </div>
//         <div className="w-full md:w-[50%] h-80 md:h-auto bg-red-400 my-2 rounded-2xl">

//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;


import React, { useRef } from "react";

import {  FaQuestion } from "react-icons/fa6";
import {  GiTeacher } from "react-icons/gi";
import { TbDeviceMobileCharging } from "react-icons/tb";
import { PiChalkboardSimple } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import { SlideLeft } from "../utility/animation";
import { ImBooks } from "react-icons/im";
import whychoose from "../assets/images/whychoose.png"

export const WhyChooseData = [
  {
    id: 1,
    title: "STUDY MATERIAL",
    desc: "Keeping in mind the competitive exams, Civil india provides unit wise study material. This free material is available for all our students. Previous Year Question is available  through booklet.",
    icon: <ImBooks />,
    bgColor: "#0063ff",
    delay: 0.1,
  },
  {
    id: 2,
    title: "BILINGUAL TEACHING",
    desc: "Keeping in mind the aspirants of UP BOARD/CBSE/ISC the medium of teaching at Civil India Institute is in both Hindi/English language equally.",
    icon: <GiTeacher />,
    bgColor: "#73bc00",
    delay: 0.3,
  },
  {
    id: 3,
    title: "MOBILE APP",
    desc: "Through Civil India's mobile app you can read Current Affairs anywhere in India.You can take speed test and get information about various vacancies. This app can be downloaded from Google play store.",
    icon: <TbDeviceMobileCharging />,
    bgColor: "#fa6400",
    delay: 0.5,
  },
  {
    id: 4,
    title: "DOUBT SESSION",
    desc: "To clear your doubts, apart from doubt clearing sessions in class, you can also meet teachers on personal level and get your doubts cleared.",
    icon: <FaQuestion />,
    bgColor: "#fe6baa",
    delay: 0.6,
  },
  {
    id: 4,
    title: "FULL AC & DIGITAL CLASSROOM",
    desc: "For better peaceful and healthy environment institute provides digitally sounded class rooms so that students can perform better in their studies.",
    icon: <PiChalkboardSimple />,
    bgColor: "rgb(0 213 204)",
    delay: 0.6,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc] w-full flex justify-center py-4 md:py-8 lg:py-12 ">
      <div className="container py-0 sm:py-6 w-11/12">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-bold text-3xl md:text-4xl lg:text-5xl text-blue-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-2xl sm:text-3xl">
            Benefits of online and offline services with us
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row px-4 gap-8 shrink-0 py-6">
          {/* cards section */}
          <div className="w-full lg:w-[50%] grid sm:grid-cols-2 lg:grid-cols-1  lg:grid-rows-5 gap-6">
            {WhyChooseData.map((item) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true });

              return (
                <motion.div
                  ref={ref}
                  variants={SlideLeft(item.delay)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="space-y-4 p-6 rounded-xl flex flex-col lg:flex-row justify-center gap-4 shadow-[0_0_22px_rgba(0,0,0,0.15)]"
                  key={item.id}
                >
                  {/* icon section */}
                  <div
                    style={{ backgroundColor: item.bgColor }}
                    className="w-full h-auto aspect-video md:w-auto lg:h-full md:aspect-square rounded-lg flex justify-center items-center text-white"
                  >
                    <div className="text-6xl md:text-5xl">{item.icon}</div>
                  </div>
                  <div>
                    <p className="font-bold tracking-wider">{item.title}</p>
                    <p className="text-md text-gray-700">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="w-full hidden lg:block overflow-hidden lg:w-[50%] lg:h-auto my-2 rounded-2xl">
          <img src={whychoose} className="w-full object-cover">

</img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
