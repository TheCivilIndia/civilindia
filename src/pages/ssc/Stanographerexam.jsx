// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, BookOpen, Clock, Users, Award, DollarSign, FileText, Target, CheckCircle } from 'lucide-react';

// const SSCStenographerPage = () => {
//   const [expandedSection, setExpandedSection] = useState('introduction');

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   const examStages = [
//     {
//       title: "Computer Based Test (CBT)",
//       details: [
//         "Mode: Online (Computer Based Test)",
//         "Questions: 200 multiple-choice questions",
//         "Sections: General Intelligence & Reasoning, General Awareness, and English Language & Comprehension",
//         "Time: 2 hours",
//         "Marks: 200 total marks",
//         "Marking Scheme: +1 for correct answers, -0.25 for incorrect answers"
//       ]
//     },
//     {
//       title: "Skill Test",
//       details: [
//         "Focuses on Stenography and transcription skills",
//         "Candidates must qualify CBT to be called for skill test",
//         "Commission fixes qualifying standards for different categories",
//         "Final selection based on performance in skill test"
//       ]
//     }
//   ];

//   const eligibilityData = [
//     {
//       category: "Educational Qualification",
//       requirement: "Class 12th or equivalent from a recognized board"
//     },
//     {
//       category: "Age Limit - Grade C",
//       requirement: "18-30 years"
//     },
//     {
//       category: "Age Limit - Grade D",
//       requirement: "18-27 years"
//     },
//     {
//       category: "Age Relaxation",
//       requirement: "Provided for reserved categories as per government norms"
//     }
//   ];

//   const salaryData = [
//     {
//       grade: "Grade C",
//       salary: "₹51,000",
//       description: "In-hand salary per month (approximately)"
//     },
//     {
//       grade: "Grade D",
//       salary: "₹36,000",
//       description: "In-hand salary per month (approximately)"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC Stenographer Exam</h1>
//           <p className="text-xl md:text-2xl opacity-90">Gateway to Government Stenography Careers</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         {/* Introduction Section */}
//         <div className="mb-8">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('introduction')}
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <BookOpen className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
//               </div>
//               {expandedSection === 'introduction' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'introduction' && (
//               <div className="mt-6 text-gray-600 leading-relaxed">
//                 <p>
//                   The SSC Stenographer exam is a recruitment exam conducted by the Staff Selection Commission (SSC) for the positions of Stenographer Grade C and Grade D. 
//                   It involves a two-stage process: a Computer Based Test (CBT) and a Skill Test (Stenography and transcription). This national-level exam is recognized 
//                   for its competitive nature and offers rewarding career opportunities in various government departments.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Exam Overview Section */}
//         <div className="mb-8">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('overview')}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <Target className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Exam Overview</h2>
//               </div>
//               {expandedSection === 'overview' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'overview' && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {examStages.map((stage, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6">
//                       <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
//                         <CheckCircle className="w-5 h-5 mr-2" />
//                         {stage.title}
//                       </h3>
//                       <ul className="space-y-2">
//                         {stage.details.map((detail, detailIndex) => (
//                           <li key={detailIndex} className="text-gray-600 flex items-start">
//                             <span className="text-blue-600 mr-2">•</span>
//                             {detail}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Eligibility Section */}
//         <div className="mb-8">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('eligibility')}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <Users className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h2>
//               </div>
//               {expandedSection === 'eligibility' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'eligibility' && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {eligibilityData.map((item, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4">
//                       <h3 className="font-semibold text-blue-900 mb-2">{item.category}</h3>
//                       <p className="text-gray-600">{item.requirement}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Salary Section */}
//         <div className="mb-8">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('salary')}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <DollarSign className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Salary Structure</h2>
//               </div>
//               {expandedSection === 'salary' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'salary' && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {salaryData.map((item, index) => (
//                     <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
//                       <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.grade}</h3>
//                       <div className="text-3xl font-bold text-green-600 mb-2">{item.salary}</div>
//                       <p className="text-gray-600 text-sm">{item.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Syllabus Section */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="bg-blue-900 text-white p-2 rounded-lg">
//                 <FileText className="w-6 h-6" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
//             </div>
            
//             <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
//               <p className="text-yellow-800">
//                 <strong>Important:</strong> For complete and updated syllabus details, please refer to the official SSC document.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <a 
//                 href="https://ssc.nic.in/Downloads/portal/english/Syllabus%20-%20Stenographers.pdf" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
//               >
//                 <FileText className="w-5 h-5 mr-2" />
//                 Download Official Syllabus PDF
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Key Highlights */}
//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <Clock className="w-8 h-8" />
//               </div>
//               <h3 className="font-semibold mb-2">Two-Stage Process</h3>
//               <p className="text-sm opacity-90">CBT followed by Skill Test</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <Award className="w-8 h-8" />
//               </div>
//               <h3 className="font-semibold mb-2">Government Career</h3>
//               <p className="text-sm opacity-90">Prestigious positions in various departments</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <DollarSign className="w-8 h-8" />
//               </div>
//               <h3 className="font-semibold mb-2">Attractive Salary</h3>
//               <p className="text-sm opacity-90">Up to ₹51,000 per month</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SSCStenographerPage;


