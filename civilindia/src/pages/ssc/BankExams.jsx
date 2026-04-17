// import React, { useState } from 'react';
// import { 
//   FaChevronDown, 
//   FaChevronUp, 
//   FaUniversity, 
//   FaUsers, 
//   FaBook, 
//   FaRupeeSign, 
//   FaGraduationCap, 
//   FaCheckCircle,
//   FaLanguage,
//   FaFlag,
//   FaBullseye,
//   FaCalculator,
//   FaLightbulb,
//   FaGlobe
// } from 'react-icons/fa';

// const BankExamPage = () => {
//   const [expandedSection, setExpandedSection] = useState('introduction');

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   const eligibilityData = [
//     {
//       category: "Educational Qualifications",
//       requirement: "Bachelor's degree (graduation) in any discipline from a recognized university",
//       icon: <FaGraduationCap className="w-5 h-5" />
//     },
//     {
//       category: "Age Limit for Clerk",
//       requirement: "20-28 years",
//       icon: <FaUsers className="w-5 h-5" />
//     },
//     {
//       category: "Age Limit for PO",
//       requirement: "20-30 years",
//       icon: <FaUsers className="w-5 h-5" />
//     },
//     {
//       category: "Language Proficiency",
//       requirement: "Knowledge of the regional language of the state/UT where you are applying for",
//       icon: <FaLanguage className="w-5 h-5" />
//     },
//     {
//       category: "Nationality",
//       requirement: "Indian",
//       icon: <FaFlag className="w-5 h-5" />
//     }
//   ];

//   const ageRelaxationData = [
//     { category: "General", relaxation: "No Relaxation" },
//     { category: "OBC", relaxation: "3 Years" },
//     { category: "SC/ST", relaxation: "5 Years" },
//     { category: "PWD", relaxation: "10 Years" },
//     { category: "Ex-Serviceman", relaxation: "5 Years" }
//   ];

//   const syllabusData = [
//     {
//       subject: "English",
//       icon: <FaBook className="w-6 h-6" />,
//       topics: [
//         "Reading Comprehension",
//         "Cloze Test",
//         "Double Fillers",
//         "Error Spotting",
//         "Sentence Correction",
//         "Para Jumbles",
//         "Paragraph Completion",
//         "Para Summary",
//         "Sentence Connector",
//         "Vocabulary"
//       ]
//     },
//     {
//       subject: "Reasoning",
//       icon: <FaLightbulb className="w-6 h-6" />,
//       topics: [
//         "Seating Arrangements",
//         "Tabulation",
//         "Logical Reasoning",
//         "Syllogism",
//         "Input-Output",
//         "Coding-Decoding",
//         "Alphanumeric Series",
//         "Blood Relations",
//         "Ranking",
//         "Data Sufficiency",
//         "Distance & Direction",
//         "Coded Inequalities",
//         "Verbal Reasoning"
//       ]
//     },
//     {
//       subject: "Mathematics",
//       icon: <FaCalculator className="w-6 h-6" />,
//       topics: [
//         "Simplification & Approximation",
//         "Data Interpretation",
//         "Data Sufficiency",
//         "Number Series",
//         "Ratio & Proportion",
//         "Quadratic Equations",
//         "Averages, Boats & Streams",
//         "Simple Interest & Compound Interest",
//         "Percentage",
//         "Profit & Loss",
//         "Mixtures & Alligation",
//         "Permutation & Combination",
//         "Time & Distance",
//         "Probability",
//         "Partnership",
//         "Pipes & Cistern"
//       ]
//     },
//     {
//       subject: "General Awareness",
//       icon: <FaGlobe className="w-6 h-6" />,
//       topics: [
//         "Static GK",
//         "Current events across the world",
//         "International and National organisations and their headquarters"
//       ]
//     },
//     {
//       subject: "Financial Awareness",
//       icon: <FaRupeeSign className="w-6 h-6" />,
//       topics: [
//         "Financial knowledge",
//         "Economic terms",
//         "Financial institutions",
//         "Financial news",
//         "Economic growth and development"
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 mt-16">
//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Bank Exam</h1>
//           <p className="text-xl md:text-2xl opacity-90">Gateway to Banking Career Opportunities</p>
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
//                   <FaUniversity className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
//               </div>
//               {expandedSection === 'introduction' ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'introduction' && (
//               <div className="mt-6 text-gray-600 leading-relaxed">
//                 <p>
//                   Bank exams are highly competitive examinations conducted by various banking institutions and organizations 
//                   like IBPS, SBI, RBI, and other nationalized banks. These exams are designed to recruit candidates for 
//                   various positions including Clerk, Probationary Officer (PO), Specialist Officer, and other banking roles. 
//                   The exams test candidates' knowledge in English, Reasoning, Mathematics, General Awareness, and Financial Awareness.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Eligibility Criteria Section */}
//         <div className="mb-8">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('eligibility')}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaUsers className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h2>
//               </div>
//               {expandedSection === 'eligibility' ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'eligibility' && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                   {eligibilityData.map((item, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4">
//                       <div className="flex items-center mb-2">
//                         <div className="text-blue-900 mr-2">{item.icon}</div>
//                         <h3 className="font-semibold text-blue-900">{item.category}</h3>
//                       </div>
//                       <p className="text-gray-600">{item.requirement}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Age Relaxation Table */}
//                 <div className="bg-blue-50 rounded-lg p-4">
//                   <h3 className="text-lg font-bold text-blue-900 mb-4">Age Relaxation</h3>
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="bg-blue-900 text-white">
//                           <th className="px-4 py-2 text-left">Category</th>
//                           <th className="px-4 py-2 text-left">Age Relaxation</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {ageRelaxationData.map((item, index) => (
//                           <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
//                             <td className="px-4 py-2 font-medium">{item.category}</td>
//                             <td className="px-4 py-2">{item.relaxation}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Syllabus Section */}
//         <div className="mb-8 ">
//           <div 
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => toggleSection('syllabus')}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaBullseye className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
//               </div>
//               {expandedSection === 'syllabus' ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
            
