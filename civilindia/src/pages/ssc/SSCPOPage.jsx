import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  FaRunning,
  FaUserMd
} from 'react-icons/fa';

const SSCCPOPage = () => {
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
      title: "Paper 1 (Tier I)",
      icon: <FaFileAlt className="w-5 h-5 mr-2" />,
      details: [
        "Mode: Computer-Based Examination (CBE)",
        "Type: Objective Multiple Choice Questions",
        "Sections: General Intelligence & Reasoning, General Knowledge & General Awareness, Quantitative Aptitude, and English Comprehension",
        "Duration: As per SSC guidelines",
        "Qualifying nature exam for next stage"
      ]
    },
    {
      title: "Physical Endurance Test/Physical Standard Test (PET/PST)",
      icon: <FaRunning className="w-5 h-5 mr-2" />,
      details: [
        "Physical fitness assessment for qualified candidates",
        "Activities may include: Long jump, High jump, Shot put, and Running",
        "Standards set as per respective force requirements",
        "Mandatory to qualify for next stage"
      ]
    },
    {
      title: "Paper 2 (Tier II)",
      icon: <FaFileAlt className="w-5 h-5 mr-2" />,
      details: [
        "Mode: Computer-Based Examination (CBE)",
        "Subject: English Language and Comprehension",
        "Questions: 200 multiple-choice questions",
        "Only for candidates who qualify PET/PST"
      ]
    },
    {
      title: "Detailed Medical Examination",
      icon: <FaUserMd className="w-5 h-5 mr-2" />,
      details: [
        "Comprehensive medical fitness test",
        "Conducted for final qualified candidates",
        "Standards as per respective Central Armed Police Forces",
        "Final selection depends on medical fitness"
      ]
    }
  ];

  const eligibilityData = [
    { 
      category: "Educational Qualification", 
      requirement: "Bachelor's degree from a recognized university" 
    },
    { 
      category: "Age Limit", 
      requirement: "20-25 years (with age relaxations for reserved categories)" 
    },
    { 
      category: "Nationality", 
      requirement: "Indian citizen" 
    },
    { 
      category: "Physical Standards", 
      requirement: "As per respective Central Armed Police Forces norms" 
    }
  ];

  const recruitingForces = [
    { force: "BSF", fullName: "Border Security Force" },
    { force: "CISF", fullName: "Central Industrial Security Force" },
    { force: "CRPF", fullName: "Central Reserve Police Force" },
    { force: "ITBP", fullName: "Indo-Tibetan Border Police" },
    { force: "SSB", fullName: "Sashastra Seema Bal" },
    { force: "Delhi Police", fullName: "Delhi Police (Sub-Inspector posts)" }
  ];

  const paperPattern = [
    {
      paper: "Paper I (Tier I)",
      subjects: [
        "General Intelligence & Reasoning",
        "General Knowledge & General Awareness", 
        "Quantitative Aptitude",
        "English Comprehension"
      ]
    },
    {
      paper: "Paper II (Tier II)", 
      subjects: [
        "English Language and Comprehension (200 Questions)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
           <Helmet>
  {/* Primary Meta Tags */}
  <title>SSC CPO Exam 2025 Coaching | Eligibility, Pattern & Preparation Guide</title>
  <meta
    name="description"
    content="Prepare for SSC CPO Exam 2025 with expert guidance. Get details on eligibility, selection process, exam pattern, PET/PST, medical test, syllabus, and career opportunities in Delhi Police & CAPFs."
  />
  <meta
    name="keywords"
    content="SSC CPO exam 2025, SSC CPO coaching, SSC CPO eligibility, SSC CPO syllabus, SSC CPO selection process, SSC CPO paper pattern, Delhi Police SI exam, CAPF Sub Inspector exam, SSC CPO preparation"
  />
  <link
    rel="canonical"
    href="https://www.thecivilindia.in/career/ssc/cpo-exam"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="SSC CPO Exam 2025 Coaching | Eligibility, Pattern & Preparation Guide"
  />
  <meta
    property="og:description"
    content="Comprehensive guide to SSC CPO Exam 2025 - Eligibility, Selection Process, Exam Pattern, PET/PST, Medical Tests & Career in Delhi Police and CAPFs."
  />
  <meta
    property="og:url"
    content="https://www.thecivilindia.in/career/ssc/cpo-exam"
  />
  <meta
    property="og:image"
    content="https://www.thecivilindia.in/images/ssc-cpo-banner.jpg"
  />
  <meta property="og:site_name" content="Civil India" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="SSC CPO Exam 2025 | Eligibility, Syllabus & Preparation"
  />
  <meta
    name="twitter:description"
    content="Get expert SSC CPO 2025 preparation tips. Learn about eligibility, exam pattern, PET/PST, medical test & career opportunities in Delhi Police & CAPFs."
  />
  <meta
    name="twitter:image"
    content="https://www.thecivilindia.in/images/ssc-cpo-banner.jpg"
  />
  <meta name="twitter:site" content="@CivilIndia" />

  {/* Structured Data: Course Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "SSC CPO Exam Coaching 2025",
    "description": "Civil India provides expert coaching and preparation for SSC CPO Exam 2025, covering eligibility, exam pattern, PET/PST, medical test, and syllabus.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Civil India",
      "url": "https://www.thecivilindia.in"
    }
  }
  `}</script>

  {/* Structured Data: FAQ Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the SSC CPO Exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The SSC CPO (Central Police Organization) Exam is conducted for recruitment of Sub-Inspectors in Delhi Police and various CAPFs like BSF, CISF, CRPF, ITBP, and SSB."
        }
      },
      {
        "@type": "Question",
        "name": "What is the eligibility for SSC CPO 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Candidates must hold a bachelor's degree, be aged 20-25 years, and meet physical and medical standards set by the respective forces."
        }
      },
      {
        "@type": "Question",
        "name": "What is the selection process for SSC CPO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The selection process includes Paper I, Physical Endurance/Standard Test (PET/PST), Paper II, and a detailed medical examination."
        }
      },
      {
        "@type": "Question",
        "name": "Which forces recruit through SSC CPO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Forces include Delhi Police, BSF, CISF, CRPF, ITBP, and SSB."
        }
      }
    ]
  }
  `}</script>
</Helmet>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC CPO Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Central Police Organization Recruitment</p>
          <p className="text-lg opacity-80 mt-2">Gateway to Central Armed Police Forces & Delhi Police</p>
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
                  The SSC CPO (Central Police Organization) exam is a Central-level recruitment exam conducted by the Staff Selection Commission (SSC) for Sub-Inspectors (SI) positions in Delhi Police and various Central Armed Police Forces (CAPFs) including BSF, CISF, CRPF, ITBP, and SSB.
                </p>
                <p>
                  This prestigious examination offers opportunities to serve the nation in various security and police organizations. The selection process is rigorous and involves multiple stages including written tests, physical fitness assessments, and medical examinations to ensure only the most capable candidates are selected.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recruiting Forces */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('forces')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaShieldAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Recruiting Organizations</h2>
              </div>
              {expandedSections.includes('forces') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('forces') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recruitingForces.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{item.force}</h3>
                      <p className="text-gray-600 text-sm">{item.fullName}</p>
                    </div>
                  ))}
                </div>
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
                <h2 className="text-2xl font-bold text-gray-800">Selection Process</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {examStages.map((stage, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        {stage.icon}
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

        {/* Exam Pattern */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('pattern')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaCheckCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Pattern</h2>
              </div>
              {expandedSections.includes('pattern') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('pattern') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paperPattern.map((paper, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">{paper.paper}</h3>
                      <ul className="space-y-2">
                        {paper.subjects.map((subject, subjectIndex) => (
                          <li key={subjectIndex} className="text-gray-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> The SSC CPO exam consists of a two-tier written examination followed by PET/PST and medical examination.
                  </p>
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

        {/* Important Information */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-900 text-white p-2 rounded-lg">
                <FaFileAlt className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Important Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Physical Requirements</h3>
                <p className="text-blue-700 text-sm">
                  Candidates must meet physical standards as prescribed by respective Central Armed Police Forces. This includes height, chest measurements, and physical fitness criteria.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-green-800 mb-2">Medical Standards</h3>
                <p className="text-green-700 text-sm">
                  A detailed medical examination is conducted to ensure candidates meet the health standards required for service in Central Armed Police Forces.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-800">
                  <strong>Note:</strong> For complete and updated information, please refer to the official SSC notification and website.
                </p>
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
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multi-Stage Process</h3>
              <p className="text-sm opacity-90">Written + Physical + Medical</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Central Forces</h3>
              <p className="text-sm opacity-90">BSF, CISF, CRPF, ITBP, SSB</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Prestigious Career</h3>
              <p className="text-sm opacity-90">Sub-Inspector positions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">National Service</h3>
              <p className="text-sm opacity-90">Serve the nation with pride</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCCPOPage;
