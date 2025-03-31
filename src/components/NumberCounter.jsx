// Version 1

// import React from "react";
// import CountUp from "react-countup";

// const NumberCounter = () => {
//   return (
//     <div className="bg-[#0063ff] text-white py-12 h-auto w-full flex justify-center">
//       <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
//         <div className="flex flex-col items-center justify-center">
//           <p className="text-3xl font-semibold">
//             <CountUp
//               start={0}
//               end={898}
//               duration={3}
//               enableScrollSpy={true}
//               scrollSpyOnce={true}
//             />
//           </p>
//           <p>Expert tutors</p>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <p className="text-3xl font-semibold">
//             <CountUp
//               end={20000}
//               separator=","
//               suffix="+"
//               duration={3}
//               enableScrollSpy={true}
//               scrollSpyOnce={true}
//             />
//           </p>
//           <p>Hours content</p>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <p className="text-3xl font-semibold">
//             <CountUp
//               end={298}
//               duration={3}
//               enableScrollSpy={true}
//               scrollSpyOnce={true}
//             />
//           </p>
//           <p>Subject and courses</p>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <p className="text-3xl font-semibold">
//             <CountUp
//               end={72878}
//               separator=","
//               suffix="+"
//               duration={3}
//               enableScrollSpy={true}
//               scrollSpyOnce={true}
//             />
//           </p>
//           <p>Active students</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NumberCounter;


// Version 2
import React from "react";
import CountUp from "react-countup";
import counterimg from "../assets/images/counterimg.png"

const NumberCounter = () => {
  return (
    <div className="bg-[#543EE8] w-11/12 flex flex-col md:flex-row shrink-0 p-4 gap-4 rounded-md">
    <div className=" w-full  overflow-hidden md:aspect-auto  md:w-[50%] rounded-md md:rounded-l-md md:rounded-tr-md md:rounded-br-[7rem] ">
    <img src={counterimg} alt="counter banner" className="w-full object-cover">

    </img>
    </div>
      <div className="w-full md:w-[50%] grid grid-cols-2 gap-2 md:gap-8">
        <div className="flex flex-col items-center justify-center my-8">
          <p className="text-2xl md:text-3xl font-bold text-[#FFFFFF] ">
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className=" text-lg text-[#FFFFFF] opacity-80 mt-2">Expert tutors</p>
        </div>
        <div className="flex flex-col items-center justify-center  my-8">
          <p className="text-2xl md:text-3xl font-bold text-[#FFFFFF]">
            <CountUp
            start={5000}
              end={20000}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className=" text-lg text-[#FFFFFF] opacity-80 mt-2">Hours content</p>
        </div>
        <div className="flex flex-col items-center justify-center my-8">
          <p className=" text-2xl md:text-3xl font-bold text-[#FFFFFF]">
            <CountUp
            start={90}
              end={298}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className=" text-lg text-[#FFFFFF] opacity-80 mt-2">Courses Offered</p>
        </div>
        <div className="flex flex-col items-center justify-center my-8">
          <p className="text-2xl md:text-3xl font-bold text-[#FFFFFF]">
            <CountUp
            start={55000}
              end={72878}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className=" text-lg text-[#FFFFFF] opacity-80 mt-2">Active students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;