//             {expandedSection === 'syllabus' && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {syllabusData.map((subject, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6">
//                       <div className="flex items-center mb-4">
//                         <div className="text-blue-900 mr-3">{subject.icon}</div>
//                         <h3 className="text-xl font-bold text-blue-900">{subject.subject}</h3>
//                       </div>
//                       <div className="space-y-2">
//                         {subject.topics.map((topic, topicIndex) => (
//                           <div key={topicIndex} className="flex items-start">
//                             <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
//                             <span className="text-gray-600 text-sm">{topic}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Key Highlights */}
//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaUniversity className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Banking Career</h3>
//               <p className="text-sm opacity-90">Prestigious positions in banking sector</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaGraduationCap className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Graduate Level</h3>
//               <p className="text-sm opacity-90">Bachelor's degree required</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaUsers className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Multiple Positions</h3>
//               <p className="text-sm opacity-90">Clerk, PO, and Specialist Officer roles</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankExamPage;

// import React, { useState } from 'react';
// import {
//   FaChevronDown,
//   FaChevronUp,
//   FaUniversity,
//   FaUsers,
//   FaBook,
//   FaRupeeSign,
//   FaGraduationCap,
//   FaCheckCircle,
//   FaLanguage,
//   FaFlag,
//   FaBullseye,
//   FaCalculator,
//   FaLightbulb,
//   FaGlobe
// } from 'react-icons/fa';

// const BankExamPage = () => {
//   const [expandedSections, setExpandedSections] = useState(['introduction', 'eligibility']);

//   const toggleSection = (section) => {
//     setExpandedSections((prev) =>
//       prev.includes(section)
//         ? prev.filter((s) => s !== section)
//         : [...prev, section]
//     );
//   };

