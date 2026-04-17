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
  FaCalendarAlt
} from 'react-icons/fa';

const DSSSBExamPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const examPositions = [
    {
      title: "PRT (Primary Teacher)",
      details: [
        "Primary level teaching positions",
        "Age Limit: Not specified in provided data",
        "Qualification: Details in eligibility section",
        "200 questions, 200 marks, 2 hours duration"
      ]
    },
    {
      title: "TGT (Trained Graduate Teacher)",
      details: [
        "Secondary level teaching positions",
        "Age Limit: 32 years",
        "Bachelor's Degree in relevant subject required",
        "Teaches classes VI to X"
      ]
    },
    {
      title: "PGT (Post Graduate Teacher)",
      details: [
        "Senior secondary level teaching positions",
        "Age Limit: 36 years",
        "Master's Degree in relevant subject required",
        "Teaches classes XI and XII"
      ]
    },
    {
      title: "Assistant Teacher",
      details: [
        "Assistant teaching positions",
        "Age Limit: 30 years",
        "Senior Secondary (Class 12th) with 45% marks",
        "Support role in educational institutions"
      ]
    }
  ];

  const eligibilityData = [
    { 
      category: "TGT", 
      age: "32 Years", 
      qualification: "Bachelor's Degree in relevant Subject" 
    },
    { 
      category: "PGT", 
      age: "36 Years", 
      qualification: "Master's Degree in relevant Subject" 
    },
    { 
      category: "Assistant Teacher", 
      age: "30 Years", 
      qualification: "Senior Secondary School (Class 12th) certificate or intermediate with 45% marks" 
    }
  ];

  const prtExamPattern = [
    { subject: "General Awareness", questions: 20, marks: 20 },
    { subject: "General Intelligence & Reasoning ability", questions: 20, marks: 20 },
    { subject: "Arithmetical & Numerical Ability", questions: 20, marks: 20 },
    { subject: "Hindi Language & Comprehension", questions: 20, marks: 20 },
    { subject: "English Language & Comprehension", questions: 20, marks: 20 },
    { subject: "Post Related Question", questions: 100, marks: 100 }
  ];

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 DSSSB Exam Guide. All rights reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DSSSB Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Delhi Subordinate Service Selection Board</p>
          <p className="text-lg mt-2 opacity-80">Gateway to Teaching Careers in Delhi Schools</p>
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
                <h2 className="text-2xl font-bold text-gray-800">About DSSSB</h2>
              </div>
              {expandedSections.includes('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('introduction') && (
              <div className="mt-6 text-gray-600 leading-relaxed">
                <p className="mb-4">
                  DSSSB (Delhi Subordinate Service Selection Board) is the recruiting body that conducts examinations for various teaching positions across Delhi schools. The board recruits candidates for different levels including Primary Teachers (PRT), Trained Graduate Teachers (TGT), Post Graduate Teachers (PGT), and Assistant Teachers.
                </p>
                <p>
                  These examinations are highly competitive and offer excellent career opportunities in the education sector within the Delhi government school system. The selection process is designed to ensure quality educators are recruited to maintain high educational standards in Delhi schools.
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
                <h2 className="text-2xl font-bold text-gray-800">Teaching Positions Overview</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {examPositions.map((position, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <FaGraduationCap className="w-5 h-5 mr-2" />
                        {position.title}
                      </h3>
                      <ul className="space-y-2">
                        {position.details.map((detail, detailIndex) => (
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
                <div className="space-y-4">
                  {eligibilityData.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="text-center md:text-left">
                          <h3 className="font-bold text-blue-900 text-lg">{item.category}</h3>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center md:justify-start">
                            <FaCalendarAlt className="w-4 h-4 mr-2 text-green-600" />
                            <span className="font-semibold text-green-600">{item.age}</span>
                          </div>
                        </div>
                        <div className="text-center md:text-left">
                          <p className="text-gray-600 text-sm">{item.qualification}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* PRT Exam Pattern */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('examPattern')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">PRT Exam Pattern</h2>
              </div>
              {expandedSections.includes('examPattern') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('examPattern') && (
              <div className="mt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-900">200</div>
                      <div className="text-sm text-gray-600">Total Questions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">200</div>
                      <div className="text-sm text-gray-600">Total Marks</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">2 Hours</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="px-6 py-3 text-left font-semibold">Subject</th>
                        <th className="px-6 py-3 text-center font-semibold">Questions</th>
                        <th className="px-6 py-3 text-center font-semibold">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prtExamPattern.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 text-gray-800">{item.subject}</td>
                          <td className="px-6 py-4 text-center font-semibold text-blue-900">{item.questions}</td>
                          <td className="px-6 py-4 text-center font-semibold text-green-600">{item.marks}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-100 font-bold">
                        <td className="px-6 py-4 text-blue-900">Total</td>
                        <td className="px-6 py-4 text-center text-blue-900">200</td>
                        <td className="px-6 py-4 text-center text-blue-900">200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-900 text-white p-2 rounded-lg">
                <FaCheckCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Important Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-bold text-yellow-800 mb-2">Exam Details</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Mode: Computer Based Test (CBT)</li>
                  <li>• Language: Hindi & English</li>
                  <li>• Negative Marking: As per DSSSB norms</li>
                  <li>• Selection: Merit-based</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-bold text-green-800 mb-2">Career Benefits</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Government job security</li>
                  <li>• Regular salary increments</li>
                  <li>• Pension benefits</li>
                  <li>• Medical facilities</li>
                </ul>
              </div>
            </div>
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
              <h3 className="font-semibold mb-2">4 Teaching Levels</h3>
              <p className="text-sm opacity-90">PRT, TGT, PGT, Assistant Teacher</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">2 Hours Duration</h3>
              <p className="text-sm opacity-90">200 questions in 120 minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Government Career</h3>
              <p className="text-sm opacity-90">Teaching positions in Delhi schools</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Age Flexibility</h3>
              <p className="text-sm opacity-90">Up to 36 years for PGT</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DSSSBExamPage;