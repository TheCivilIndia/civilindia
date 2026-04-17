import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
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
  FaCogs,
  FaGraduationCap
} from 'react-icons/fa';

const SSCJEPage = () => {
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
      title: "Paper 1 (Objective Type)",
      details: [
        "Mode: Computer Based Test (CBT)",
        "Questions: Multiple-choice questions",
        "Subjects: General Intelligence & Reasoning, General Awareness, General Engineering (Civil/Electrical/Mechanical/Quantity Surveying & Contracts)",
        "Duration: As per official notification",
        "Negative Marking: 0.25 marks deducted for each incorrect answer"
      ]
    },
    {
      title: "Paper 2 (Descriptive Type)",
      details: [
        "Mode: Conventional (Pen & Paper)",
        "Type: Descriptive questions",
        "Only for shortlisted candidates from Paper 1",
        "Subject: Relevant Engineering discipline",
        "Negative Marking: 1 mark deducted for each incorrect answer",
        "Final selection based on Paper 2 performance"
      ]
    }
  ];

  const eligibilityData = [
    { 
      category: "Educational Qualification", 
      requirement: "Bachelor's degree or diploma in relevant engineering fields (Civil, Electrical, Mechanical, etc.)" 
    },
    { 
      category: "Age Limit - CPWD Posts", 
      requirement: "Maximum 32 years (Civil and Electrical)" 
    },
    { 
      category: "Age Limit - Other Departments", 
      requirement: "Maximum 30 years (BRO, MES, etc.)" 
    },
    { 
      category: "Age Relaxation", 
      requirement: "Provided for SC/ST, OBC, and other reserved categories as per government norms" 
    }
  ];

  const salaryData = [
    { 
      grade: "Pay Scale", 
      salary: "₹35,400 - ₹1,12,400", 
      description: "Level 6 of 7th Central Pay Commission" 
    },
    { 
      grade: "Grade Pay", 
      salary: "₹4,200", 
      description: "Additional grade pay as per government norms" 
    }
  ];

  const engineeringDisciplines = [
    {
      title: "Civil Engineering",
      icon: <FaCogs className="w-6 h-6" />,
      departments: ["CPWD", "Border Roads Organization (BRO)", "Military Engineer Services (MES)", "Central Water Commission"]
    },
    {
      title: "Electrical Engineering", 
      icon: <FaCogs className="w-6 h-6" />,
      departments: ["CPWD", "Central Electricity Authority", "Railway Electrification", "Power Grid Corporation"]
    },
    {
      title: "Mechanical Engineering",
      icon: <FaCogs className="w-6 h-6" />,
      departments: ["Indian Navy", "Indian Coast Guard", "Directorate General of Quality Assurance", "Various PSUs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
       {/* 🔹 SEO Helmet */}
      <Helmet>
        {/* Basic SEO */}
        <title>SSC JE Exam 2025 | Eligibility, Syllabus, Salary & Preparation</title>
        <meta
          name="description"
          content="Get complete details about SSC JE Exam 2025 including eligibility, syllabus, exam pattern, salary structure, and key highlights for Civil, Mechanical, and Electrical engineers."
        />
        <meta
          name="keywords"
          content="SSC JE 2025, SSC Junior Engineer exam, SSC JE syllabus, SSC JE eligibility, SSC JE salary, SSC JE Civil Engineering, SSC JE Mechanical Engineering, SSC JE Electrical Engineering"
        />
        <link
          rel="canonical"
          href="https://www.thecivilindia.in/ssc-je-exam"
        />

        {/* Open Graph (for Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="SSC JE Exam 2025 | Complete Guide" />
        <meta
          property="og:description"
          content="Know everything about SSC JE Exam 2025: eligibility, syllabus, exam pattern, salary, and preparation tips for engineering graduates."
        />
        <meta
          property="og:image"
          content="https://www.thecivilindia.in/images/ssc-je-banner.jpg"
        />
        <meta property="og:url" content="https://www.thecivilindia.in/ssc-je-exam" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SSC JE Exam 2025 | Eligibility & Syllabus" />
        <meta
          name="twitter:description"
          content="SSC JE 2025: Get syllabus, eligibility, salary structure, and exam details for Civil, Mechanical, and Electrical engineers."
        />
        <meta
          name="twitter:image"
          content="https://www.thecivilindia.in/images/ssc-je-banner.jpg"
        />

        {/* Extra for Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC JE Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to Government Engineering Careers</p>
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
                  The Staff Selection Commission (SSC) conducts the SSC JE exam to recruit Junior Engineers (JEs) in various engineering disciplines, including Civil, Electrical, and Mechanical, for the Indian government. It's a national-level exam with a two-stage selection process involving a written exam (Paper 1 & 2) and document verification. The SSC JE exam is considered a challenging yet rewarding opportunity for engineering graduates seeking government jobs.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Engineering Disciplines */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('disciplines')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Engineering Disciplines</h2>
              </div>
              {expandedSections.includes('disciplines') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('disciplines') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {engineeringDisciplines.map((discipline, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-900 text-white p-2 rounded-lg mr-3">
                          {discipline.icon}
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">{discipline.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {discipline.departments.map((dept, deptIndex) => (
                          <li key={deptIndex} className="text-gray-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {dept}
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

        {/* Salary Structure */}
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
                href="https://ssc.nic.in/Downloads/portal/english/Syllabus-JE%20Eamination.pdf"
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
              <p className="text-sm opacity-90">Paper 1 (Objective) & Paper 2 (Descriptive)</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Government Career</h3>
              <p className="text-sm opacity-90">Prestigious Junior Engineer positions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRupeeSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Attractive Salary</h3>
              <p className="text-sm opacity-90">₹35,400 - ₹1,12,400 + Grade Pay</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">Negative Marking</h3>
              <p className="text-red-700 text-sm">
                Paper 1: 0.25 marks deducted for each incorrect answer<br/>
                Paper 2: 1 mark deducted for each incorrect answer
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-semibold text-green-800 mb-2">Selection Process</h3>
              <p className="text-green-700 text-sm">
                Written Exam (Paper 1 & 2) followed by Document Verification for successful candidates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCJEPage;