//   const eligibilityData = [
//     {
//       category: "Educational Qualifications",
//       requirement: "Bachelor's degree (graduation) in any discipline from a recognized university",
//       icon: <FaGraduationCap className="w-5 h-5" />
//     },
//     {
//       category: "Age Limit for Clerk",
//       requirement: "20-28 years",
//       icon: <FaUsers className="w-5 h-5" />
//     },
//     {
//       category: "Age Limit for PO",
//       requirement: "20-30 years",
//       icon: <FaUsers className="w-5 h-5" />
//     },
//     {
//       category: "Language Proficiency",
//       requirement: "Knowledge of the regional language of the state/UT where you are applying for",
//       icon: <FaLanguage className="w-5 h-5" />
//     },
//     {
//       category: "Nationality",
//       requirement: "Indian",
//       icon: <FaFlag className="w-5 h-5" />
//     }
//   ];

//   const ageRelaxationData = [
//     { category: "General", relaxation: "No Relaxation" },
//     { category: "OBC", relaxation: "3 Years" },
//     { category: "SC/ST", relaxation: "5 Years" },
//     { category: "PWD", relaxation: "10 Years" },
//     { category: "Ex-Serviceman", relaxation: "5 Years" }
//   ];

//   const syllabusData = [
//     {
//       subject: "English",
//       icon: <FaBook className="w-6 h-6" />,
//       topics: [
//         "Reading Comprehension",
//         "Cloze Test",
//         "Double Fillers",
//         "Error Spotting",
//         "Sentence Correction",
//         "Para Jumbles",
//         "Paragraph Completion",
//         "Para Summary",
//         "Sentence Connector",
//         "Vocabulary"
//       ]
//     },
//     {
//       subject: "Reasoning",
//       icon: <FaLightbulb className="w-6 h-6" />,
//       topics: [
//         "Seating Arrangements",
//         "Tabulation",
//         "Logical Reasoning",
//         "Syllogism",
//         "Input-Output",
//         "Coding-Decoding",
//         "Alphanumeric Series",
//         "Blood Relations",
//         "Ranking",
//         "Data Sufficiency",
//         "Distance & Direction",
//         "Coded Inequalities",
//         "Verbal Reasoning"
//       ]
//     },
//     {
//       subject: "Mathematics",
//       icon: <FaCalculator className="w-6 h-6" />,
//       topics: [
//         "Simplification & Approximation",
//         "Data Interpretation",
//         "Data Sufficiency",
//         "Number Series",
//         "Ratio & Proportion",
//         "Quadratic Equations",
//         "Averages, Boats & Streams",
//         "Simple Interest & Compound Interest",
//         "Percentage",
//         "Profit & Loss",
//         "Mixtures & Alligation",
//         "Permutation & Combination",
//         "Time & Distance",
//         "Probability",
//         "Partnership",
//         "Pipes & Cistern"
//       ]
//     },
//     {
//       subject: "General Awareness",
//       icon: <FaGlobe className="w-6 h-6" />,
//       topics: [
//         "Static GK",
//         "Current events across the world",
//         "International and National organisations and their headquarters"
//       ]
//     },
//     {
//       subject: "Financial Awareness",
//       icon: <FaRupeeSign className="w-6 h-6" />,
//       topics: [
//         "Financial knowledge",
//         "Economic terms",
//         "Financial institutions",
//         "Financial news",
//         "Economic growth and development"
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 mt-16">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Bank Exam</h1>
//           <p className="text-xl md:text-2xl opacity-90">Gateway to Banking Career Opportunities</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8 max-w-6xl">

//         {/* Exam Introduction */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//                onClick={() => toggleSection('introduction')}>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaUniversity className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
//               </div>
//               {expandedSections.includes('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('introduction') && (
//               <div className="mt-6 text-gray-600 leading-relaxed">
//                 <p>
//                   Bank exams are highly competitive examinations conducted by various banking institutions and organizations 
//                   like IBPS, SBI, RBI, and other nationalized banks. These exams are designed to recruit candidates for 
//                   various positions including Clerk, Probationary Officer (PO), Specialist Officer, and other banking roles. 
//                   The exams test candidates' knowledge in English, Reasoning, Mathematics, General Awareness, and Financial Awareness.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Eligibility Criteria */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//                onClick={() => toggleSection('eligibility')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaUsers className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h2>
//               </div>
//               {expandedSections.includes('eligibility') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('eligibility') && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                   {eligibilityData.map((item, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4">
//                       <div className="flex items-center mb-2">
//                         <div className="text-blue-900 mr-2">{item.icon}</div>
//                         <h3 className="font-semibold text-blue-900">{item.category}</h3>
//                       </div>
//                       <p className="text-gray-600">{item.requirement}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="bg-blue-50 rounded-lg p-4">
//                   <h3 className="text-lg font-bold text-blue-900 mb-4">Age Relaxation</h3>
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="bg-blue-900 text-white">
//                           <th className="px-4 py-2 text-left">Category</th>
//                           <th className="px-4 py-2 text-left">Age Relaxation</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {ageRelaxationData.map((item, index) => (
//                           <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
//                             <td className="px-4 py-2 font-medium">{item.category}</td>
//                             <td className="px-4 py-2">{item.relaxation}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Syllabus Section */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//                onClick={() => toggleSection('syllabus')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaBullseye className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
//               </div>
//               {expandedSections.includes('syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('syllabus') && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {syllabusData.map((subject, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6">
//                       <div className="flex items-center mb-4">
//                         <div className="text-blue-900 mr-3">{subject.icon}</div>
//                         <h3 className="text-xl font-bold text-blue-900">{subject.subject}</h3>
//                       </div>
//                       <div className="space-y-2">
//                         {subject.topics.map((topic, topicIndex) => (
//                           <div key={topicIndex} className="flex items-start">
//                             <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
//                             <span className="text-gray-600 text-sm">{topic}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Key Highlights */}
//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaUniversity className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Banking Career</h3>
//               <p className="text-sm opacity-90">Prestigious positions in banking sector</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaGraduationCap className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Graduate Level</h3>
//               <p className="text-sm opacity-90">Bachelor's degree required</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaUsers className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Multiple Positions</h3>
//               <p className="text-sm opacity-90">Clerk, PO, and Specialist Officer roles</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankExamPage;
// import React, { useState } from 'react';
// import {
//   FaChevronDown,
//   FaChevronUp,
//   FaUniversity,
//   FaUsers,
//   FaBook,
//   FaRupeeSign,
//   FaGraduationCap,
//   FaCheckCircle,
//   FaLanguage,
//   FaFlag,
//   FaBullseye,
//   FaCalculator,
//   FaLightbulb,
//   FaGlobe
// } from 'react-icons/fa';

// const BankExamPage = () => {
//   const [expandedSections, setExpandedSections] = useState(['introduction', 'eligibility']);

//   const toggleSection = (section) => {
//     setExpandedSections((prev) =>
//       prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
//     );
//   };

//   const isExpanded = (section) => expandedSections.includes(section);

//   const eligibilityData = [
//     {
//       category: "Educational Qualifications",
//       requirement: "Bachelor's degree (graduation) in any discipline from a recognized university",
//       icon: <FaGraduationCap className="w-5 h-5" />
//     },
//     {
//       category: "Age Limit for Clerk",
//       requirement: "20-28 years",
//       icon: <FaUsers className="w-5 h-5" />
//     },
//     {
//       category: "Age Limit for PO",
//       requirement: "20-30 years",
//       icon: <FaUsers className="w-5 h-5" />
//     },
//     {
//       category: "Language Proficiency",
//       requirement: "Knowledge of the regional language of the state/UT where you are applying for",
//       icon: <FaLanguage className="w-5 h-5" />
//     },
//     {
//       category: "Nationality",
//       requirement: "Indian",
//       icon: <FaFlag className="w-5 h-5" />
//     }
//   ];

//   const ageRelaxationData = [
//     { category: "General", relaxation: "No Relaxation" },
//     { category: "OBC", relaxation: "3 Years" },
//     { category: "SC/ST", relaxation: "5 Years" },
//     { category: "PWD", relaxation: "10 Years" },
//     { category: "Ex-Serviceman", relaxation: "5 Years" }
//   ];

