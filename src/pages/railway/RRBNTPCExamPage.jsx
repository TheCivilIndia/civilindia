// import React, { useState } from 'react';
// import {
//   FaChevronDown,
//   FaChevronUp,
//   FaBook,
//   FaClock,
//   FaUsers,
//   FaAward,
//   FaRupeeSign,
//   FaFileAlt,
//   FaBullseye,
//   FaCheckCircle,
//   FaShieldAlt,
//   FaCalculator,
//   FaBrain,
//   FaGlobe,
//   FaRunning,
//   FaRuler,
//   FaClipboardCheck,
//   FaGraduationCap,
//   FaKeyboard,
//   FaTrain,
//   FaUserTie
// } from 'react-icons/fa';

// const RRBNTPCExamPage = () => {
//   const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

//   const toggleSection = (section) => {
//     setExpandedSections((prev) =>
//       prev.includes(section)
//         ? prev.filter((s) => s !== section)
//         : [...prev, section]
//     );
//   };

//   const examStages = [
//     {
//       title: "CBT 1 (Computer Based Test 1)",
//       details: [
//         "Questions: 100 multiple-choice questions",
//         "Duration: 90 minutes",
//         "Marks: 100 total marks (1 mark each)",
//         "Negative Marking: 1/3 mark deduction for wrong answers",
//         "Sections: General Awareness (40), Mathematics (30), General Intelligence & Reasoning (30)",
//         "Screening stage for CBT 2",
//         "Available in 15 languages"
//       ]
//     },
//     {
//       title: "CBT 2 (Computer Based Test 2)",
//       details: [
//         "Questions: 120 multiple-choice questions",
//         "Duration: 90 minutes",
//         "Marks: 120 total marks (1 mark each)",
//         "Negative Marking: 1/3 mark deduction for wrong answers",
//         "Sections: General Awareness (50), Mathematics (35), General Intelligence & Reasoning (35)",
//         "Final written examination",
//         "Qualifying nature for next stage"
//       ]
//     },
//     {
//       title: "Typing Skill Test/CBAT",
//       details: [
//         "Required for specific posts only",
//         "Typing proficiency test in Hindi/English",
//         "Computer-based aptitude test for some positions",
//         "Qualifying nature - must pass to proceed",
//         "Conducted after CBT 2 qualification"
//       ]
//     },
//     {
//       title: "Document Verification & Medical",
//       details: [
//         "Original document verification",
//         "Educational qualification certificates",
//         "Caste/category certificates (if applicable)",
//         "Medical examination for fitness",
//         "Final stage before appointment"
//       ]
//     }
//   ];

//   const eligibilityData = [
//     { category: "Nationality", requirement: "Must be a citizen of India, Nepal, or Bhutan" },
//     { category: "Age Limit (Undergraduate)", requirement: "18-33 years for 12th pass posts" },
//     { category: "Age Limit (Graduate)", requirement: "18-36 years for degree posts" },
//     { category: "Educational Qualification", requirement: "12th Class/Graduation from recognized board/university" }
//   ];

//   const undergraduatePosts = [
//     {
//       post: "Junior Clerk cum Typist",
//       ageLimit: "18-33 Years",
//       qualification: "12th or equivalent with at least 50% marks",
//       typing: "Required"
//     },
//     {
//       post: "Accounts Clerk cum Typist",
//       ageLimit: "18-33 Years", 
//       qualification: "12th or equivalent with at least 50% marks",
//       typing: "Required"
//     },
//     {
//       post: "Junior Time Keeper",
//       ageLimit: "18-33 Years",
//       qualification: "12th or equivalent with at least 50% marks",
//       typing: "Required"
//     },
//     {
//       post: "Trains Clerk",
//       ageLimit: "18-33 Years",
//       qualification: "12th or equivalent with at least 50% marks",
//       typing: "Not Required"
//     },
//     {
//       post: "Commercial cum Ticket Clerk",
//       ageLimit: "18-33 Years",
//       qualification: "12th or equivalent with at least 50% marks",
//       typing: "Not Required"
//     }
//   ];

//   const graduatePosts = [
//     {
//       post: "Traffic Assistant",
//       ageLimit: "18-36 Years",
//       qualification: "Degree in any discipline from recognized university",
//       typing: "Not Required"
//     },
//     {
//       post: "Goods Guard",
//       ageLimit: "18-36 Years",
//       qualification: "Degree in any discipline from recognized university", 
//       typing: "Not Required"
//     },
//     {
//       post: "Senior Commercial cum Ticket Clerk",
//       ageLimit: "18-36 Years",
//       qualification: "Degree in any discipline from recognized university",
//       typing: "Not Required"
//     },
//     {
//       post: "Senior Clerk cum Typist",
//       ageLimit: "18-36 Years",
//       qualification: "Degree from recognized university",
//       typing: "Required"
//     },
//     {
//       post: "Junior Account Assistant cum Typist",
//       ageLimit: "18-36 Years",
//       qualification: "Degree from recognized university",
//       typing: "Required"
//     },
//     {
//       post: "Senior Time Keeper",
//       ageLimit: "18-36 Years",
//       qualification: "Degree from recognized university",
//       typing: "Required"
//     },
//     {
//       post: "Commercial Apprentice",
//       ageLimit: "18-36 Years",
//       qualification: "Degree in any discipline from recognized university",
//       typing: "Not Required"
//     },
//     {
//       post: "Station Master",
//       ageLimit: "18-36 Years",
//       qualification: "Degree in any discipline from recognized university",
//       typing: "Not Required"
//     }
//   ];

//   const cbt1Pattern = [
//     {
//       subject: "General Awareness",
//       questions: 40,
//       marks: 40,
//       topics: ["Current Affairs", "Indian History", "Art & Culture", "Geography", "Economics", "General Polity", "Indian Constitution", "Sports", "General Science", "Famous Books & Authors", "Important Dates"]
//     },
//     {
//       subject: "Mathematics",
//       questions: 30,
//       marks: 30,
//       topics: ["Number Systems", "Whole Numbers", "Decimal and Fractions", "Relationships between Numbers", "Fundamental Arithmetical Operations", "Percentages", "Ratio and Proportion", "Averages", "Interest", "Discount", "Profit and Loss", "Tables and Graphs", "Mensuration", "Time and Work", "Time and Distance"]
//     },
//     {
//       subject: "General Intelligence & Reasoning",
//       questions: 30,
//       marks: 30,
//       topics: ["Analogies", "Spatial Visualization", "Spatial Orientation", "Problem-Solving Analysis", "Decision Making", "Visual Memory", "Similarities & Differences", "Discriminating Observation", "Relationship Concepts", "Arithmetical Reasoning", "Classification", "Arithmetic Number Series", "Non-Verbal Series", "Coding & Decoding", "Statement Conclusion", "Syllogistic Reasoning"]
//     }
//   ];

