// import { useState } from 'react';
// import { FaChevronDown, FaChevronUp, FaBookOpen, FaAward,  FaClock  } from 'react-icons/fa';
// import { FiFileText } from "react-icons/fi";
// import { SlCalender } from "react-icons/sl";

// const SSCJEExamPage = () => {
//   const [openSection, setOpenSection] = useState('overview');

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Banner */}
//       <header className="bg-[#0f256e] text-white py-16">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">SSC JE EXAM</h1>
//           <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
//             Junior Engineer Recruitment by Staff Selection Commission
//           </p>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         {/* Introduction */}
//         <section className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <p className="text-gray-700 leading-relaxed">
//             The Staff Selection Commission (SSC) conducts the SSC JE exam to recruit Junior Engineers (JEs) in various engineering disciplines, 
//             including Civil, Electrical, and Mechanical, for the Indian government. It's a national-level exam with a two-stage selection process 
//             involving a written exam (Paper 1 & 2) and document verification. The SSC JE exam is considered a challenging yet rewarding opportunity 
//             for engineering graduates seeking government jobs.
//           </p>
//         </section>

//         {/* Accordion Sections */}
//         <div className="space-y-4">
//           {/* Exam Overview */}
//           <section className="bg-white rounded-lg shadow-md overflow-hidden">
//             <button 
//               className="w-full flex items-center justify-between p-6 text-left bg-[#0f256e] text-white"
//               onClick={() => toggleSection('overview')}
//             >
//               <span className="text-xl font-semibold flex items-center">
//                 <FaBookOpen className="mr-2" /> Exam Overview
//               </span>
//               {openSection === 'overview' ? <FaChevronUp /> : <FaChevronDown />}
//             </button>
            
//             {openSection === 'overview' && (
//               <div className="p-6">
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">Conducting Body:</strong> Staff Selection Commission (SSC)
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">Purpose:</strong> Recruitment of Junior Engineers (JEs) in various engineering disciplines under the Indian government
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">Eligibility:</strong> Candidates must possess a Bachelor's degree or diploma in relevant engineering fields (Civil, Electrical, Mechanical, etc.)
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">Exam Structure:</strong> Two papers: Paper 1 (Objective) and Paper 2 (Descriptive, for shortlisted candidates)
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">Pay Scale:</strong> Level 6 of the 7th Central Pay Commission (INR 35,400-1,12,400)
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">Grade Pay:</strong> INR 4200
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </section>

//           {/* Age Limit */}
//           <section className="bg-white rounded-lg shadow-md overflow-hidden">
//             <button 
//               className="w-full flex items-center justify-between p-6 text-left bg-[#0f256e] text-white"
//               onClick={() => toggleSection('ageLimit')}
//             >
//               <span className="text-xl font-semibold flex items-center">
//                 <SlCalender className="mr-2" /> Age Limit Details
//               </span>
//               {openSection === 'ageLimit' ? <FaChevronUp /> : <FaChevronDown/>}
//             </button>
            
//             {openSection === 'ageLimit' && (
//               <div className="p-6">
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">General Age Limit:</strong> For most SSC JE posts, the age limit is between 30 and 32 years.
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">CPWD:</strong> CPWD posts (Civil and Electrical) usually have a maximum age of 32 years.
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">Other Departments:</strong> Other departments, like Border Roads Organization (BRO) or Military Engineer Services (MES), may have a maximum age of 30 years for certain JE posts.
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>
//                       <strong className="font-medium">Age Relaxation:</strong> Age relaxation is provided to SC/ST, OBC, and other reserved categories, as per government norms.
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </section>

//           {/* Marking Scheme */}
//           <section className="bg-white rounded-lg shadow-md overflow-hidden">
//             <button 
//               className="w-full flex items-center justify-between p-6 text-left bg-[#0f256e] text-white"
//               onClick={() => toggleSection('marking')}
//             >
//               <span className="text-xl font-semibold flex items-center">
//                 <FaAward className="mr-2" /> Marking Scheme
//               </span>
//               {openSection === 'marking' ? <FaChevronUp /> : <FaChevronDown />}
//             </button>
            
//             {openSection === 'marking' && (
//               <div className="p-6">
//                 <div className="mb-4">
//                   <strong className="text-lg font-medium">Negative Marking:</strong>
//                 </div>
//                 <ul className="space-y-2">
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>0.25 marks deducted for each incorrect answer in Paper 1</div>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-[#0f256e] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 mt-1 mr-3">•</span>
//                     <div>1 mark deducted for each incorrect answer in Paper 2</div>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </section>

//           {/* Syllabus */}
//           <section className="bg-white rounded-lg shadow-md overflow-hidden">
//             <button 
//               className="w-full flex items-center justify-between p-6 text-left bg-[#0f256e] text-white"
//               onClick={() => toggleSection('syllabus')}
//             >
//               <span className="text-xl font-semibold flex items-center">
//                 <FiFileText className="mr-2" /> Syllabus
//               </span>
//               {openSection === 'syllabus' ? <FaChevronUp /> : <FaChevronDown />}
//             </button>
            
//             {openSection === 'syllabus' && (
//               <div className="p-6">
//                 <p className="mb-4">The SSC JE exam syllabus is comprehensive and covers various technical aspects based on the selected engineering discipline.</p>
//                 <a 
//                   href="https://ssc.nic.in/Downloads/portal/english/Syllabus-JE%20Eamination.pdf" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-4 py-2 bg-[#0f256e] text-white rounded hover:bg-blue-800 transition-colors"
//                 >
//                   <FiFileText className="mr-2" /> Download Complete Syllabus
//                 </a>
//               </div>
//             )}
//           </section>
//         </div>
//       </main>

//       {/* Call to Action */}
//       <section className="bg-[#0f256e] text-white py-12 mt-8">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold mb-4">Ready to Start Your SSC JE Preparation?</h2>
//           <p className="mb-6 max-w-2xl mx-auto">Join our comprehensive coaching program designed specifically for SSC JE aspirants. Get access to study materials, mock tests, and expert guidance.</p>
//           <button className="bg-white text-[#0f256e] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
//             Enroll Now
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto px-4 text-center">
//           <p>© {new Date().getFullYear()} Educational Website. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SSCJEExamPage;

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBookOpen, FaAward, FaClock } from 'react-icons/fa';
import { FiFileText } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import Footer from '../components/Footer';

