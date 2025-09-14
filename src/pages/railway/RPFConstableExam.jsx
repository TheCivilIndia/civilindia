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
  FaShieldAlt,
  FaCalculator,
  FaBrain,
  FaGlobe,
  FaRunning,
  FaRuler,
  FaClipboardCheck
} from 'react-icons/fa';

const RPFConstableExamPage = () => {
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
        "Duration: 90 minutes",
        "Marks: 120 total marks (1 mark each)",
        "Negative Marking: 1/3 mark deduction for wrong answers",
        "Sections: General Awareness (50), Arithmetic (35), General Intelligence & Reasoning (35)",
        "Qualifying Marks: General - 35%, SC/ST - 30%",
        "Language Options: English, Hindi, or Native Language"
      ]
    },
    {
      title: "Physical Efficiency Test (PET)",
      details: [
        "Male: 1600m run in 5 min 45 sec",
        "Female: 800m run in 3 min 40 sec",
        "Male: Long jump 14 feet, High jump 4 feet",
        "Female: Long jump 9 feet, High jump 3 feet",
        "Tests physical fitness and endurance",
        "Qualifying nature - must pass to proceed"
      ]
    },
    {
      title: "Physical Measurement Test (PMT)",
      details: [
        "Male: Minimum height 165 cm (160 cm for SC/ST)",
        "Female: Minimum height 157 cm",
        "Male: Chest 80 cm (85 cm with expansion)",
        "Ensures candidates meet physical standards",
        "Conducted along with PET",
        "Document verification follows successful completion"
      ]
    }
  ];

  const eligibilityData = [
    { category: "Age Limit", requirement: "18-25 years (Age relaxations for SC/ST/OBC categories)" },
    { category: "Educational Qualification", requirement: "10th Class/SSC from recognized education board" },
    { category: "Nationality", requirement: "Must be a citizen of India" },
    { category: "Physical Standards", requirement: "Must meet height and physical fitness requirements" }
  ];

  const examPattern = [
    {
      subject: "General Awareness",
      questions: 50,
      marks: 50,
      topics: ["Current Affairs", "Indian History", "Art & Culture", "Geography", "Economics", "General Polity", "Indian Constitution", "Sports", "General Science"]
    },
    {
      subject: "Arithmetic",
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
      running: "1600m in 5 min 45 sec",
      longJump: "14 feet",
      highJump: "4 feet"
    },
    {
      category: "Female Candidates",
      height: "157 cm",
      chest: "Not applicable",
      running: "800m in 3 min 40 sec",
      longJump: "9 feet",
      highJump: "3 feet"
    }
  ];

  const salaryBenefits = [
    { position: "RPF Constable", payScale: "₹21,700 - ₹69,100", level: "Level 3", description: "7th Pay Commission" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
       <Helmet>
  <title>RPF Constable Exam 2025 | Eligibility, Syllabus, Salary & Pattern</title>
  <meta
    name="description"
    content="Prepare for RPF Constable Exam 2025 with complete details on eligibility, syllabus, CBT pattern, PET/PMT requirements, salary, benefits & selection process."
  />
  <meta
    name="keywords"
    content="RPF Constable Exam 2025, RPF Constable syllabus, RPF constable eligibility, RPF constable salary, RPF constable physical test, RPF constable pattern, Railway Constable recruitment, RPF constable 2025 notification"
  />
  <link rel="canonical" href="https://www.thecivilindia.in/career/rpf/constable-exam" />

  {/* Open Graph (Facebook & LinkedIn) */}
  <meta property="og:title" content="RPF Constable Exam 2025 | Civil India" />
  <meta
    property="og:description"
    content="Get expert guidance for RPF Constable Exam 2025. Check eligibility, exam syllabus, salary, CBT, PET & PMT details. Start preparing with Civil India."
  />
  <meta property="og:url" content="https://www.thecivilindia.in/career/rpf/constable-exam" />
  <meta property="og:image" content="https://www.thecivilindia.in/images/rpf-constable-banner.jpg" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="RPF Constable Exam 2025 | Eligibility, Syllabus, Salary" />
  <meta
    name="twitter:description"
    content="Know all about RPF Constable Exam 2025: Eligibility, Syllabus, CBT, PET/PMT, Salary & Benefits. Prepare with Civil India."
  />
  <meta name="twitter:image" content="https://www.thecivilindia.in/images/rpf-constable-banner.jpg" />

  {/* ✅ Structured Data for SEO */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "RPF Constable Exam Coaching 2025",
    "description": "Civil India offers RPF Constable exam preparation with full details on eligibility, syllabus, CBT exam, PET, PMT, salary, and recruitment process.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Civil India",
      "url": "https://www.thecivilindia.in"
    },
    "educationalLevel": "High School",
    "audience": {
      "@type": "Audience",
      "audienceType": "Aspiring Railway Protection Force Constables"
    }
  }
  `}</script>
</Helmet>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RPF Constable Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Railway Protection Force Constable Recruitment</p>
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
                  The Railway Protection Force (RPF) Constable exam is a prestigious recruitment process for police constable positions within the Indian Railways, 
                  conducted by the respective Railway Recruitment Boards (RRBs). This comprehensive examination ensures the selection of qualified candidates 
                  to maintain security and law enforcement across the Indian Railway network. The multi-stage selection process includes a Computer-Based Test (CBT), 
                  Physical Efficiency Test (PET), Physical Measurement Test (PMT), followed by document verification and medical examination.
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
                <h2 className="text-2xl font-bold text-gray-800">Selection Process Overview</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
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
                      <div className="text-2xl font-bold text-blue-900">3 Stages</div>
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
                      <h3 className="font-semibold text-blue-900 mb-2">{item.category}</h3>
                      <p className="text-gray-600">{item.requirement}</p>
                    </div>
                  ))}
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
                    <li>• Minimum qualifying marks: General - 35%, SC/ST - 30%</li>
                    <li>• Exam available in English, Hindi, or Native Language</li>
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
                      <li>• Tests physical fitness and endurance</li>
                      <li>• Running, long jump, and high jump events</li>
                      <li>• Must qualify in all events to proceed</li>
                      <li>• No second attempt allowed</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center">
                      <FaRuler className="w-5 h-5 mr-2" />
                      Physical Measurement Test (PMT)
                    </h4>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Height and chest measurement verification</li>
                      <li>• Relaxations for SC/ST candidates</li>
                      <li>• Conducted alongside PET</li>
                      <li>• Essential for final selection</li>
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
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">RPF Constable</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">₹21,700 - ₹69,100</div>
                  <p className="text-gray-600 text-sm">Pay Scale (Level 3) - 7th Pay Commission</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-4">Additional Benefits:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="text-green-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Dearness Allowance (DA)
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        House Rent Allowance (HRA)
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Transport Allowance
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Medical Benefits
                      </li>
                    </ul>
                    <ul className="text-green-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Provident Fund
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Gratuity
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Leave Travel Concession
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Free Railway Pass
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
              <h3 className="font-semibold mb-2">Railway Security</h3>
              <p className="text-sm opacity-90">Protect Indian Railway network</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRunning className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Physical Tests</h3>
              <p className="text-sm opacity-90">PET & PMT required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Simple Qualification</h3>
              <p className="text-sm opacity-90">10th Class minimum</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRupeeSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Good Salary</h3>
              <p className="text-sm opacity-90">Up to ₹69,100 + benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RPFConstableExamPage;