//   const cbt2Pattern = [
//     {
//       subject: "General Awareness",
//       questions: 50,
//       marks: 50,
//       topics: ["Current Affairs", "Indian History", "Art & Culture", "Geography", "Economics", "General Polity", "Indian Constitution", "Sports", "General Science", "Famous Books & Authors", "Important Dates", "Inventions & Discoveries"]
//     },
//     {
//       subject: "Mathematics", 
//       questions: 35,
//       marks: 35,
//       topics: ["Number Systems", "BODMAS", "Decimal Fractions", "Simplification", "Square & Square Roots", "Cube & Cube Roots", "Average", "Percentage", "Ratio and Proportion", "Unitary Method", "Time & Work", "Time & Distance", "Simple & Compound Interest", "Profit & Loss", "Geometry", "Mensuration", "Statistics", "Trigonometry"]
//     },
//     {
//       subject: "General Intelligence & Reasoning",
//       questions: 35, 
//       marks: 35,
//       topics: ["Analogies", "Classification", "Word Formation", "Statement & Conclusion", "Syllogistic Reasoning", "Mathematical Operations", "Similarities & Differences", "Space Visualization", "Problem-Solving", "Analysis & Judgment", "Decision Making", "Visual Memory", "Discriminating Observation", "Relationship Concepts", "Arithmetical Reasoning", "Number Series", "Coding-Decoding", "Distance Direction", "Ordering & Ranking"]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 mt-16">
//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">RRB NTPC Exam</h1>
//           <p className="text-xl md:text-2xl opacity-90">Railway Recruitment Board Non-Technical Popular Categories</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         {/* Exam Introduction */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('introduction')}>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaTrain className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
//               </div>
//               {expandedSections.includes('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('introduction') && (
//               <div className="mt-6 text-gray-600 leading-relaxed">
//                 <p>
//                   The Railway Recruitment Board (RRB) Non-Technical Popular Categories (NTPC) exam is a comprehensive recruitment drive for various non-technical posts in the Indian Railways. This examination is conducted for both undergraduate (12th pass) and graduate-level positions across different departments of Indian Railways. The RRB NTPC exam offers numerous career opportunities including clerical positions, commercial posts, traffic assistant roles, and station master positions, making it one of the most sought-after government job examinations in India.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Exam Overview */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('overview')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaBullseye className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Selection Process Overview</h2>
//               </div>
//               {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('overview') && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   {examStages.map((stage, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6">
//                       <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
//                         {index === 0 && <FaBook className="w-5 h-5 mr-2" />}
//                         {index === 1 && <FaFileAlt className="w-5 h-5 mr-2" />}
//                         {index === 2 && <FaKeyboard className="w-5 h-5 mr-2" />}
//                         {index === 3 && <FaClipboardCheck className="w-5 h-5 mr-2" />}
//                         {stage.title}
//                       </h3>
//                       <ul className="space-y-2">
//                         {stage.details.map((detail, detailIndex) => (
//                           <li key={detailIndex} className="text-gray-600 flex items-start text-sm">
//                             <span className="text-blue-600 mr-2">•</span>
//                             {detail}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Quick Stats */}
//                 <div className="bg-blue-50 rounded-lg p-6">
//                   <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Stats</h3>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-blue-900">4 Stages</div>
//                       <div className="text-sm text-gray-600">Selection Process</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-blue-900">90 min</div>
//                       <div className="text-sm text-gray-600">Exam Duration</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-blue-900">1/3</div>
//                       <div className="text-sm text-gray-600">Negative Marking</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-blue-900">15</div>
//                       <div className="text-sm text-gray-600">Languages Available</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Eligibility Criteria */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('eligibility')}>
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
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {eligibilityData.map((item, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4">
//                       <h3 className="font-semibold text-blue-900 mb-2">{item.category}</h3>
//                       <p className="text-gray-600">{item.requirement}</p>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
//                   <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
//                   <p className="text-yellow-800 text-sm">
//                     50% marks requirement is not applicable for SC/ST/PwD/Ex-Servicemen category candidates for undergraduate posts.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Posts Available */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('posts')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaUserTie className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Posts Available</h2>
//               </div>
//               {expandedSections.includes('posts') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('posts') && (
//               <div className="mt-6">
//                 {/* Undergraduate Posts */}
//                 <div className="mb-8">
//                   <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
//                     <FaGraduationCap className="w-5 h-5 mr-2" />
//                     Undergraduate Posts (12th Pass)
//                   </h3>
//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse border border-gray-300">
//                       <thead>
//                         <tr className="bg-blue-900 text-white">
//                           <th className="border border-gray-300 p-3 text-left">Post</th>
//                           <th className="border border-gray-300 p-3 text-center">Age Limit</th>
//                           <th className="border border-gray-300 p-3 text-center">Qualification</th>
//                           <th className="border border-gray-300 p-3 text-center">Typing Required</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {undergraduatePosts.map((post, index) => (
//                           <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                             <td className="border border-gray-300 p-3 font-semibold text-blue-900">{post.post}</td>
//                             <td className="border border-gray-300 p-3 text-center text-sm">{post.ageLimit}</td>
//                             <td className="border border-gray-300 p-3 text-sm">{post.qualification}</td>
//                             <td className="border border-gray-300 p-3 text-center text-sm">
//                               <span className={`px-2 py-1 rounded-full text-xs ${post.typing === 'Required' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//                                 {post.typing}
//                               </span>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>

//                 {/* Graduate Posts */}
//                 <div className="mb-6">
//                   <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
//                     <FaAward className="w-5 h-5 mr-2" />
//                     Graduate Posts (Degree Required)
//                   </h3>
//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse border border-gray-300">
//                       <thead>
//                         <tr className="bg-blue-900 text-white">
//                           <th className="border border-gray-300 p-3 text-left">Post</th>
//                           <th className="border border-gray-300 p-3 text-center">Age Limit</th>
//                           <th className="border border-gray-300 p-3 text-center">Qualification</th>
//                           <th className="border border-gray-300 p-3 text-center">Typing Required</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {graduatePosts.map((post, index) => (
//                           <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                             <td className="border border-gray-300 p-3 font-semibold text-blue-900">{post.post}</td>
//                             <td className="border border-gray-300 p-3 text-center text-sm">{post.ageLimit}</td>
//                             <td className="border border-gray-300 p-3 text-sm">{post.qualification}</td>
//                             <td className="border border-gray-300 p-3 text-center text-sm">
//                               <span className={`px-2 py-1 rounded-full text-xs ${post.typing === 'Required' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//                                 {post.typing}
//                               </span>
//                             </td>
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

//         {/* CBT 1 Exam Pattern & Syllabus */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('cbt1-pattern')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaBook className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">CBT 1 Exam Pattern & Syllabus</h2>
//               </div>
//               {expandedSections.includes('cbt1-pattern') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('cbt1-pattern') && (
//               <div className="mt-6">
//                 <div className="overflow-x-auto mb-6">
//                   <table className="w-full border-collapse border border-gray-300">
//                     <thead>
//                       <tr className="bg-blue-900 text-white">
//                         <th className="border border-gray-300 p-3 text-left">Subject</th>
//                         <th className="border border-gray-300 p-3 text-center">Questions</th>
//                         <th className="border border-gray-300 p-3 text-center">Marks</th>
//                         <th className="border border-gray-300 p-3 text-center">Duration</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cbt1Pattern.map((subject, index) => (
//                         <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                           <td className="border border-gray-300 p-3 font-semibold text-blue-900">{subject.subject}</td>
//                           <td className="border border-gray-300 p-3 text-center">{subject.questions}</td>
//                           <td className="border border-gray-300 p-3 text-center">{subject.marks}</td>
//                           <td className="border border-gray-300 p-3 text-center">{index === 0 ? "90 minutes" : ""}</td>
//                         </tr>
//                       ))}
//                       <tr className="bg-blue-100 font-bold">
//                         <td className="border border-gray-300 p-3">Total</td>
//                         <td className="border border-gray-300 p-3 text-center">100</td>
//                         <td className="border border-gray-300 p-3 text-center">100</td>
//                         <td className="border border-gray-300 p-3 text-center">90 minutes</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Subject-wise Syllabus */}
//                 <div className="grid grid-cols-1 gap-6">
//                   {cbt1Pattern.map((subject, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6">
//                       <h4 className="font-bold text-blue-900 mb-4 flex items-center text-lg">
//                         {index === 0 && <FaGlobe className="w-5 h-5 mr-2" />}
//                         {index === 1 && <FaCalculator className="w-5 h-5 mr-2" />}
//                         {index === 2 && <FaBrain className="w-5 h-5 mr-2" />}
//                         {subject.subject}
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {subject.topics.map((topic, topicIndex) => (
//                           <span key={topicIndex} className="bg-white text-xs px-3 py-2 rounded-full text-gray-700 border border-gray-200">
//                             {topic}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Typing Skill Test/CBAT */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('typing-test')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaKeyboard className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Typing Skill Test & CBAT</h2>
//               </div>
//               {expandedSections.includes('typing-test') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('typing-test') && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="bg-blue-50 rounded-lg p-6">
//                     <h4 className="font-bold text-blue-800 mb-3 flex items-center">
//                       <FaKeyboard className="w-5 h-5 mr-2" />
//                       Typing Skill Test
//                     </h4>
//                     <ul className="text-blue-700 space-y-2 text-sm">
//                       <li>• Required for posts with "Typist" designation</li>
//                       <li>• Conducted in Hindi or English language</li>
//                       <li>• Computer-based typing test</li>
//                       <li>• Qualifying nature - must pass to proceed</li>
//                       <li>• Speed and accuracy both evaluated</li>
//                     </ul>
//                   </div>
//                   <div className="bg-green-50 rounded-lg p-6">
//                     <h4 className="font-bold text-green-800 mb-3 flex items-center">
//                       <FaBrain className="w-5 h-5 mr-2" />
//                       Computer Based Aptitude Test (CBAT)
//                     </h4>
//                     <ul className="text-green-700 space-y-2 text-sm">
//                       <li>• Applicable for specific technical posts</li>
//                       <li>• Tests computer aptitude and skills</li>
//                       <li>• Conducted after CBT 2 qualification</li>
//                       <li>• Qualifying examination</li>
//                       <li>• Post-specific test requirements</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Preparation Tips */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('preparation')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaBullseye className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Preparation Strategy</h2>
//               </div>
//               {expandedSections.includes('preparation') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('preparation') && (
//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="bg-red-50 rounded-lg p-6">
//                     <h4 className="font-bold text-red-800 mb-3 flex items-center">
//                       <FaGlobe className="w-5 h-5 mr-2" />
//                       General Awareness
//                     </h4>
//                     <ul className="text-red-700 space-y-2 text-sm">
//                       <li>• Read newspapers daily</li>
//                       <li>• Focus on current affairs</li>
//                       <li>• Study Indian history & geography</li>
//                       <li>• Learn about Indian constitution</li>
//                       <li>• Practice general science topics</li>
//                     </ul>
//                   </div>
//                   <div className="bg-yellow-50 rounded-lg p-6">
//                     <h4 className="font-bold text-yellow-800 mb-3 flex items-center">
//                       <FaCalculator className="w-5 h-5 mr-2" />
//                       Mathematics
//                     </h4>
//                     <ul className="text-yellow-700 space-y-2 text-sm">
//                       <li>• Practice basic arithmetic daily</li>
//                       <li>• Focus on speed and accuracy</li>
//                       <li>• Learn shortcut methods</li>
//                       <li>• Solve previous year questions</li>
//                       <li>• Practice time & work problems</li>
//                     </ul>
//                   </div>
//                   <div className="bg-green-50 rounded-lg p-6">
//                     <h4 className="font-bold text-green-800 mb-3 flex items-center">
//                       <FaBrain className="w-5 h-5 mr-2" />
//                       Reasoning
//                     </h4>
//                     <ul className="text-green-700 space-y-2 text-sm">
//                       <li>• Practice puzzles regularly</li>
//                       <li>• Focus on logical reasoning</li>
//                       <li>• Learn coding-decoding patterns</li>
//                       <li>• Practice series and analogies</li>
//                       <li>• Solve mock tests frequently</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mt-6 bg-blue-50 rounded-lg p-6">
//                   <h4 className="font-semibold text-blue-800 mb-4">General Preparation Tips:</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <ul className="text-blue-700 space-y-2 text-sm">
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Create a structured study plan
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Take regular mock tests
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Analyze your performance regularly
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Focus on time management
//                       </li>
//                     </ul>
//                     <ul className="text-blue-700 space-y-2 text-sm">
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Revise regularly to retain information
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Stay updated with railway-related news
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Practice typing for relevant posts
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Maintain accuracy over speed
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Career Prospects */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('career')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaRupeeSign className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Career Prospects & Benefits</h2>
//               </div>
//               {expandedSections.includes('career') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('career') && (
//               <div className="mt-6">
//                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center mb-6">
//                   <h3 className="text-2xl font-bold text-blue-900 mb-2">RRB NTPC Positions</h3>
//                   <div className="text-3xl font-bold text-green-600 mb-2">Multiple Pay Scales</div>
//                   <p className="text-gray-600 text-sm">Based on 7th Pay Commission</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div className="bg-green-50 rounded-lg p-6">
//                     <h4 className="font-semibold text-green-800 mb-4">Salary Benefits:</h4>
//                     <ul className="text-green-700 space-y-2 text-sm">
//                       <li className="flex items-start">
//                         <span className="text-green-600 mr-2">•</span>
//                         Basic Pay as per 7th Pay Commission
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-600 mr-2">•</span>
//                         Dearness Allowance (DA)
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-600 mr-2">•</span>
//                         House Rent Allowance (HRA)
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-600 mr-2">•</span>
//                         Travel Allowance (TA)
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="bg-blue-50 rounded-lg p-6">
//                     <h4 className="font-semibold text-blue-800 mb-4">Additional Benefits:</h4>
//                     <ul className="text-blue-700 space-y-2 text-sm">
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Medical Benefits for family
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Provident Fund & Pension
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Free Railway Pass
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-600 mr-2">•</span>
//                         Leave Travel Concession
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="bg-yellow-50 rounded-lg p-6">
//                   <h4 className="font-semibold text-yellow-800 mb-4">Career Growth Opportunities:</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <ul className="text-yellow-700 space-y-2 text-sm">
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Promotion opportunities within Railways
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Job security in government sector
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Transfer opportunities across India
//                       </li>
//                     </ul>
//                     <ul className="text-yellow-700 space-y-2 text-sm">
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Higher position through departmental exams
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Skill development training programs
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Retirement benefits and gratuity
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Key Highlights */}
//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaTrain className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Railway Jobs</h3>
//               <p className="text-sm opacity-90">Multiple post categories</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaGraduationCap className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Flexible Qualification</h3>
//               <p className="text-sm opacity-90">12th & Graduate posts</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaUsers className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Wide Age Range</h3>
//               <p className="text-sm opacity-90">18-36 years eligible</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <FaCheckCircle className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">Government Benefits</h3>
//               <p className="text-sm opacity-90">Complete job security</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RRBNTPCExamPage; 1 && <FaCalculator className="w-5 h-5 mr-2" />}
//                         {index === 2 && <FaBrain className="w-5 h-5 mr-2" />}
//                         {subject.subject}
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {subject.topics.map((topic, topicIndex) => (
//                           <span key={topicIndex} className="bg-white text-xs px-3 py-2 rounded-full text-gray-700 border border-gray-200">
//                             {topic}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* CBT 2 Exam Pattern & Syllabus */}
//         <div className="mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('cbt2-pattern')}>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-blue-900 text-white p-2 rounded-lg">
//                   <FaFileAlt className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">CBT 2 Exam Pattern & Syllabus</h2>
//               </div>
//               {expandedSections.includes('cbt2-pattern') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
//             </div>
//             {expandedSections.includes('cbt2-pattern') && (
//               <div className="mt-6">
//                 <div className="overflow-x-auto mb-6">
//                   <table className="w-full border-collapse border border-gray-300">
//                     <thead>
//                       <tr className="bg-blue-900 text-white">
//                         <th className="border border-gray-300 p-3 text-left">Subject</th>
//                         <th className="border border-gray-300 p-3 text-center">Questions</th>
//                         <th className="border border-gray-300 p-3 text-center">Marks</th>
//                         <th className="border border-gray-300 p-3 text-center">Duration</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cbt2Pattern.map((subject, index) => (
//                         <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                           <td className="border border-gray-300 p-3 font-semibold text-blue-900">{subject.subject}</td>
//                           <td className="border border-gray-300 p-3 text-center">{subject.questions}</td>
//                           <td className="border border-gray-300 p-3 text-center">{subject.marks}</td>
//                           <td className="border border-gray-300 p-3 text-center">{index === 0 ? "90 minutes" : ""}</td>
//                         </tr>
//                       ))}
//                       <tr className="bg-blue-100 font-bold">
//                         <td className="border border-gray-300 p-3">Total</td>
//                         <td className="border border-gray-300 p-3 text-center">120</td>
//                         <td className="border border-gray-300 p-3 text-center">120</td>
//                         <td className="border border-gray-300 p-3 text-center">90 minutes</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
//                   <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
//                   <ul className="text-yellow-800 text-sm space-y-1">
//                     <li>• Negative marking: 1/3 mark deduction for incorrect answers</li>
//                     <li>• CBT 2 is the final written examination</li>
//                     <li>• Qualifying CBT 2 leads to Typing Skill Test/CBAT (for applicable posts)</li>
//                     <li>• Available in 15 languages</li>
//                   </ul>
//                 </div>

//                 {/* Subject-wise Syllabus */}
//                 <div className="grid grid-cols-1 gap-6">
//                   {cbt2Pattern.map((subject, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6">
//                       <h4 className="font-bold text-blue-900 mb-4 flex items-center text-lg">
//                         {index === 0 && <FaGlobe className="w-5 h-5 mr-2" />}
//                         {index ===