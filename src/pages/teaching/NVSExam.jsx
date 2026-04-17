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
  FaGraduationCap,
  FaLanguage
} from 'react-icons/fa';

const NVSExamPage = () => {
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
      title: "TGT (Trained Graduate Teacher)",
      details: [
        "Maximum Age: 35 years",
        "Questions: 120 multiple-choice questions",
        "Sections: Reasoning Ability, General Awareness, ICT Knowledge, Teaching Aptitude, Domain Knowledge",
        "Time: Not specified in document",
        "Marks: 120 total marks",
        "Language Test: 30 marks (Hindi, English, Regional Language - 10 marks each)",
        "Total Marks: 150 marks",
        "Pass Criteria: 40% in each language section"
      ]
    },
    {
      title: "PGT (Post Graduate Teacher)",
      details: [
        "Maximum Age: 40 years",
        "Questions: 130 multiple-choice questions",
        "Sections: General Awareness, Reasoning Ability, ICT Knowledge, Teaching Aptitude, Domain Knowledge",
        "Marks: 130 total marks",
        "Language Test: 20 marks (English and Hindi)",
        "Total Marks: 150 marks",
        "Domain Knowledge: 80 marks (includes NEP 2022, pedagogy, case studies)"
      ]
    }
  ];

  const eligibilityTGT = [
    { 
      category: "Educational Qualification", 
      requirement: "Four years integrated degree from Regional College of Education (NCERT) OR Bachelor's Honours with 50% marks OR Bachelor's degree with 50% marks (3-year course)" 
    },
    { 
      category: "Professional Qualification", 
      requirement: "B.Ed. Degree" 
    },
    { 
      category: "Certification", 
      requirement: "Passed CTET Exam conducted by CBSE" 
    },
    { 
      category: "Language Competency", 
      requirement: "Competent to teach in Hindi and English Languages" 
    },
    { 
      category: "Age Limit", 
      requirement: "Maximum 35 years" 
    }
  ];

  const eligibilityPGT = [
    { 
      category: "Educational Qualification", 
      requirement: "Two years Integrated Post Graduate Degree from Regional College of Education (NCERT) OR Master's degree with 50% marks in concerned subject" 
    },
    { 
      category: "Professional Qualification", 
      requirement: "B.Ed degree (for those who have not undergone 4 years integrated course)" 
    },
    { 
      category: "Language Proficiency", 
      requirement: "English and Hindi Proficiency is mandatory" 
    },
    { 
      category: "Age Limit", 
      requirement: "Maximum 40 years" 
    }
  ];

  const syllabusStructure = [
    {
      section: "Reasoning Ability",
      tgtQuestions: 10,
      tgtMarks: 10,
      pgtQuestions: 20,
      pgtMarks: 20,
      description: "Logical reasoning, analytical ability, problem-solving skills"
    },
    {
      section: "General Awareness",
      tgtQuestions: 10,
      tgtMarks: 10,
      pgtQuestions: 10,
      pgtMarks: 10,
      description: "Current affairs, history, geography, science, sports, etc."
    },
    {
      section: "Knowledge of ICT",
      tgtQuestions: 10,
      tgtMarks: 10,
      pgtQuestions: 10,
      pgtMarks: 10,
      description: "Information and Communication Technology"
    },
    {
      section: "Teaching Aptitude",
      tgtQuestions: 10,
      tgtMarks: 10,
      pgtQuestions: 10,
      pgtMarks: 10,
      description: "Teaching methodology, educational psychology, pedagogy"
    },
    {
      section: "Domain Knowledge",
      tgtQuestions: 80,
      tgtMarks: 80,
      pgtQuestions: 80,
      pgtMarks: 80,
      description: "Subject-specific knowledge, NEP 2022, experiential pedagogy, case studies"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NVS Teacher Recruitment Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to Navodaya Vidyalaya Teaching Careers</p>
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
                  The NVS (Navodaya Vidyalaya Samiti) Teacher Recruitment Exam is conducted to recruit qualified teachers for Navodaya Vidyalayas across India. 
                  The exam offers positions for TGT (Trained Graduate Teacher) and PGT (Post Graduate Teacher) posts. NVS is known for providing quality education 
                  and this recruitment exam ensures that only the most competent candidates are selected to maintain the high standards of education in Navodaya schools.
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

        {/* TGT Eligibility Criteria */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('eligibility-tgt')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">TGT Eligibility Criteria</h2>
              </div>
              {expandedSections.includes('eligibility-tgt') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('eligibility-tgt') && (
              <div className="mt-6">
                <div className="space-y-4">
                  {eligibilityTGT.map((item, index) => (
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

        {/* PGT Eligibility Criteria */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('eligibility-pgt')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaUsers className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">PGT Eligibility Criteria</h2>
              </div>
              {expandedSections.includes('eligibility-pgt') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('eligibility-pgt') && (
              <div className="mt-6">
                <div className="space-y-4">
                  {eligibilityPGT.map((item, index) => (
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

        {/* Syllabus Structure */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('syllabus')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Syllabus Structure</h2>
              </div>
              {expandedSections.includes('syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('syllabus') && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="border border-gray-300 p-3 text-left">Section</th>
                        <th className="border border-gray-300 p-3 text-center">TGT Questions</th>
                        <th className="border border-gray-300 p-3 text-center">TGT Marks</th>
                        <th className="border border-gray-300 p-3 text-center">PGT Questions</th>
                        <th className="border border-gray-300 p-3 text-center">PGT Marks</th>
                        <th className="border border-gray-300 p-3 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {syllabusStructure.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 p-3 font-semibold text-blue-900">{item.section}</td>
                          <td className="border border-gray-300 p-3 text-center">{item.tgtQuestions}</td>
                          <td className="border border-gray-300 p-3 text-center">{item.tgtMarks}</td>
                          <td className="border border-gray-300 p-3 text-center">{item.pgtQuestions}</td>
                          <td className="border border-gray-300 p-3 text-center">{item.pgtMarks}</td>
                          <td className="border border-gray-300 p-3 text-gray-600">{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Language Competency Test Details:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded p-3">
                      <h5 className="font-semibold text-blue-900">TGT Language Test</h5>
                      <p className="text-sm text-gray-600">30 marks total (Hindi: 10 marks, English: 10 marks, Regional Language: 10 marks)</p>
                      <p className="text-sm text-yellow-700 font-medium">Pass Criteria: 40% in each language</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <h5 className="font-semibold text-blue-900">PGT Language Test</h5>
                      <p className="text-sm text-gray-600">20 marks total (Hindi: 10 marks, English: 10 marks)</p>
                      <p className="text-sm text-yellow-700 font-medium">General proficiency required</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Salary Information */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('salary')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaRupeeSign className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Salary & Benefits</h2>
              </div>
              {expandedSections.includes('salary') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('salary') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">TGT Position</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">₹35,400 - ₹1,12,400</div>
                    <p className="text-gray-600 text-sm">Pay Scale (Level 7)</p>
                    <p className="text-gray-600 text-sm mt-1">Plus Grade Pay & Allowances</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">PGT Position</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">₹47,600 - ₹1,51,100</div>
                    <p className="text-gray-600 text-sm">Pay Scale (Level 8)</p>
                    <p className="text-gray-600 text-sm mt-1">Plus Grade Pay & Allowances</p>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Additional Benefits:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Dearness Allowance (DA)</li>
                    <li>• House Rent Allowance (HRA)</li>
                    <li>• Transport Allowance</li>
                    <li>• Medical Benefits</li>
                    <li>• Provident Fund</li>
                    <li>• Gratuity</li>
                    <li>• Leave Travel Concession</li>
                  </ul>
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
                <FaGraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Quality Education</h3>
              <p className="text-sm opacity-90">Join prestigious Navodaya schools</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaLanguage className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Language Skills</h3>
              <p className="text-sm opacity-90">Hindi & English proficiency required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Government Job</h3>
              <p className="text-sm opacity-90">Secure career with benefits</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRupeeSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Attractive Salary</h3>
              <p className="text-sm opacity-90">Up to ₹1,51,100 pay scale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NVSExamPage;