const SSCJEExamPage = () => {
  const [openSection, setOpenSection] = useState('overview');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Hero Banner */}
      <header className="bg-[#0f256e] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            SSC Junior Engineer Exam
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Gateway to Government Engineering Careers
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-[#0f256e]">
          <div className="flex items-center mb-4">
            <span className="bg-[#0f256e] p-2 rounded-lg mr-3">
              <FaBookOpen className="text-white text-xl" />
            </span>
            <h2 className="text-xl font-semibold text-gray-800">Exam Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Staff Selection Commission (SSC) conducts the SSC JE exam to recruit Junior Engineers 
            in Civil, Electrical, and Mechanical disciplines. This national-level exam features a 
            two-stage selection process with objective and descriptive papers, followed by document 
            verification. Recognized for its competitive nature, it offers rewarding career opportunities 
            in various government departments.
          </p>
        </section>

        {/* Accordion Sections */}
        <div className="space-y-6">
          {[
            {
              id: 'overview',
              icon: <FaBookOpen />,
              title: 'Exam Overview',
              content: (
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ['Conducting Body:', 'Staff Selection Commission (SSC)'],
                    ['Purpose:', 'Recruitment of Junior Engineers in government sectors'],
                    ['Eligibility:', 'Diploma/Degree in relevant engineering field'],
                    ['Exam Structure:', 'Paper 1 (Objective) & Paper 2 (Descriptive)'],
                    ['Pay Scale:', 'Level 6 (₹35,400 - ₹1,12,400)'],
                    ['Grade Pay:', '₹4200']
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <span className="bg-[#0f256e] text-white text-sm px-2 py-1 rounded mr-3">➤</span>
                      <div>
                        <strong className="font-medium text-gray-800">{label}</strong>
                        <p className="text-gray-700">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            },
            {
              id: 'ageLimit',
              icon: <SlCalender />,
              title: 'Age Limit Details',
              content: (
                <div className="grid gap-4">
                  {[
                    ['General Age Limit:', '30-32 years (varies by department)'],
                    ['CPWD:', 'Maximum 32 years for Civil/Electrical'],
                    ['Other Departments:', 'BRO/MES: Maximum 30 years'],
                    ['Age Relaxation:', 'As per government norms for reserved categories']
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <span className="bg-[#0f256e] text-white text-sm px-2 py-1 rounded mr-3">➤</span>
                      <div>
                        <strong className="font-medium text-gray-800">{label}</strong>
                        <p className="text-gray-700">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            },
            {
              id: 'marking',
              icon: <FaAward />,
              title: 'Marking Scheme',
              content: (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Negative Marking</h3>
                    <div className="space-y-3">
                      {[
                        'Paper 1: 0.25 marks deduction per wrong answer',
                        'Paper 2: 1 mark deduction per wrong answer'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-[#0f256e] rounded-full mr-3"></span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: 'syllabus',
              icon: <FiFileText />,
              title: 'Syllabus',
              content: (
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive syllabus covering technical subjects in Civil, Electrical, 
                    and Mechanical engineering. Includes general awareness and reasoning sections.
                  </p>
                  <a
                    href="https://ssc.nic.in/Downloads/portal/english/Syllabus-JE%20Eamination.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#0f256e] text-white rounded-lg hover:bg-blue-900 transition-all duration-300"
                  >
                    <FiFileText className="mr-2" />
                    Download Detailed Syllabus
                  </a>
                </div>
              )
            }
          ].map((section) => (
            <section key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                className={`w-full flex items-center justify-between p-6 text-left hover:bg-blue-50 transition-colors ${
                  openSection === section.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center">
                  <span className="bg-[#0f256e] text-white p-3 rounded-lg mr-4">
                    {section.icon}
                  </span>
                  <span className="text-xl font-semibold text-gray-800">{section.title}</span>
                </div>
                {openSection === section.id ? (
                  <FaChevronUp className="text-[#0f256e]" />
                ) : (
                  <FaChevronDown className="text-[#0f256e]" />
                )}
              </button>

              {openSection === section.id && (
                <div className="p-6 border-t border-gray-100">{section.content}</div>
              )}
            </section>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r  from-[#0f256e] to-[#1a3a8a] text-white py-16 my-12 w-10/12 mx-auto rounded-3xl">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Start Your SSC JE Preparation Today
            </h2>
            <p className="mb-8 text-lg text-gray-200">
              Access expert-led courses, comprehensive study material, and mock tests designed 
              for SSC JE exam pattern.
            </p>
            <button className="bg-white text-[#0f256e] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default SSCJEExamPage;