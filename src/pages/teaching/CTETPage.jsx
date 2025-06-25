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

const CTETUPTETPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const examPapers = [
    {
      title: "Paper 1 (Primary Level - Classes I to V)",
      subjects: [
        { name: "Child Development & Pedagogy", questions: 30, marks: 30 },
        { name: "Language I (Hindi/English/Sanskrit)", questions: 30, marks: 30 },
        { name: "Language II (Hindi/English/Sanskrit)", questions: 30, marks: 30 },
        { name: "Mathematics", questions: 30, marks: 30 },
        { name: "Environmental Studies", questions: 30, marks: 30 }
      ],
      total: { questions: 150, marks: 150, duration: "2.5 hours" }
    },
    {
      title: "Paper 2 (Elementary Level - Classes VI to VIII)",
      subjects: [
        { name: "Child Development & Pedagogy", questions: 30, marks: 30 },
        { name: "Language I (Hindi/English/Sanskrit)", questions: 30, marks: 30 },
        { name: "Language II (Hindi/English/Sanskrit)", questions: 30, marks: 30 },
        { name: "Social Studies OR Science & Mathematics", questions: 60, marks: 60 }
      ],
      total: { questions: 150, marks: 150, duration: "2.5 hours" }
    }
  ];

  const paper1Qualifications = [
    "2 years Diploma in Elementary Education (minimum 50% marks) from recognized University/Institution",
    "2 years Diploma in Elementary Education (minimum 45% marks) for reserved categories",
    "2 years Diploma in Special Education (minimum 50% marks) from recognized University/Institution"
  ];

  const paper2Qualifications = [
    "Graduation (minimum 50% marks) + Bachelor in Education (B.Ed) from recognized University/Institution",
    "Graduation (minimum 45% marks) + Bachelor in Education (B.Ed) for reserved categories",
    "Senior Secondary (minimum 50% marks) + 4-year Bachelor in Elementary Education (B.El.Ed)",
    "Graduation (minimum 50% marks) + 1-year B.Ed (Special Education)"
  ];

  const cutoffMarks = [
    { category: "General", marks: 90 },
    { category: "OBC", marks: 82 },
    { category: "SC", marks: 82 },
    { category: "ST", marks: 82 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CTET & UPTET Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Central & UP Teacher Eligibility Test</p>
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
                  The Central Teacher Eligibility Test (CTET) and Uttar Pradesh Teacher Eligibility Test (UPTET) are essential qualifying examinations for 
                  aspiring teachers in India. CTET is conducted by the Central Board of Secondary Education (CBSE) for teaching positions in central government 
                  schools, while UPTET is conducted for teaching positions in Uttar Pradesh state schools. Both exams assess candidates' teaching aptitude 
                  and subject knowledge for primary and elementary levels.
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
                <h2 className="text-2xl font-bold text-gray-800">Exam Pattern</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {examPapers.map((paper, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <FaCheckCircle className="w-5 h-5 mr-2" />
                        {paper.title}
                      </h3>
                      <div className="space-y-3">
                        {paper.subjects.map((subject, subIndex) => (
                          <div key={subIndex} className="flex justify-between items-center bg-white p-3 rounded-md">
                            <span className="text-gray-700 text-sm">{subject.name}</span>
                            <div className="text-blue-600 font-semibold text-sm">
                              {subject.questions}Q / {subject.marks}M
                            </div>
                          </div>
                        ))}
                        <div className="bg-blue-100 p-3 rounded-md mt-4">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-blue-900">Total</span>
                            <div className="text-blue-900 font-bold">
                              {paper.total.questions}Q / {paper.total.marks}M
                            </div>
                          </div>
                          <div className="text-center mt-2 text-blue-800 font-semibold">
                            Duration: {paper.total.duration}
                          </div>
                        </div>
                      </div>
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
                <h2 className="text-2xl font-bold text-gray-800">Educational Qualifications</h2>
              </div>
              {expandedSections.includes('eligibility') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('eligibility') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Paper 1 Qualifications */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Paper 1 (Primary Level)</h3>
                    <ul className="space-y-3">
                      {paper1Qualifications.map((qualification, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-sm">{qualification}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Paper 2 Qualifications */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Paper 2 (Elementary Level)</h3>
                    <ul className="space-y-3">
                      {paper2Qualifications.map((qualification, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-sm">{qualification}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Age Criteria */}
                <div className="mt-6 bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <FaCalendarAlt className="w-5 h-5 mr-2" />
                    Age Criteria
                  </h3>
                  <div className="text-gray-700">
                    <p className="text-lg font-semibold">Minimum Age: 17 Years</p>
                    <p className="text-lg font-semibold">Maximum Age: No Upper Limit</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cut-off Marks */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('cutoff')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaBullseye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Cut-off Marks</h2>
              </div>
              {expandedSections.includes('cutoff') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('cutoff') && (
              <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cutoffMarks.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-bold text-blue-900 mb-2">{item.category}</h3>
                      <div className="text-2xl font-bold text-green-600">{item.marks}</div>
                      <p className="text-gray-600 text-sm mt-1">out of 150</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('career')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaAward className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Career Opportunities</h2>
              </div>
              {expandedSections.includes('career') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('career') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">CTET Qualified Candidates</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Central Government Schools (KVS, NVS)
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Union Territory Schools
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Private Schools (as per state requirements)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">UPTET Qualified Candidates</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        UP Government Schools
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        UP Aided Schools
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Private Schools in UP
                      </li>
                    </ul>
                  </div>
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
                <strong>Important:</strong> For complete and updated syllabus details, please refer to the official CBSE/UPBEB documents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://ctet.nic.in/WebInfo/File/GetFile?FileId=2&LangId=P"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                <FaFileAlt className="w-5 h-5 mr-2" />
                Download CTET Syllabus
              </a>
              <a
                href="https://upbasiceduboard.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                <FaFileAlt className="w-5 h-5 mr-2" />
                Visit UPTET Official Site
              </a>
            </div>
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
              <h3 className="font-semibold mb-2">2.5 Hours</h3>
              <p className="text-sm opacity-90">Exam Duration</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaBook className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">150 Questions</h3>
              <p className="text-sm opacity-90">Total Questions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">No Upper Age</h3>
              <p className="text-sm opacity-90">Age Limit</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Teaching Career</h3>
              <p className="text-sm opacity-90">Government & Private Schools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTETUPTETPage;