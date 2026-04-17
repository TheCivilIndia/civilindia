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
  FaClipboardList,
  FaUserTie
} from 'react-icons/fa';

const UPPCSExamPage = () => {
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
      title: "Preliminary Examination",
      details: [
        "Paper 1: General Studies I - 150 questions, 200 marks",
        "Paper 2: General Studies II (CSAT) - 100 questions, 200 marks (Qualifying)",
        "Marking: +1.33 for correct answers, -1/3 for incorrect answers",
        "Language: Both Hindi and English (English version preferred)",
        "Merit determination based on General Studies Paper I only",
        "Minimum 33% required in CSAT to qualify"
      ]
    },
    {
      title: "Main Examination",
      details: [
        "8 Papers: General Hindi (150 marks), Essay (150 marks)",
        "6 General Studies Papers (200 marks each)",
        "Total Marks: 1500",
        "Time Duration: 3 hours per paper",
        "Language: English, Hindi, or Urdu",
        "Morning Session: 9:30 AM to 12:30 PM",
        "Afternoon Session: 2:00 PM to 5:00 PM"
      ]
    },
    {
      title: "Interview/Personality Test",
      details: [
        "Total Marks: 100",
        "Conducted by board members",
        "Assessment of Aptitude, Personality, Character",
        "Communication skills evaluation",
        "Final merit list based on Mains + Interview marks",
        "Tests qualities required for civil service"
      ]
    }
  ];

  const positionsOffered = [
    "Deputy Collector",
    "Deputy Superintendent of Police (DSP)",
    "Assistant Regional Transport Officer",
    "Block Development Officer",
    "Block Education Officer"
  ];

  const mainsSubjects = [
    { subject: "General Hindi", marks: 150, type: "Conventional" },
    { subject: "Essay", marks: 150, type: "Conventional" },
    { subject: "General Studies (First Paper)", marks: 200, type: "Conventional" },
    { subject: "General Studies (Second Paper)", marks: 200, type: "Conventional" },
    { subject: "General Studies (Third Paper)", marks: 200, type: "Conventional" },
    { subject: "General Studies (Fourth Paper)", marks: 200, type: "Conventional" },
    { subject: "General Studies (Fifth Paper) - Uttar Pradesh", marks: 200, type: "Conventional" },
    { subject: "General Studies (Sixth Paper) - Uttar Pradesh", marks: 200, type: "Conventional" }
  ];

  const prelimsStructure = [
    {
      paper: "Paper 1: General Studies I",
      questions: "150 Questions",
      marks: "200 Marks",
      details: "Merit determination paper"
    },
    {
      paper: "Paper 2: General Studies II (CSAT)",
      questions: "100 Questions", 
      marks: "200 Marks",
      details: "Qualifying nature (33% minimum)"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UPPCS Examination</h1>
          <p className="text-xl md:text-2xl opacity-90">Uttar Pradesh Provincial Civil Services</p>
          <p className="text-lg opacity-80 mt-2">Gateway to Administrative Services in Uttar Pradesh</p>
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
                <p className="mb-4">
                  UPPCS (Uttar Pradesh Provincial Civil Services) exam is conducted by UPPSC (Uttar Pradesh Public Service Commission) for recruitment in various Administrative Services in Uttar Pradesh to work with the Government of Uttar Pradesh. The exam is conducted annually in three phases and offers prestigious positions in the state administration.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Key Positions Offered:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {positionsOffered.map((position, index) => (
                      <div key={index} className="flex items-center text-blue-800">
                        <FaCheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        {position}
                      </div>
                    ))}
                  </div>
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
                <h2 className="text-2xl font-bold text-gray-800">Three-Stage Exam Process</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {examStages.map((stage, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <FaCheckCircle className="w-5 h-5 mr-2" />
                        {stage.title}
                      </h3>
                      <ul className="space-y-2">
                        {stage.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-600 flex items-start text-sm">
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

        {/* Preliminary Exam Structure */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('prelims')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Preliminary Examination Structure</h2>
              </div>
              {expandedSections.includes('prelims') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('prelims') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {prelimsStructure.map((paper, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-blue-900 mb-3">{paper.paper}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Questions:</span>
                          <span className="font-semibold">{paper.questions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Marks:</span>
                          <span className="font-semibold">{paper.marks}</span>
                        </div>
                        <div className="text-sm text-blue-800 mt-2">{paper.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Preliminary exam marks are NOT added to final score</li>
                    <li>• Merit determination based on General Studies Paper I only</li>
                    <li>• Both papers are conducted on the same day</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Examination Structure */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('mains')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaClipboardList className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Main Examination Structure</h2>
              </div>
              {expandedSections.includes('mains') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('mains') && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Subject</th>
                        <th className="border border-gray-300 px-4 py-3 text-center">Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-center">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mainsSubjects.map((subject, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="border border-gray-300 px-4 py-3">{subject.subject}</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">{subject.type}</td>
                          <td className="border border-gray-300 px-4 py-3 text-center font-semibold">{subject.marks}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-100 font-bold">
                        <td className="border border-gray-300 px-4 py-3">Total Marks</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-blue-900">1500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Examination Timings:</h4>
                    <div className="text-sm text-blue-800">
                      <div>Morning Session: 9:30 AM to 12:30 PM</div>
                      <div>Afternoon Session: 2:00 PM to 5:00 PM</div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Important Details:</h4>
                    <div className="text-sm text-green-800">
                      <div>• Each paper: 3 hours duration</div>
                      <div>• Language: English/Hindi/Urdu</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Interview Process */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('interview')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaUserTie className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Interview/Personality Test</h2>
              </div>
              {expandedSections.includes('interview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('interview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-4">Interview Details</h3>
                    <ul className="space-y-2 text-purple-800">
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                        Total Marks: 100
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                        Conducted by Board Members
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                        Assessment of Career Suitability
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-4">Assessment Areas</h3>
                    <ul className="space-y-2 text-orange-800">
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">•</span>
                        Aptitude & Personality
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">•</span>
                        Character Assessment
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">•</span>
                        Communication Skills
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">•</span>
                        Civil Service Qualities
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-red-800">
                    <strong>Final Merit:</strong> The merit list is prepared based on aggregate marks obtained in Main Examination and Interview.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">UPPCS Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Three-Stage Process</h3>
              <p className="text-sm opacity-90">Prelims → Mains → Interview</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Prestigious Posts</h3>
              <p className="text-sm opacity-90">Deputy Collector, DSP & More</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaFileAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Comprehensive Syllabus</h3>
              <p className="text-sm opacity-90">8 Papers in Mains Exam</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">State Administration</h3>
              <p className="text-sm opacity-90">Serve Uttar Pradesh Government</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPPCSExamPage;