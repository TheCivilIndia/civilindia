

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

          {/* Educational Qualifications */}
          <div className="px-4 mt-2 text-center">
              <p className="text-sm font-bold text-gray-700">
                Educational Qualifications
              </p>
              <p className="text-sm text-gray-600">
                {member.educationalQualification.replace(/, /g, ' | ')}
              </p>
            </div>

            {/* Teaching Experience */}
            <div className="px-4 mt-2 text-center">
              <p className="text-sm font-bold  text-gray-700">
                Teaching Experience
              </p>
              <p className="text-sm text-gray-600">
                {member?.teachingExperience || 'No formal teaching experience'}
              </p>
            </div>
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

    
        <div className='flex justify-center'>{renderSection()}</div>
      </div>
    </section>
  );
};

export default Team;