//   const syllabusData = [
//     {
//       subject: "English",
//       icon: <FaBook className="w-6 h-6" />,
//       topics: [
//         "Reading Comprehension",
//         "Cloze Test",
//         "Double Fillers",
//         "Error Spotting",
//         "Sentence Correction",
//         "Para Jumbles",
//         "Paragraph Completion",
//         "Para Summary",
//         "Sentence Connector",
//         "Vocabulary"
//       ]
//     },
//     {
//       subject: "Reasoning",
//       icon: <FaLightbulb className="w-6 h-6" />,
//       topics: [
//         "Seating Arrangements",
//         "Tabulation",
//         "Logical Reasoning",
//         "Syllogism",
//         "Input-Output",
//         "Coding-Decoding",
//         "Alphanumeric Series",
//         "Blood Relations",
//         "Ranking",
//         "Data Sufficiency",
//         "Distance & Direction",
//         "Coded Inequalities",
//         "Verbal Reasoning"
//       ]
//     },
//     {
//       subject: "Mathematics",
//       icon: <FaCalculator className="w-6 h-6" />,
//       topics: [
//         "Simplification & Approximation",
//         "Data Interpretation",
//         "Data Sufficiency",
//         "Number Series",
//         "Ratio & Proportion",
//         "Quadratic Equations",
//         "Averages, Boats & Streams",
//         "Simple Interest & Compound Interest",
//         "Percentage",
//         "Profit & Loss",
//         "Mixtures & Alligation",
//         "Permutation & Combination",
//         "Time & Distance",
//         "Probability",
//         "Partnership",
//         "Pipes & Cistern"
//       ]
//     },
//     {
//       subject: "General Awareness",
//       icon: <FaGlobe className="w-6 h-6" />,
//       topics: [
//         "Static GK",
//         "Current events across the world",
//         "International and National organisations and their headquarters"
//       ]
//     },
//     {
//       subject: "Financial Awareness",
//       icon: <FaRupeeSign className="w-6 h-6" />,
//       topics: [
//         "Financial knowledge",
//         "Economic terms",
//         "Financial institutions",
//         "Financial news",
//         "Economic growth and development"
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 mt-16">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Bank Exam</h1>
//           <p className="text-xl md:text-2xl opacity-90">Gateway to Banking Career Opportunities</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
//         {/* Accordion Item */}
//         {/* Introduction */}
//         <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
//           <div className="flex items-center justify-between" onClick={() => toggleSection('introduction')}>
//             <div className="flex items-center space-x-3">
//               <div className="bg-blue-900 text-white p-2 rounded-lg"><FaUniversity className="w-6 h-6" /></div>
//               <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
//             </div>
//             {isExpanded('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//           </div>
//           <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded('introduction') ? 'max-h-[300px] mt-6' : 'max-h-0'}`}>
//             <p className="text-gray-600 leading-relaxed">
//               Bank exams are highly competitive examinations conducted by various banking institutions like IBPS, SBI, RBI, and other nationalized banks. These exams are designed to recruit candidates for Clerk, PO, Specialist Officer, and other banking roles. Subjects tested include English, Reasoning, Mathematics, General and Financial Awareness.
//             </p>
//           </div>
//         </div>

