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
  FaShieldAlt,
  FaCalculator,
  FaBrain,
  FaGlobe,
  FaRunning,
  FaRuler,
  FaClipboardCheck,
  FaGraduationCap,
  FaStar
} from 'react-icons/fa';

const RPFSIExamPage = () => {
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
      title: "Computer-Based Test (CBT)",
      details: [
        "Questions: 120 multiple-choice questions",
        "Duration: 90 minutes (1 hour 30 minutes)",
        "Marks: 120 total marks (1 mark each)",
        "Negative Marking: 1/3 mark deduction for wrong answers",
        "Sections: General Awareness (50), Arithmetic (35), General Intelligence & Reasoning (35)",
        "Online and objective-type examination",
        "Graduate-level assessment"
      ]
    },
    {
      title: "Physical Efficiency Test (PET)",
      details: [
        "Male: 1600m run in 5 min 30 sec",
        "Female: 800m run in 3 min 35 sec",
        "Male: Long jump 14 feet, High jump 4 feet",
        "Female: Long jump 9 feet, High jump 3 feet",
        "Tests physical fitness and endurance",
        "Must qualify to proceed to next stage",
        "Includes running, long jump, and high jump tasks"
      ]
    },
    {
      title: "Physical Measurement Test (PMT)",
      details: [
        "Male: Minimum height 165 cm (160 cm for SC/ST)",
        "Female: Minimum height 157 cm",
        "Male: Chest 80 cm (85 cm with expansion)",
        "Ensures candidates meet prescribed physical standards",
        "Conducted alongside PET",
        "Essential for meeting eligibility requirements"
      ]
    }
  ];

  const eligibilityData = [
    { category: "Age Limit", requirement: "20-28 years (Age relaxations applicable for reserved categories)" },
    { category: "Educational Qualification", requirement: "Graduation from recognized university (Graduate-level requirement)" },
    { category: "Nationality", requirement: "Must be a citizen of India" },
    { category: "Physical Standards", requirement: "Must meet height, chest, and physical fitness requirements" }
  ];

  const examPattern = [
    {
      subject: "General Awareness",
      questions: 50,
      marks: 50,
      topics: ["Current Affairs", "Indian History", "Art & Culture", "Geography", "Economics", "General Polity", "Indian Constitution", "Sports", "General Science"]
    },
    {
      subject: "Arithmetic (Basic Arithmetics)",
      questions: 35,
      marks: 35,
      topics: ["Number Systems", "Whole Numbers", "Decimal and Fractions", "Relationships between Numbers", "Fundamental Arithmetical Operations", "Percentages", "Ratio and Proportion", "Averages", "Interest", "Discount", "Profit and Loss", "Tables and Graphs", "Time and Distance", "Mensuration"]
    },
    {
      subject: "General Intelligence & Reasoning",
      questions: 35,
      marks: 35,
      topics: ["Analogies", "Spatial Visualization", "Spatial Orientation", "Problem-Solving Analysis", "Decision Making", "Visual Memory", "Similarities & Differences", "Discriminating Observation", "Relationship Concepts", "Arithmetical Reasoning", "Classification of Verbal & Figure", "Arithmetic Number Series", "Syllogistic Reasoning", "Non-Verbal Series", "Coding & Decoding", "Statement Conclusion"]
    }
  ];

  const physicalRequirements = [
    {
      category: "Male Candidates",
      height: "165 cm (160 cm for SC/ST)",
      chest: "80 cm (85 cm with expansion)",
      running: "1600m in 5 min 30 sec",
      longJump: "14 feet",
      highJump: "4 feet"
    },
    {
      category: "Female Candidates",
      height: "157 cm",
      chest: "Not applicable",
      running: "800m in 3 min 35 sec",
      longJump: "9 feet",
      highJump: "3 feet"
    }
  ];

  const selectionProcess = [
    {
      stage: "Stage 1",
      title: "Computer Based Test (CBT)",
      description: "Initial screening test covering general awareness, arithmetic, and reasoning",
      icon: FaBook
    },
    {
      stage: "Stage 2",
      title: "Physical Efficiency Test (PET)",
      description: "Physical fitness assessment including running, long jump, and high jump",
      icon: FaRunning
    },
    {
      stage: "Stage 3",
      title: "Physical Measurement Test (PMT)",
      description: "Verification of height, chest measurements as per prescribed standards",
      icon: FaRuler
    },
    {
      stage: "Stage 4",
      title: "Document Verification",
      description: "Final verification of all required documents and certificates",
      icon: FaClipboardCheck
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RPF SI Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Railway Protection Force Sub-Inspector Recruitment</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Exam Introduction */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('introduction')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaShieldAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
              </div>
              {expandedSections.includes('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('introduction') && (
              <div className="mt-6 text-gray-600 leading-relaxed">
                <p>
                  The RPF SI (Railway Protection Force Sub-Inspector) recruitment is a comprehensive process conducted by the Ministry of Railways to hire qualified individuals for Sub-Inspector positions in Level 6 of the 7th CPC in RPF and RPSF. This graduate-level examination is designed to assess candidates' general intelligence, reasoning abilities, general awareness, and basic mathematical skills. The recruitment involves multiple stages including a Computer Based Test (CBT), Physical Efficiency Test (PET), Physical Measurement Test (PMT), followed by document verification to ensure only the most suitable candidates are selected for this prestigious position.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Selection Process Overview */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('overview')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaBullseye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Selection Process Overview</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {selectionProcess.map((process, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="bg-blue-900 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <process.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-sm font-bold text-blue-900 mb-2">{process.stage}</h3>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{process.title}</h4>
                      <p className="text-sm text-gray-600">{process.description}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {examStages.map((stage, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                        {index === 0 && <FaBook className="w-5 h-5 mr-2" />}
                        {index === 1 && <FaRunning className="w-5 h-5 mr-2" />}
                        {index === 2 && <FaRuler className="w-5 h-5 mr-2" />}
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

                {/* Quick Stats */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">120</div>
                      <div className="text-sm text-gray-600">Total Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">90 min</div>
                      <div className="text-sm text-gray-600">CBT Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">1/3</div>
                      <div className="text-sm text-gray-600">Negative Marking</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">4 Stages</div>
                      <div className="text-sm text-gray-600">Selection Process</div>
                    </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eligibilityData.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                        {item.category === "Age Limit" && <FaClock className="w-4 h-4 mr-2" />}
                        {item.category === "Educational Qualification" && <FaGraduationCap className="w-4 h-4 mr-2" />}
                        {item.category === "Nationality" && <FaGlobe className="w-4 h-4 mr-2" />}
                        {item.category === "Physical Standards" && <FaRunning className="w-4 h-4 mr-2" />}
                        {item.category}
                      </h3>
                      <p className="text-gray-600">{item.requirement}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
                  <p className="text-yellow-800 text-sm">
                    RPF SI is a graduate-level position requiring higher qualifications compared to Constable level. Candidates must also successfully pass both PET and PMT stages along with the written examination.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CBT Exam Pattern & Syllabus */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('cbt-pattern')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">CBT Exam Pattern & Syllabus</h2>
              </div>
              {expandedSections.includes('cbt-pattern') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('cbt-pattern') && (
              <div className="mt-6">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="border border-gray-300 p-3 text-left">Subject</th>
                        <th className="border border-gray-300 p-3 text-center">Questions</th>
                        <th className="border border-gray-300 p-3 text-center">Marks</th>
                        <th className="border border-gray-300 p-3 text-center">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examPattern.map((subject, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 p-3 font-semibold text-blue-900">{subject.subject}</td>
                          <td className="border border-gray-300 p-3 text-center">{subject.questions}</td>
                          <td className="border border-gray-300 p-3 text-center">{subject.marks}</td>
                          <td className="border border-gray-300 p-3 text-center">{index === 0 ? "90 minutes" : ""}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-100 font-bold">
                        <td className="border border-gray-300 p-3">Total</td>
                        <td className="border border-gray-300 p-3 text-center">120</td>
                        <td className="border border-gray-300 p-3 text-center">120</td>
                        <td className="border border-gray-300 p-3 text-center">90 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Negative marking: 1/3 mark deduction for incorrect answers</li>
                    <li>• Online and objective-type examination</li>
                    <li>• Graduate-level assessment covering three main sections</li>
                    <li>• CBT qualification is mandatory for PET/PMT stages</li>
                  </ul>
                </div>

                {/* Subject-wise Syllabus */}
                <div className="grid grid-cols-1 gap-6">
                  {examPattern.map((subject, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center text-lg">
                        {index === 0 && <FaGlobe className="w-5 h-5 mr-2" />}
                        {index === 1 && <FaCalculator className="w-5 h-5 mr-2" />}
                        {index === 2 && <FaBrain className="w-5 h-5 mr-2" />}
                        {subject.subject}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {subject.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="bg-white text-xs px-3 py-2 rounded-full text-gray-700 border border-gray-200">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Physical Requirements */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('physical-requirements')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaRunning className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Physical Requirements (PET & PMT)</h2>
              </div>
              {expandedSections.includes('physical-requirements') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('physical-requirements') && (
              <div className="mt-6">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="border border-gray-300 p-3 text-left">Category</th>
                        <th className="border border-gray-300 p-3 text-center">Height</th>
                        <th className="border border-gray-300 p-3 text-center">Chest</th>
                        <th className="border border-gray-300 p-3 text-center">Running</th>
                        <th className="border border-gray-300 p-3 text-center">Long Jump</th>
                        <th className="border border-gray-300 p-3 text-center">High Jump</th>
                      </tr>
                    </thead>
                    <tbody>
                      {physicalRequirements.map((req, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 p-3 font-semibold text-blue-900">{req.category}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.height}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.chest}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.running}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.longJump}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.highJump}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center">
                      <FaRunning className="w-5 h-5 mr-2" />
                      Physical Efficiency Test (PET)
                    </h4>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Tests physical fitness and endurance capabilities</li>
                      <li>• Includes running, long jump, and high jump tasks</li>
                      <li>• Must qualify in all events to proceed further</li>
                      <li>• Slightly better standards than Constable level</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center">
                      <FaRuler className="w-5 h-5 mr-2" />
                      Physical Measurement Test (PMT)
                    </h4>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Height and chest measurement verification</li>
                      <li>• Prescribed physical standards must be met</li>
                      <li>• Conducted alongside PET</li>
                      <li>• Relaxations available for SC/ST candidates</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Salary & Benefits */}
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
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2 flex items-center justify-center">
                    <FaStar className="w-6 h-6 mr-2" />
                    RPF Sub-Inspector (SI)
                  </h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">Level 6</div>
                  <p className="text-gray-600 text-sm">7th Pay Commission (7th CPC)</p>
                  <p className="text-blue-900 font-semibold mt-2">Higher pay scale than Constable level</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-4">Position Benefits:</h4>
                    <ul className="text-green-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Sub-Inspector rank in RPF/RPSF
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Level 6 pay scale (7th CPC)
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Higher responsibility and authority
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Better career progression opportunities
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-4">Standard Railway Benefits:</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Dearness Allowance (DA)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        House Rent Allowance (HRA)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Medical Benefits & Insurance
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Free Railway Pass & LTC
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Provident Fund & Gratuity
                      </li>
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
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Sub-Inspector Level</h3>
              <p className="text-sm opacity-90">Higher rank in RPF/RPSF</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Graduate Level</h3>
              <p className="text-sm opacity-90">Graduation required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRunning className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Physical Tests</h3>
              <p className="text-sm opacity-90">PET & PMT mandatory</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Level 6 Pay</h3>
              <p className="text-sm opacity-90">7th CPC benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPFSIExamPage;