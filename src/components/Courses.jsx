// import React from 'react'
// import Coursecards from './cards/Coursecards';

// const Courses = () => {
//   return (
//     <div className='w-full flex flex-col items-center justify-center py-12 bg-[#0f256e]'>
//     <h1 className="heading text-center text-5xl text-white font-bold tracking-wide py-6">Our Courses</h1>
//       <p className='max-w-4xl text-xl font-semibold text-center text-white tracking-wide mb-7'>At CivilIndia, we offer expertly designed courses for IAS and PCS aspirants. Our structured programs include Foundation Courses, Prelims & Mains Coaching, Optional Subjects, and Interview Guidance to ensure comprehensive preparation.</p>

//     <div className="flex flex-row flex-wrap gap-7 w-4/5 items-center justify-center ">
//         <Coursecards/>
//         <Coursecards/>
//         <Coursecards/>
//         <Coursecards/>
//         <Coursecards/>
//         <Coursecards/>
//       </div>
//     </div>
    
//   )
// }

// export default Courses;

import React, { useState } from "react";
import Coursecards from "./cards/Coursecards";
import { courses } from "../data/courseData";

const categories = ["All Subjects", "Teaching Exams", "SSC & Other Exams", "Railway Exams"];

const Courses = ({id}) => {
  const [selectedCategory, setSelectedCategory] = useState("All Subjects");

  const filteredCourses =
    selectedCategory === "All Subjects"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div id={id} className="w-full flex flex-col items-center justify-center py-4 md:py-8 lg:py-12 bg-[#0f256e]">
      <h1 className="heading text-center text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide py-6">
        Our Courses
      </h1>
      <p className="max-w-4xl w-11/12 text-md sm:text-lg md:text-xl font-semibold text-center text-white tracking-wide mb-7 ">
      An exciting opportunity for students in India! The CIVIL INDIA Mobile App seems to be a valuable resource for those looking to advance their education and career prospects.<br/> <b className="text-xl pt-5 block">Key Features and Benefits</b>
<br/>1.	Rated as India's leading Educational App on the Google Play Store
<br/>2.	Regularly updated features to enhance user experience
<br/>3.	Committed to providing high-quality educational content
<br/>4.	Trusted by numerous students across India
<br/>
Getting Started,
Take the first step towards a brighter future with the CIVIL INDIA Mobile App!
      </p>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              selectedCategory === category ? "bg-blue-700 text-white" : "bg-white text-blue-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="flex flex-row flex-wrap gap-7 w-4/5 items-center justify-center">
        {filteredCourses.map((course) => (
          <Coursecards key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
