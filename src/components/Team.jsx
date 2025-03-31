

import React, { useState } from 'react';
import teamData from "../data/teamData";

const Team = ({id}) => {
  const [activeSection, setActiveSection] = useState("Faculty");

  // Render team members based on the active section
  const renderSection = () => {
    const teamMembers = teamData[activeSection];
    return (
      <div  className=" w-[90%] grid grid-cols-1 gap-10 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
      {teamMembers.map((member) => (
        <div className="flex flex-col items-center w-full border-3 border-transparent hover:border-blue-600 hover:shadow-lg hover:scale-105 cursor-pointer shadow-gray-400 bg-blue-100 pb-4 rounded-lg transition ease-in-out duration-200" key={member.id}>
    
        <img
          className=" w-full rounded-lg aspect-square"
          src={member.image}
          alt={member.name}
        />
        <h1 className="mt-4 text-2xl font-semibold text-blue-900 capitalize">
        {member.name}
        </h1>
        <p className="mt-2 text-blue-500 capitalize">{member.role}</p>
        {/* <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-blue-600 transition-colors duration-300 hover:text-blue-500"
            aria-label="Reddit"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm3.878 11.908a.75.75 0 010 1.226c-.57.385-1.635.75-3.878.75s-3.309-.365-3.878-.75a.75.75 0 110-1.226c.57-.386 1.635-.751 3.878-.751s3.309.365 3.878.751zm-1.878-6.31a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2z" />
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-blue-600 transition-colors duration-300 hover:text-blue-500 "
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.993 3.657 9.126 8.438 9.88v-6.99h-2.54v-2.89h2.54V9.832c0-2.508 1.492-3.889 3.787-3.889 1.099 0 2.247.196 2.247.196v2.465h-1.266c-1.248 0-1.634.775-1.634 1.568v1.876h2.78l-.445 2.89h-2.335v6.991C18.344 21.125 22 16.993 22 12z" />
            </svg>
          </a>
        </div> */}
        </div>
        ))}
      </div>
    )};

  return (
    <section id={id} className=" bg-[#f9fafc] min-w-full">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl  text-center font-bold text-blue-600 capitalize lg:text-5xl ">
          Our Team
        </h1>
        <p className="max-w-4xl mx-auto my-6 text-center text-lg font-semibold tracking-wide ">
        Our dedicated faculty brings expertise and innovation to every lesson, ensuring students receive top-quality education with interactive learning and personalized guidance for academic success.
        </p>

        {/* <div className="flex items-center justify-center">
          <div className="flex items-center p-1 border border-blue-600 rounded-xl">
          <button
          className={`px-4 py-2 text-sm font-medium capitalize md:py-3 rounded-xl md:px-12 ${
            activeSection === "Faculty" ? "bg-blue-600 text-white " : " text-blue-800"
          }`}
          onClick={() => setActiveSection("Faculty")}
        >
          Faculty
        </button>
        <button
          className={`px-4 py-2 mx-4 text-sm font-medium capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12 ${
            activeSection === "ContentCreation" ? "bg-blue-600 text-white" : "text-blue-800"
          }`}
          onClick={() => setActiveSection("ContentCreation")}
        >
          ContentCreation
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12 ${
            activeSection === "Administrative" ? "bg-blue-600 text-white" : "text-blue-800"
          }`}
          onClick={() => setActiveSection("Administrative")}
        >
          Administrative
        </button>
          </div>
        </div> */}
        <div className='flex justify-center'>{renderSection()}</div>
      </div>
    </section>
  );
};

export default Team;
