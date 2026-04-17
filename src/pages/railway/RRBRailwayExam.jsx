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
  FaTrain,
  FaCalculator,
  FaBrain,
  FaFlask,
  FaGlobe,
  FaCog,
  FaLightbulb
} from 'react-icons/fa';

const RRBALPExamPage = () => {
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
      title: "CBT 1 (Computer Based Test 1)",
      details: [
        "Questions: 75 multiple-choice questions",
        "Duration: 60 minutes (1 hour)",
        "Marks: 75 total marks (1 mark each)",
        "Negative Marking: 1/3 mark deduction for wrong answers",
        "Sections: Mathematics (20), Reasoning (25), General Science (20), General Awareness (10)",
        "Qualifying Marks: UR & EWS - 40%, OBC (NCL) - 30%, SC - 30%, ST - 25%"
      ]
    },
    {
      title: "CBT 2 (Computer Based Test 2)",
      details: [
        "Questions: 175 total (Paper 1: 100, Paper 2: 75)",
        "Duration: 150 minutes total (Paper 1: 90 min, Paper 2: 60 min)",
        "Marks: 175 total marks",
        "Negative Marking: 1/3 mark deduction for wrong answers",
        "Part A Qualifying: UR & EWS - 40%, OBC (NCL) - 30%, SC - 30%, ST - 25%",
        "Part B Qualifying: 35% for all categories",
        "Only Part-A marks count for CBAT shortlisting"
      ]
    },
    {
      title: "CBAT (Computer Based Aptitude Test)",
      details: [
        "Conducted for candidates who clear CBT 2",
        "Tests psychometric and aptitude abilities",
        "Required for final selection process",
        "Followed by document verification and medical examination"
      ]
    }
  ];

  const cbt1Subjects = [
    {
      subject: "Mathematics",
      questions: 20,
      marks: 20,
      topics: ["Mensuration", "Number System", "BODMAS", "Decimals", "Fractions", "LCM & HCF", "Ratio & Proportion", "Percentages", "Time & Work", "Time & Distance", "Simple & Compound Interest", "Profit & Loss", "Algebra", "Geometry & Trigonometry", "Elementary Statistics", "Square Root", "Age Calculations", "Calendar & Clock", "Pipes & Cistern"]
    },
    {
      subject: "General Intelligence & Reasoning",
      questions: 25,
      marks: 25,
      topics: ["Analogies", "Alphabetical & Number Series", "Coding & Decoding", "Mathematical Operations", "Relationships", "Syllogism", "Jumbling", "Venn Diagram", "Data Interpretation & Sufficiency", "Conclusions & Decision Making", "Similarities & Differences", "Analytical Reasoning", "Classification", "Directions", "Statement-Arguments & Assumptions"]
    },
    {
      subject: "General Science",
      questions: 20,
      marks: 20,
      topics: ["Physics", "Chemistry", "Life Sciences"]
    },
    {
      subject: "General Awareness & Current Affairs",
      questions: 10,
      marks: 10,
      topics: ["Current Affairs", "Latest Awards", "Sports Events", "Railway Updates", "National Affairs", "Science & Technology", "Polity", "Economy", "Awards & Honors", "Art & Culture", "Sports", "Static GK", "Personalities"]
    }
  ];

  const cbt2Structure = [
    {
      paper: "Paper 1 (Part A)",
      subjects: ["Mathematics", "General Intelligence & Reasoning", "Basic Science & Engineering"],
      questions: 100,
      marks: 100,
      duration: "90 minutes",
      note: "Marks from this section count for CBAT shortlisting"
    },
    {
      paper: "Paper 2 (Part B)",
      subjects: ["Relevant Trade"],
      questions: 75,
      marks: 75,
      duration: "60 minutes",
      note: "Trade-specific questions based on chosen specialization"
    }
  ];

  const tradeSyllabi = [
    {
      trade: "Electrical",
      topics: ["Electrical India", "Rolls, Cables", "Transfers", "Three-Phase Motor Systems", "Light, Magnetism", "Fundamental Electric System", "Single Phase Motors", "Switches, Plugs and Electrical Connections"]
    },
    {
      trade: "Mechanical",
      topics: ["Dimensions", "Heat", "Engines", "Turbo Machinery", "Production Engineering", "Automation Engineering", "Kinetic Theory", "Strength of Materials", "Metal Handling", "Metallurgical", "Refrigerators & Air Conditioning", "Energy, Materials", "Energy Conservation", "Management", "Applied Mechanics"]
    },
    {
      trade: "Automobile",
      topics: ["Machine Design", "System Theory", "IC Engines", "Heat Transfers", "Thermodynamics", "Materials Applying Motion", "Power Plant Turbines and Boilers", "Metallurgical Production Technology"]
    },
    {
      trade: "Electronics & Communication",
      topics: ["Transistor", "Diodes", "Digital Electronics", "Networking and Industrial Electronics", "Electronic Tube", "Semi-Conductor Physics", "Robotic Radio Communication Systems", "Satellite Matters", "Computer & Micro Processor"]
    }
  ];

  const salaryBenefits = [
    { position: "Assistant Loco Pilot", payScale: "₹35,400 - ₹1,12,400", level: "Level 6", description: "7th Pay Commission" },
    { benefit: "Additional Allowances", details: ["Dearness Allowance (DA)", "House Rent Allowance (HRA)", "Transport Allowance", "Running Allowance", "Night Duty Allowance"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
          <Helmet>
  {/* Primary Meta Tags */}
  <title>RRB ALP Exam 2025 Coaching | Railway Assistant Loco Pilot Syllabus, Salary, Eligibility</title>
  <meta
    name="description"
    content="Prepare for RRB ALP (Assistant Loco Pilot) Exam 2025 with Civil India. Get complete syllabus, eligibility criteria, exam pattern, salary details, and preparation strategy for CBT 1, CBT 2 & CBAT stages."
  />
  <meta
    name="keywords"
    content="RRB ALP exam 2025, RRB ALP coaching Kanpur, Railway Assistant Loco Pilot syllabus, RRB ALP salary, RRB ALP eligibility, RRB ALP CBT 1 syllabus, RRB ALP CBT 2 exam pattern, RRB ALP psychometric test, railway jobs 2025"
  />
  <meta name="author" content="Civil India" />
  <link rel="canonical" href="https://www.thecivilindia.in/career/railway/rrb-alp-exam" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RRB ALP Exam 2025 | Railway Assistant Loco Pilot Coaching & Syllabus" />
  <meta
    property="og:description"
    content="Join Civil India for the best RRB ALP (Assistant Loco Pilot) coaching in Kanpur. Learn syllabus, eligibility, salary & exam pattern for CBT 1, CBT 2 & CBAT."
  />
  <meta property="og:url" content="https://www.thecivilindia.in/career/railway/rrb-alp-exam" />
  <meta property="og:image" content="https://www.thecivilindia.in/images/rrb-alp-banner.jpg" />
  <meta property="og:site_name" content="Civil India Coaching" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="RRB ALP Exam 2025 Coaching | Civil India" />
  <meta
    name="twitter:description"
    content="Civil India offers expert RRB ALP coaching with complete syllabus, exam stages, salary details, eligibility & preparation guidance."
  />
  <meta name="twitter:image" content="https://www.thecivilindia.in/images/rrb-alp-banner.jpg" />

  {/* ✅ Structured Data (Schema.org) */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "RRB ALP Exam Coaching 2025",
    "description": "Civil India provides expert coaching for Railway Recruitment Board (RRB) Assistant Loco Pilot Exam 2025. Includes complete syllabus, eligibility, salary, and exam preparation strategy.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Civil India",
      "url": "https://www.thecivilindia.in"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Railway Job Aspirants"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.thecivilindia.in/career/railway/rrb-alp-exam",
      "price": "Free",
      "priceCurrency": "INR",
      "eligibleRegion": {
        "@type": "Country",
        "name": "India"
      }
    }
  }
  `}</script>
</Helmet>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RRB ALP Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Railway Recruitment Board - Assistant Loco Pilot</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Exam Introduction */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('introduction')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaTrain className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Introduction</h2>
              </div>
              {expandedSections.includes('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('introduction') && (
              <div className="mt-6 text-gray-600 leading-relaxed">
                <p>
                  The RRB ALP (Railway Recruitment Board - Assistant Loco Pilot) exam is a prestigious recruitment process for Assistant Loco Pilot positions in Indian Railways. 
                  Conducted by the Railway Recruitment Board (RRB), this exam offers a gateway to one of the most sought-after careers in the Indian Railway system. 
                  The comprehensive selection process includes CBT 1, CBT 2, Computer-Based Aptitude Test (CBAT), followed by document verification and medical examination, 
                  ensuring only the most qualified candidates are selected for this responsible position.
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {examStages.map((stage, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
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

                {/* Quick Stats */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">Online</div>
                      <div className="text-sm text-gray-600">Mode of Exam</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">75+175</div>
                      <div className="text-sm text-gray-600">Questions</div>
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

        {/* CBT 1 Detailed Syllabus */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('cbt1-syllabus')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaCalculator className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">CBT 1 Detailed Syllabus</h2>
              </div>
              {expandedSections.includes('cbt1-syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('cbt1-syllabus') && (
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
                      {cbt1Subjects.map((subject, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 p-3 font-semibold text-blue-900">{subject.subject}</td>
                          <td className="border border-gray-300 p-3 text-center">{subject.questions}</td>
                          <td className="border border-gray-300 p-3 text-center">{subject.marks}</td>
                          <td className="border border-gray-300 p-3 text-center">{index === 0 ? "60 minutes" : ""}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-100 font-bold">
                        <td className="border border-gray-300 p-3">Total</td>
                        <td className="border border-gray-300 p-3 text-center">75</td>
                        <td className="border border-gray-300 p-3 text-center">75</td>
                        <td className="border border-gray-300 p-3 text-center">60 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Subject-wise Topics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cbt1Subjects.map((subject, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                        {index === 0 && <FaCalculator className="w-4 h-4 mr-2" />}
                        {index === 1 && <FaBrain className="w-4 h-4 mr-2" />}
                        {index === 2 && <FaFlask className="w-4 h-4 mr-2" />}
                        {index === 3 && <FaGlobe className="w-4 h-4 mr-2" />}
                        {subject.subject}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {subject.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="bg-white text-xs px-2 py-1 rounded text-gray-700 border">
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

        {/* CBT 2 Structure */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('cbt2-structure')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaCog className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">CBT 2 Exam Structure</h2>
              </div>
              {expandedSections.includes('cbt2-structure') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('cbt2-structure') && (
              <div className="mt-6">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="border border-gray-300 p-3 text-left">Paper</th>
                        <th className="border border-gray-300 p-3 text-left">Subjects</th>
                        <th className="border border-gray-300 p-3 text-center">Questions</th>
                        <th className="border border-gray-300 p-3 text-center">Marks</th>
                        <th className="border border-gray-300 p-3 text-center">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cbt2Structure.map((paper, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 p-3 font-semibold text-blue-900">{paper.paper}</td>
                          <td className="border border-gray-300 p-3">{paper.subjects.join(", ")}</td>
                          <td className="border border-gray-300 p-3 text-center">{paper.questions}</td>
                          <td className="border border-gray-300 p-3 text-center">{paper.marks}</td>
                          <td className="border border-gray-300 p-3 text-center">{paper.duration}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-100 font-bold">
                        <td className="border border-gray-300 p-3">Overall Total</td>
                        <td className="border border-gray-300 p-3">-</td>
                        <td className="border border-gray-300 p-3 text-center">175</td>
                        <td className="border border-gray-300 p-3 text-center">175</td>
                        <td className="border border-gray-300 p-3 text-center">150 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Part A Minimum Pass Percentage: UR & EWS - 40%, OBC (NCL) - 30%, SC - 30%, ST - 25%</li>
                    <li>• Part B Qualifying Marks: 35% for all categories</li>
                    <li>• Only marks from Part-A count for CBAT shortlisting</li>
                    <li>• Negative marking: 1/3 mark deduction for incorrect answers</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trade Specific Syllabus */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('trade-syllabus')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaLightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Trade Specific Syllabus (CBT 2 - Part B)</h2>
              </div>
              {expandedSections.includes('trade-syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('trade-syllabus') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tradeSyllabi.map((trade, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-bold text-blue-900 mb-4 text-lg border-b pb-2">{trade.trade}</h4>
                      <div className="space-y-2">
                        {trade.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-gray-700 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Candidates need to choose their trade specialization during application. 
                    The CBT 2 Part B will contain 75 questions (75 marks) specific to the chosen trade with 60 minutes duration.
                  </p>
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
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Assistant Loco Pilot</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">₹35,400 - ₹1,12,400</div>
                  <p className="text-gray-600 text-sm">Pay Scale (Level 6) - 7th Pay Commission</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-4">Additional Benefits & Allowances:</h4>
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
                    </ul>
                    <ul className="text-green-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Running Allowance
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Night Duty Allowance
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Medical Benefits & PF
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
                <FaTrain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Railway Career</h3>
              <p className="text-sm opacity-90">Join Indian Railways as ALP</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">3-Stage Process</h3>
              <p className="text-sm opacity-90">CBT 1, CBT 2, and CBAT</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaCog className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Trade Specific</h3>
              <p className="text-sm opacity-90">Multiple specializations available</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRupeeSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Attractive Package</h3>
              <p className="text-sm opacity-90">Up to ₹1,12,400 + allowances</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RRBALPExamPage;