//         {/* Eligibility Criteria */}
//         <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
//           <div className="flex items-center justify-between" onClick={() => toggleSection('eligibility')}>
//             <div className="flex items-center space-x-3">
//               <div className="bg-blue-900 text-white p-2 rounded-lg"><FaUsers className="w-6 h-6" /></div>
//               <h2 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h2>
//             </div>
//             {isExpanded('eligibility') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//           </div>
//           <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded('eligibility') ? 'max-h-[1000px] mt-6' : 'max-h-0'}`}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               {eligibilityData.map((item, idx) => (
//                 <div key={idx} className="bg-gray-50 rounded-lg p-4">
//                   <div className="flex items-center mb-2 text-blue-900">{item.icon}<span className="ml-2 font-semibold">{item.category}</span></div>
//                   <p className="text-gray-600">{item.requirement}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="bg-blue-50 rounded-lg p-4">
//               <h3 className="text-lg font-bold text-blue-900 mb-4">Age Relaxation</h3>
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-blue-900 text-white">
//                     <th className="px-4 py-2 text-left">Category</th>
//                     <th className="px-4 py-2 text-left">Relaxation</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {ageRelaxationData.map((item, i) => (
//                     <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
//                       <td className="px-4 py-2 font-medium">{item.category}</td>
//                       <td className="px-4 py-2">{item.relaxation}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Syllabus Section */}
//         <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
//           <div className="flex items-center justify-between" onClick={() => toggleSection('syllabus')}>
//             <div className="flex items-center space-x-3">
//               <div className="bg-blue-900 text-white p-2 rounded-lg"><FaBullseye className="w-6 h-6" /></div>
//               <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
//             </div>
//             {isExpanded('syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//           </div>
//           <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded('syllabus') ? 'max-h-[2000px] mt-6' : 'max-h-0'}`}>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {syllabusData.map((subj, idx) => (
//                 <div key={idx} className="bg-gray-50 rounded-lg p-6">
//                   <div className="flex items-center mb-4">
//                     <div className="text-blue-900 mr-3">{subj.icon}</div>
//                     <h3 className="text-xl font-bold text-blue-900">{subj.subject}</h3>
//                   </div>
//                   <div className="space-y-2">
//                     {subj.topics.map((topic, i) => (
//                       <div key={i} className="flex items-start">
//                         <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
//                         <span className="text-gray-600 text-sm">{topic}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Key Highlights */}
//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaUniversity className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Banking Career</h3>
//               <p className="text-sm opacity-90">Prestigious positions in banking sector</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaGraduationCap className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Graduate Level</h3>
//               <p className="text-sm opacity-90">Bachelor's degree required</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaUsers className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Multiple Positions</h3>
//               <p className="text-sm opacity-90">Clerk, PO, and Specialist Officer roles</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankExamPage;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChevronDown,
  FaChevronUp,
  FaUniversity,
  FaUsers,
  FaBook,
  FaRupeeSign,
  FaGraduationCap,
  FaCheckCircle,
  FaLanguage,
  FaFlag,
  FaBullseye,
  FaCalculator,
  FaLightbulb,
  FaGlobe
} from 'react-icons/fa';

const BankExamPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'eligibility']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const isExpanded = (section) => expandedSections.includes(section);

  const eligibilityData = [
    {
      category: "Educational Qualifications",
      requirement: "Bachelor's degree (graduation) in any discipline from a recognized university",
      icon: <FaGraduationCap className="w-5 h-5" />
    },
    {
      category: "Age Limit for Clerk",
      requirement: "20-28 years",
      icon: <FaUsers className="w-5 h-5" />
    },
    {
      category: "Age Limit for PO",
      requirement: "20-30 years",
      icon: <FaUsers className="w-5 h-5" />
    },
    {
      category: "Language Proficiency",
      requirement: "Knowledge of the regional language of the state/UT where you are applying for",
      icon: <FaLanguage className="w-5 h-5" />
    },
    {
      category: "Nationality",
      requirement: "Indian",
      icon: <FaFlag className="w-5 h-5" />
    }
  ];

  const ageRelaxationData = [
    { category: "General", relaxation: "No Relaxation" },
    { category: "OBC", relaxation: "3 Years" },
    { category: "SC/ST", relaxation: "5 Years" },
    { category: "PWD", relaxation: "10 Years" },
    { category: "Ex-Serviceman", relaxation: "5 Years" }
  ];

  const syllabusData = [
    {
      subject: "English",
      icon: <FaBook className="w-6 h-6" />,
      topics: [
        "Reading Comprehension",
        "Cloze Test",
        "Double Fillers",
        "Error Spotting",
        "Sentence Correction",
        "Para Jumbles",
        "Paragraph Completion",
        "Para Summary",
        "Sentence Connector",
        "Vocabulary"
      ]
    },
    {
      subject: "Reasoning",
      icon: <FaLightbulb className="w-6 h-6" />,
      topics: [
        "Seating Arrangements",
        "Tabulation",
        "Logical Reasoning",
        "Syllogism",
        "Input-Output",
        "Coding-Decoding",
        "Alphanumeric Series",
        "Blood Relations",
        "Ranking",
        "Data Sufficiency",
        "Distance & Direction",
        "Coded Inequalities",
        "Verbal Reasoning"
      ]
    },
    {
      subject: "Mathematics",
      icon: <FaCalculator className="w-6 h-6" />,
      topics: [
        "Simplification & Approximation",
        "Data Interpretation",
        "Data Sufficiency",
        "Number Series",
        "Ratio & Proportion",
        "Quadratic Equations",
        "Averages, Boats & Streams",
        "Simple Interest & Compound Interest",
        "Percentage",
        "Profit & Loss",
        "Mixtures & Alligation",
        "Permutation & Combination",
        "Time & Distance",
        "Probability",
        "Partnership",
        "Pipes & Cistern"
      ]
    },
    {
      subject: "General Awareness",
      icon: <FaGlobe className="w-6 h-6" />,
      topics: [
        "Static GK",
        "Current events across the world",
        "International and National organisations and their headquarters"
      ]
    },
    {
      subject: "Financial Awareness",
      icon: <FaRupeeSign className="w-6 h-6" />,
      topics: [
        "Financial knowledge",
        "Economic terms",
        "Financial institutions",
        "Financial news",
        "Economic growth and development"
      ]
    }
  ];

  const sectionVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: 'auto', opacity: 1 },
  };

  const transition = { duration: 0.5, ease: 'easeInOut' };

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bank Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to Banking Career Opportunities</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">

        {/* Reusable Accordion Section */}
        {[
          {
            id: 'introduction',
            title: 'Exam Introduction',
            icon: <FaUniversity className="w-6 h-6" />,
            content: (
              <p className="text-gray-600 leading-relaxed">
                Bank exams are highly competitive examinations conducted by various banking institutions like IBPS, SBI, RBI, and other nationalized banks...
              </p>
            )
          },
          {
            id: 'eligibility',
            title: 'Eligibility Criteria',
            icon: <FaUsers className="w-6 h-6" />,
            content: (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {eligibilityData.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2 text-blue-900">
                        {item.icon}
                        <span className="ml-2 font-semibold">{item.category}</span>
                      </div>
                      <p className="text-gray-600">{item.requirement}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Age Relaxation</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Relaxation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ageRelaxationData.map((item, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                          <td className="px-4 py-2 font-medium">{item.category}</td>
                          <td className="px-4 py-2">{item.relaxation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )
          },
          {
            id: 'syllabus',
            title: 'Detailed Syllabus',
            icon: <FaBullseye className="w-6 h-6" />,
            content: (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {syllabusData.map((subj, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-blue-900 mr-3">{subj.icon}</div>
                      <h3 className="text-xl font-bold text-blue-900">{subj.subject}</h3>
                    </div>
                    <div className="space-y-2">
                      {subj.topics.map((topic, i) => (
                        <div key={i} className="flex items-start">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                          <span className="text-gray-600 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          }
        ].map(section => (
          <div key={section.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">{section.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              </div>
              {isExpanded(section.id) ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>

            <AnimatePresence initial={false}>
              {isExpanded(section.id) && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  variants={sectionVariants}
                  transition={transition}
                  className="overflow-hidden mt-4"
                >
                  {section.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUniversity className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Banking Career</h3>
              <p className="text-sm opacity-90">Prestigious positions in banking sector</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Graduate Level</h3>
              <p className="text-sm opacity-90">Bachelor's degree required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Positions</h3>
              <p className="text-sm opacity-90">Clerk, PO, and Specialist Officer roles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankExamPage;
