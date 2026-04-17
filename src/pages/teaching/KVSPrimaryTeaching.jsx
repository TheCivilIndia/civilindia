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

const KVSPrimaryTeacherPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const examStructure = [
    {
      subject: "General English",
      questions: 10,
      marks: 20,
      description: "Basic English language skills and comprehension"
    },
    {
      subject: "General Hindi",
      questions: 10,
      marks: 20,
      description: "Hindi language proficiency and understanding"
    },
    {
      subject: "General Knowledge & Current Affairs",
      questions: 10,
      marks: 20,
      description: "Current events and general awareness"
    },
    {
      subject: "Reasoning Ability",
      questions: 5,
      marks: 10,
      description: "Logical reasoning and analytical skills"
    },
    {
      subject: "Computer Literacy",
      questions: 5,
      marks: 10,
      description: "Basic computer knowledge and skills"
    }
  ];

  const educationPerspectives = [
    {
      topic: "Understanding the Learner",
      questions: 15,
      marks: 30,
      description: "Child development, psychology, and learning processes"
    },
    {
      topic: "Understanding Teaching Learning",
      questions: 15,
      marks: 30,
      description: "Teaching methodologies and learning theories"
    },
    {
      topic: "Creating Conducive Learning Environment",
      questions: 10,
      marks: 20,
      description: "Classroom management and learning atmosphere"
    },
    {
      topic: "School Organization & Leadership",
      questions: 10,
      marks: 20,
      description: "Educational administration and leadership skills"
    },
    {
      topic: "Perspectives in Education",
      questions: 10,
      marks: 20,
      description: "Educational philosophy and modern approaches"
    }
  ];

  const eligibilityOptions = [
    {
      title: "Option 1: Diploma Route",
      requirements: [
        "Senior Secondary (12th) with at least 50% marks",
        "2-year Diploma in Elementary Education",
        "Qualified in Central Teacher Eligibility Test (CTET Paper-I)"
      ]
    },
    {
      title: "Option 2: Bachelor's Degree Route",
      requirements: [
        "Senior Secondary (12th) with at least 50% marks",
        "4-year Bachelor of Elementary Education (B.El.Ed.)",
        "Qualified in Central Teacher Eligibility Test (CTET Paper-I)"
      ]
    },
    {
      title: "Option 3: Special Education",
      requirements: [
        "Senior Secondary (12th) with at least 50% marks",
        "2-year Diploma in Education (Special Education)",
        "Qualified in Central Teacher Eligibility Test (CTET Paper-I)"
      ]
    }
  ];

  const additionalRequirements = [
    "Age: 18-30 years",
    "Proficiency to teach through Hindi & English media",
    "Must have qualified CTET Paper-I conducted by Govt. of India"
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">KVS Primary Teacher Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to Teaching Excellence in Kendriya Vidyalayas</p>
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
                  The KVS (Kendriya Vidyalaya Sangathan) Primary Teacher exam is a prestigious recruitment examination for primary level teaching positions 
                  in Kendriya Vidyalayas across India. This comprehensive exam tests candidates on their subject knowledge, teaching aptitude, and 
                  educational perspectives. The exam consists of 180 questions to be completed in 180 minutes, covering various subjects including 
                  language proficiency, general awareness, educational psychology, and subject-specific knowledge in Mathematics and Environmental Studies (EVS).
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
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-900">180</div>
                      <div className="text-sm text-gray-600">Total Questions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">180</div>
                      <div className="text-sm text-gray-600">Total Marks</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">180</div>
                      <div className="text-sm text-gray-600">Minutes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">Online</div>
                      <div className="text-sm text-gray-600">Exam Mode</div>
                    </div>
                  </div>
                </div>

                {/* Language Proficiency Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <FaLanguage className="w-5 h-5 mr-2" />
                    Proficiency in Languages (40 Marks)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {examStructure.slice(0, 2).map((subject, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">{subject.subject}</h4>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{subject.questions} Questions</span>
                          <span>{subject.marks} Marks</span>
                        </div>
                        <p className="text-xs text-gray-500">{subject.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* General Awareness Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <FaCheckCircle className="w-5 h-5 mr-2" />
                    General Awareness, Reasoning & Computer (40 Marks)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {examStructure.slice(2, 5).map((subject, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">{subject.subject}</h4>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{subject.questions} Questions</span>
                          <span>{subject.marks} Marks</span>
                        </div>
                        <p className="text-xs text-gray-500">{subject.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Educational Perspectives Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('education')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Perspectives on Education and Leadership (60 Marks)</h2>
              </div>
              {expandedSections.includes('education') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('education') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {educationPerspectives.map((topic, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">{topic.topic}</h4>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{topic.questions} Questions</span>
                        <span>{topic.marks} Marks</span>
                      </div>
                      <p className="text-xs text-gray-600">{topic.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Subject Specific Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('subjects')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaBook className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Subject Specific (Math & EVS) - 80 Marks</h2>
              </div>
              {expandedSections.includes('subjects') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('subjects') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Mathematics</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">40 Questions</div>
                      <div className="text-lg font-semibold text-green-700">40 Marks</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">Primary level mathematics concepts, problem-solving, and mathematical reasoning</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Environmental Studies (EVS)</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">40 Questions</div>
                      <div className="text-lg font-semibold text-purple-700">40 Marks</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">Environmental awareness, science concepts, and social studies for primary level</p>
                  </div>
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
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Educational Qualification Options:</h3>
                  <div className="space-y-4">
                    {eligibilityOptions.map((option, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">{option.title}</h4>
                        <ul className="space-y-2">
                          {option.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-gray-600 flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Additional Requirements:</h4>
                  <ul className="space-y-2">
                    {additionalRequirements.map((req, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
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
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">KVS Primary Teacher</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">₹35,000 - ₹45,000</div>
                  <p className="text-gray-600 mb-4">Per month (approximately)</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Basic Pay</h4>
                      <p className="text-sm text-gray-600">As per 7th Pay Commission</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Allowances</h4>
                      <p className="text-sm text-gray-600">DA, HRA, TA & other benefits</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Job Security</h4>
                      <p className="text-sm text-gray-600">Government job with pension</p>
                    </div>
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
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">180 Minutes</h3>
              <p className="text-sm opacity-90">Complete exam duration</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">CTET Mandatory</h3>
              <p className="text-sm opacity-90">Must qualify CTET Paper-I</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaLanguage className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Bilingual Teaching</h3>
              <p className="text-sm opacity-90">Hindi & English proficiency required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Prestigious Career</h3>
              <p className="text-sm opacity-90">Teaching in KV schools nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-16">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2024 KVS Exam Portal. All rights reserved.</p>
    </div>
  </footer>
);

export default KVSPrimaryTeacherPage;