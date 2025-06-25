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
  FaCheckCircle,
  FaUniversity,
  FaLanguage,
  FaCalendarAlt,
  FaGraduationCap
} from 'react-icons/fa';

const BankExamPageAgain = () => {
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
        "Sections: English, Reasoning, Mathematics, General Awareness, Financial Awareness",
        "Multiple-choice questions format",
        "Negative marking applicable",
        "Conducted nationwide simultaneously"
      ]
    },
    {
      title: "Interview Process",
      details: [
        "Personal Interview for qualified candidates",
        "Document verification process",
        "Final selection based on CBT and interview performance",
        "Merit list preparation based on total marks"
      ]
    }
  ];

  const eligibilityData = [
    {
      category: "Educational Qualification",
      requirement: "Bachelor's degree (graduation) in any discipline from a recognized university"
    },
    {
      category: "Age Limit - Clerk Position",
      requirement: "20-28 years"
    },
    {
      category: "Age Limit - PO Position",
      requirement: "20-30 years"
    },
    {
      category: "Language Proficiency",
      requirement: "Knowledge of the regional language of the state/UT where you are applying"
    },
    {
      category: "Nationality",
      requirement: "Indian citizen"
    }
  ];

  const ageRelaxationData = [
    { category: "General", relaxation: "No Relaxation" },
    { category: "OBC", relaxation: "3 Years" },
    { category: "SC/ST", relaxation: "5 Years" },
    { category: "PWD", relaxation: "10 Years" },
    { category: "Ex-Serviceman", relaxation: "5 Years" }
  ];

  const syllabusData = {
    english: [
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
    ],
    reasoning: [
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
    ],
    mathematics: [
      "Simplification & Approximation",
      "Data Interpretation",
      "Data Sufficiency",
      "Number Series",
      "Ratio & Proportion",
      "Quadratic Equations",
      "Averages",
      "Boats & Streams",
      "Simple Interest & Compound Interest",
      "Percentage",
      "Profit & Loss",
      "Mixtures & Alligation",
      "Permutation & Combination",
      "Time & Distance",
      "Probability",
      "Partnership",
      "Pipes & Cistern"
    ],
    generalAwareness: [
      "Static GK",
      "Current events across the world",
      "International and National organisations and their headquarters"
    ],
    financialAwareness: [
      "Financial knowledge",
      "Economic terms",
      "Financial institutions",
      "Financial news",
      "Economic growth and development"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bank Recruitment Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to Banking Career Opportunities</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Exam Introduction */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('introduction')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaUniversity className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
              </div>
              {expandedSections.includes('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('introduction') && (
              <div className="mt-6 text-gray-600 leading-relaxed">
                <p>
                  Bank recruitment exams are conducted by various public sector banks and financial institutions to recruit candidates for positions like Clerk and Probationary Officer (PO). These exams are highly competitive and offer excellent career opportunities in the banking sector. The exam tests candidates' knowledge in English, Reasoning, Mathematics, General Awareness, and Financial Awareness, ensuring they have the necessary skills for banking operations.
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
                  <FaGraduationCap className="w-6 h-6" />
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
                      <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                        {item.category === 'Language Proficiency' && <FaLanguage className="w-4 h-4 mr-2" />}
                        {item.category.includes('Age') && <FaCalendarAlt className="w-4 h-4 mr-2" />}
                        {item.category === 'Educational Qualification' && <FaGraduationCap className="w-4 h-4 mr-2" />}
                        {item.category === 'Nationality' && <FaUsers className="w-4 h-4 mr-2" />}
                        {item.category}
                      </h3>
                      <p className="text-gray-600">{item.requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Age Relaxation */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('age-relaxation')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaCalendarAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Age Relaxation</h2>
              </div>
              {expandedSections.includes('age-relaxation') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('age-relaxation') && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 rounded-lg">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Age Relaxation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ageRelaxationData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="border border-gray-300 px-4 py-3 font-medium text-blue-900">{item.category}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-600">{item.relaxation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Syllabus */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('syllabus')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
              </div>
              {expandedSections.includes('syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('syllabus') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* English */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <FaBook className="w-5 h-5 mr-2" />
                      English
                    </h3>
                    <ul className="space-y-2">
                      {syllabusData.english.map((topic, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reasoning */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <FaBullseye className="w-5 h-5 mr-2" />
                      Reasoning
                    </h3>
                    <ul className="space-y-2">
                      {syllabusData.reasoning.map((topic, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mathematics */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <FaCalculator className="w-5 h-5 mr-2" />
                      Mathematics
                    </h3>
                    <ul className="space-y-2">
                      {syllabusData.mathematics.map((topic, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* General Awareness */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <FaAward className="w-5 h-5 mr-2" />
                      General Awareness
                    </h3>
                    <ul className="space-y-2">
                      {syllabusData.generalAwareness.map((topic, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Financial Awareness */}
                  <div className="bg-gray-50 rounded-lg p-6 lg:col-span-2">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <FaRupeeSign className="w-5 h-5 mr-2" />
                      Financial Awareness
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {syllabusData.financialAwareness.map((topic, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUniversity className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Banking Career</h3>
              <p className="text-sm opacity-90">Prestigious positions in public sector banks</p>
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
                <FaLanguage className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Regional Language</h3>
              <p className="text-sm opacity-90">Knowledge of local language preferred</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaCalendarAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Age Flexibility</h3>
              <p className="text-sm opacity-90">Age relaxation for reserved categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Calculator icon component since it's not in react-icons/fa
const FaCalculator = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2H7M7 4H17V8H7V4M7 10H10V13H7V10M12 10H15V13H12V10M17 10V13H19V10H17M7 15H10V18H7V15M12 15H15V18H12V15M17 15V18H19V15H17Z"/>
  </svg>
);

export default BankExamPageAgain;