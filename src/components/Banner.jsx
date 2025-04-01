// import React from "react";
// import { motion } from "framer-motion";
// import { SlideUp } from "../utility/animation";

// const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
//   return (
//     <div className="bg-[#f9f9f9] pb-14 w-full">
//       <div className="container w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
//           {/* banner Image section */}
//           <div
//             className={`flex justify-center items-center ${
//               reverse && "md:order-last md:justify-end"
//             }`}
//           >
//             <motion.img
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//               src={image}
//               alt=""
//               className="w-[500px] h-full object-cover"
//             />
//           </div>
//           {/* Banner text section */}
//           <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] md:ml-24">
//             <motion.p
//               variants={SlideUp(0.2)}
//               initial="hidden"
//               whileInView={"visible"}
//               className="text-xl text-blue-600 font-bold capitalize tracking-wider"
//             >
//               {tag}
//             </motion.p>
//             <motion.p
//               variants={SlideUp(0.2)}
//               initial="hidden"
//               whileInView={"visible"}
//               className="text-xl lg:text-2xl font-semibold capitalize "
//             >
//               {title}
//             </motion.p>
//             <motion.p
//               variants={SlideUp(0.2)}
//               initial="hidden"
//               whileInView={"visible"}
//               className="text-md text-zinc-700 font-semibold"
//             >
//               {subtitle}
//             </motion.p>
//             <motion.div
//               variants={SlideUp(0.2)}
//               initial="hidden"
//               whileInView={"visible"}
//               className="flex justify-center md:justify-start"
//             >
//               <button className=" bg-blue-600 px-6 py-2 rounded-md text-white font-semibold !mt-5">Get Started</button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { Link } from "react-router-dom";

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  const ref = useRef(null); // Create a reference to track the component
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  return (
    <div className="bg-[f9f9f9] py-5 lg:py-14 w-full" ref={ref}>
      <div className="container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* banner Image section */}
          <div
            className={`flex justify-center items-center ${
              reverse && "md:order-last "
            }`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}} // Trigger only once when in view
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              src={image}
              alt="Banner"
              className=" w-[300px] sm:w-[350px] lg:w-[400px] h-full object-cover rounded-2xl"
            />
          </div>
          {/* Banner text section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] md:ml-24">
            <motion.p
              variants={SlideUp(0.6)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Trigger only once when in view
              className="text-xl text-blue-600 font-bold capitalize tracking-wider"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={SlideUp(0.8)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Trigger only once when in view
              className="text-xl lg:text-2xl font-semibold capitalize "
            >
              {title}
            </motion.p>
            <motion.p
              variants={SlideUp(1.0)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Trigger only once when in view
              className="text-md text-zinc-700 font-semibold"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(1.2)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Trigger only once when in view
              className="flex justify-center md:justify-start"
            >
              <Link to={link}>
                {/* <button className=" bg-blue-600 px-6 py-2 rounded-md text-white font-semibold !mt-5 cursor-pointer">
                Get Started
              </button> */}
              <button className="bg-blue-600 px-8 py-3 rounded-md text-white font-semibold !mt-5 cursor-pointer">
  Get Started
</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