import React, { useState } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaBook,
  FaClock,
  FaUsers,
  FaAward,
  FaRupeeSign,
  FaFileAlt,
  FaBullseye,
  FaCheckCircle
} from 'react-icons/fa';
import Footer from '../../components/Footer';

const SSCStenographerPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const examStages = [
    {
      title: "Computer Based Test (CBT)",
      details: [
        "Mode: Online (Computer Based Test)",
        "Questions: 200 multiple-choice questions",
        "Sections: General Intelligence & Reasoning, General Awareness, and English Language & Comprehension",
        "Time: 2 hours",
        "Marks: 200 total marks",
        "Marking Scheme: +1 for correct answers, -0.25 for incorrect answers"
      ]
    },
    {
      title: "Skill Test",
      details: [
        "Focuses on Stenography and transcription skills",
        "Candidates must qualify CBT to be called for skill test",
        "Commission fixes qualifying standards for different categories",
        "Final selection based on performance in skill test"
      ]
    }
  ];

  const eligibilityData = [
    { category: "Educational Qualification", requirement: "Class 12th or equivalent from a recognized board" },
    { category: "Age Limit - Grade C", requirement: "18-30 years" },
    { category: "Age Limit - Grade D", requirement: "18-27 years" },
    { category: "Age Relaxation", requirement: "Provided for reserved categories as per government norms" }
  ];

  const salaryData = [
    { grade: "Grade C", salary: "₹51,000", description: "In-hand salary per month (approximately)" },
    { grade: "Grade D", salary: "₹36,000", description: "In-hand salary per month (approximately)" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC Stenographer Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to Government Stenography Careers</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Exam Introduction */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('introduction')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaBook className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
              </div>
              {expandedSections.includes('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('introduction') && (
              <div className="mt-6 text-gray-600 leading-relaxed">
                <p>
                  The SSC Stenographer exam is a recruitment exam conducted by the Staff Selection Commission (SSC) for the positions of Stenographer Grade C and Grade D.
                  It involves a two-stage process: a Computer Based Test (CBT) and a Skill Test (Stenography and transcription). This national-level exam is recognized
                  for its competitive nature and offers rewarding career opportunities in various government departments.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Exam Overview */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('overview')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaBullseye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Overview</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {examStages.map((stage, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <FaCheckCircle className="w-5 h-5 mr-2" />
                        {stage.title}
                      </h3>
                      <ul className="space-y-2">
                        {stage.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('eligibility')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaUsers className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h2>
              </div>
              {expandedSections.includes('eligibility') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('eligibility') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eligibilityData.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">{item.category}</h3>
                      <p className="text-gray-600">{item.requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Salary */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('salary')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaRupeeSign className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Salary Structure</h2>
              </div>
              {expandedSections.includes('salary') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('salary') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {salaryData.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.grade}</h3>
                      <div className="text-3xl font-bold text-green-600 mb-2">{item.salary}</div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Syllabus Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-900 text-white p-2 rounded-lg">
                <FaFileAlt className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Important:</strong> For complete and updated syllabus details, please refer to the official SSC document.
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://ssc.nic.in/Downloads/portal/english/Syllabus%20-%20Stenographers.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                <FaFileAlt className="w-5 h-5 mr-2" />
                Download Official Syllabus PDF
              </a>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Two-Stage Process</h3>
              <p className="text-sm opacity-90">CBT followed by Skill Test</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Government Career</h3>
              <p className="text-sm opacity-90">Prestigious positions in various departments</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRupeeSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Attractive Salary</h3>
              <p className="text-sm opacity-90">Up to ₹51,000 per month</p>
            </div>
          </div>
        </div>
      </div>
     <Footer/> 
    </div>
  );
};

export default SSCStenographerPage;




// import React, { useState } from 'react';
// import {
//   FiChevronDown,
//   FiChevronUp,
//   FiBookOpen,
//   FiClock,
//   FiUsers,
//   FiAward,
//   FiDollarSign,
//   FiFileText,
//   FiTarget,
//   FiCheckCircle
// } from 'react-icons/fi';

// const SSCStenographerPage = () => {
//   const [expandedSection, setExpandedSection] = useState('introduction');

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   const examStages = [
//     {
//       title: "Computer Based Test (CBT)",
//       details: [
//         "Mode: Online (Computer Based Test)",
//         "Questions: 200 multiple-choice questions",
//         "Sections: General Intelligence & Reasoning, General Awareness, and English Language & Comprehension",
//         "Time: 2 hours",
//         "Marks: 200 total marks",
//         "Marking Scheme: +1 for correct answers, -0.25 for incorrect answers"
//       ]
//     },
//     {
//       title: "Skill Test",
//       details: [
//         "Focuses on Stenography and transcription skills",
//         "Candidates must qualify CBT to be called for skill test",
//         "Commission fixes qualifying standards for different categories",
//         "Final selection based on performance in skill test"
//       ]
//     }
//   ];

//   const eligibilityData = [
//     {
//       category: "Educational Qualification",
//       requirement: "Class 12th or equivalent from a recognized board"
//     },
//     {
//       category: "Age Limit - Grade C",
//       requirement: "18-30 years"
//     },
//     {
//       category: "Age Limit - Grade D",
//       requirement: "18-27 years"
//     },
//     {
//       category: "Age Relaxation",
//       requirement: "Provided for reserved categories as per government norms"
//     }
//   ];

//   const salaryData = [
//     {
//       grade: "Grade C",
//       salary: "₹51,000",
//       description: "In-hand salary per month (approximately)"
//     },
//     {
//       grade: "Grade D",
//       salary: "₹36,000",
//       description: "In-hand salary per month (approximately)"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC Stenographer Exam</h1>
//           <p className="text-xl md:text-2xl opacity-90">Gateway to Government Stenography Careers</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         {/* Introduction */}
//         <div className="mb-8">
//           <div
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('introduction')}
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FiBookOpen className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
//               </div>
//               {expandedSection === 'introduction' ? <FiChevronUp className="w-6 h-6" /> : <FiChevronDown className="w-6 h-6" />}
//             </div>

//             {expandedSection === 'introduction' && (
//               <div className="mt-6 text-gray-600 leading-relaxed">
//                 <p>
//                   The SSC Stenographer exam is a recruitment exam conducted by the Staff Selection Commission (SSC) for the positions of Stenographer Grade C and Grade D. 
//                   It involves a two-stage process: a Computer Based Test (CBT) and a Skill Test (Stenography and transcription). This national-level exam is recognized 
//                   for its competitive nature and offers rewarding career opportunities in various government departments.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Exam Overview */}
//         <div className="mb-8">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('overview')}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FiTarget className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Exam Overview</h2>
//               </div>
//               {expandedSection === 'overview' ? <FiChevronUp className="w-6 h-6" /> : <FiChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'overview' && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {examStages.map((stage, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6">
//                       <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
//                         <FiCheckCircle className="w-5 h-5 mr-2" />
//                         {stage.title}
//                       </h3>
//                       <ul className="space-y-2">
//                         {stage.details.map((detail, detailIndex) => (
//                           <li key={detailIndex} className="text-gray-600 flex items-start">
//                             <span className="text-blue-600 mr-2">•</span>
//                             {detail}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Eligibility */}
//         <div className="mb-8">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('eligibility')}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FiUsers className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h2>
//               </div>
//               {expandedSection === 'eligibility' ? <FiChevronUp className="w-6 h-6" /> : <FiChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'eligibility' && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {eligibilityData.map((item, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4">
//                       <h3 className="font-semibold text-blue-900 mb-2">{item.category}</h3>
//                       <p className="text-gray-600">{item.requirement}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Salary */}
//         <div className="mb-8">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('salary')}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FiDollarSign className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Salary Structure</h2>
//               </div>
//               {expandedSection === 'salary' ? <FiChevronUp className="w-6 h-6" /> : <FiChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'salary' && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {salaryData.map((item, index) => (
//                     <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
//                       <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.grade}</h3>
//                       <div className="text-3xl font-bold text-green-600 mb-2">{item.salary}</div>
//                       <p className="text-gray-600 text-sm">{item.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Syllabus */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="bg-blue-900 text-white p-2 rounded-lg">
//                 <FiFileText className="w-6 h-6" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
//             </div>
            
//             <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
//               <p className="text-yellow-800">
//                 <strong>Important:</strong> For complete and updated syllabus details, please refer to the official SSC document.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <a 
//                 href="https://ssc.nic.in/Downloads/portal/english/Syllabus%20-%20Stenographers.pdf" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
//               >
//                 <FiFileText className="w-5 h-5 mr-2" />
//                 Download Official Syllabus PDF
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Key Highlights */}
//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FiClock className="w-8 h-8" />
//               </div>
//               <h3 className="font-semibold mb-2">Two-Stage Process</h3>
//               <p className="text-sm opacity-90">CBT followed by Skill Test</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FiAward className="w-8 h-8" />
//               </div>
//               <h3 className="font-semibold mb-2">Government Career</h3>
//               <p className="text-sm opacity-90">Prestigious positions in various departments</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FiDollarSign className="w-8 h-8" />
//               </div>
//               <h3 className="font-semibold mb-2">Attractive Salary</h3>
//               <p className="text-sm opacity-90">Up to ₹51,000 per month</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SSCStenographerPage;
