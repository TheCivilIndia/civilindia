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
  FaClipboardCheck,
  FaTrain,
  FaWeight,
  FaStopwatch,
  FaCertificate,
  FaGraduationCap
} from 'react-icons/fa';

const RRBGroupDExamPage = () => {
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
      title: "Computer-Based Test (CBT-1)",
      details: [
        "Questions: 100 multiple-choice questions",
        "Duration: 90 minutes (120 minutes for PwD)",
        "Marks: 100 total marks (1 mark each)",
        "Negative Marking: 1/3 mark deduction for wrong answers",
        "Sections: General Science (25), Mathematics (25), General Intelligence & Reasoning (30), General Awareness & Current Affairs (20)",
        "Mode: Online Computer-Based Test",
        "Language Options: Multiple regional languages available"
      ]
    },
    {
      title: "Physical Efficiency Test (PET)",
      details: [
        "Male: Lift 35 kg weight for 100m in 2 minutes",
        "Female: Lift 20 kg weight for 100m in 2 minutes",
        "Male: Run 1000m in 4 min 15 sec",
        "Female: Run 1000m in 5 min 40 sec",
        "PWD candidates are exempted from PET",
        "Qualifying nature - must pass to proceed"
      ]
    },
    {
      title: "Document Verification & Medical",
      details: [
        "Original document verification",
        "Educational certificate verification",
        "Age proof and identity verification",
        "Medical examination as prescribed",
        "Final merit list preparation",
        "PWD candidates have separate medical standards"
      ]
    }
  ];

  const eligibilityData = [
    { category: "Age Limit", requirement: "18-36 years (Age relaxations for SC/ST/OBC categories)" },
    { category: "Educational Qualification", requirement: "10th Class/SSC or ITI or equivalent from recognized board" },
    { category: "Alternative Qualification", requirement: "National Apprenticeship Certificate (NAC) granted by NCVT" },
    { category: "Nationality", requirement: "Must be a citizen of India" }
  ];

  const examPattern = [
    {
      subject: "General Science",
      questions: 25,
      marks: 25,
      topics: ["Physics", "Chemistry", "Biology", "Environmental Science", "Scientific Research", "Applied Science", "Technology", "Inventions & Discoveries"]
    },
    {
      subject: "Mathematics",
      questions: 25,
      marks: 25,
      topics: ["Number Systems", "BODMAS", "Decimals & Fractions", "LCM & HCF", "Ratio & Proportion", "Percentages", "Mensuration", "Time & Work", "Time & Distance", "Simple & Compound Interest", "Profit & Loss", "Elementary Statistics", "Square Root", "Age Calculations", "Calendar & Clock", "Pipes & Cisterns"]
    },
    {
      subject: "General Intelligence & Reasoning",
      questions: 30,
      marks: 30,
      topics: ["Analogies", "Alphabetical & Number Series", "Coding & Decoding", "Mathematical Operations", "Relationships", "Syllogism", "Jumbling", "Venn Diagram", "Data Interpretation", "Conclusions & Decision Making", "Similarities & Differences", "Analytical Reasoning", "Classification", "Directions", "Statement-Arguments"]
    },
    {
      subject: "General Awareness & Current Affairs",
      questions: 20,
      marks: 20,
      topics: ["Current Affairs", "Indian History", "Culture & Geography", "Economic Scene", "General Polity", "Indian Constitution", "Sports", "Science & Technology", "Environmental Issues", "Famous Personalities", "Awards & Honors", "Books & Authors"]
    }
  ];

  const physicalRequirements = [
    {
      category: "Male Candidates",
      weightLifting: "35 kg for 100m in 2 minutes",
      running: "1000m in 4 min 15 sec",
      attempts: "One chance only",
      note: "Weight should not be put down during lifting"
    },
    {
      category: "Female Candidates",
      weightLifting: "20 kg for 100m in 2 minutes",
      running: "1000m in 5 min 40 sec",
      attempts: "One chance only",
      note: "Weight should not be put down during lifting"
    },
    {
      category: "PWD Candidates",
      weightLifting: "Exempted from PET",
      running: "Exempted from PET",
      attempts: "N/A",
      note: "Must pass prescribed medical examination"
    }
  ];

  const jobProfiles = [
    { position: "Track Maintainer", description: "Maintenance and repair of railway tracks" },
    { position: "Helper/Assistant", description: "Assisting in various railway operations" },
    { position: "Pointsman", description: "Operating railway signals and points" },
    { position: "Porter", description: "Handling passenger luggage and station duties" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
          <Helmet>
  {/* ✅ Page Title */}
  <title>RRB Group D Exam 2025 | Eligibility, Syllabus, Pattern & Coaching in Kanpur</title>

  {/* ✅ Meta Description */}
  <meta
    name="description"
    content="Prepare for RRB Group D Exam 2025 with Civil India, Kanpur’s top railway coaching. Get complete syllabus, eligibility, PET details, salary, job profiles, and exam pattern."
  />

  {/* ✅ Keywords */}
  <meta
    name="keywords"
    content="RRB Group D 2025, RRB Group D coaching Kanpur, RRB Group D syllabus, RRB Group D eligibility, Railway Group D PET, RRB Group D salary, RRB Group D exam pattern, Railway Recruitment Board Group D exam"
  />

  {/* ✅ Canonical URL */}
  <link rel="canonical" href="https://www.thecivilindia.in/career/railway/rrb-group-d-exam" />

  {/* ✅ Open Graph (for Facebook, LinkedIn) */}
  <meta property="og:title" content="RRB Group D Exam 2025 | Civil India Kanpur" />
  <meta
    property="og:description"
    content="Join Civil India for RRB Group D Exam 2025 preparation in Kanpur. Complete syllabus, eligibility, physical test details, salary, and job profiles explained."
  />
  <meta property="og:url" content="https://www.thecivilindia.in/career/railway/rrb-group-d-exam" />
  <meta property="og:image" content="https://www.thecivilindia.in/images/rrb-group-d-banner.jpg" />
  <meta property="og:type" content="website" />

  {/* ✅ Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="RRB Group D Exam 2025 | Civil India" />
  <meta name="twitter:description" content="RRB Group D 2025 exam details - syllabus, eligibility, PET, job profiles & coaching in Kanpur." />
  <meta name="twitter:image" content="https://www.thecivilindia.in/images/rrb-group-d-banner.jpg" />

  {/* ✅ Structured Data for SEO */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "RRB Group D Exam Coaching 2025",
    "description": "Civil India provides expert coaching for RRB Group D Exam 2025 in Kanpur. Includes CBT syllabus, PET test, eligibility, salary details, and job profiles.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Civil India",
      "url": "https://www.thecivilindia.in",
      "logo": "https://www.thecivilindia.in/images/logo.png"
    },
    "courseMode": "Offline/Online",
    "educationalCredentialAwarded": "RRB Group D Exam Preparation Certificate"
  }
  `}</script>
</Helmet>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RRB Group D Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Railway Recruitment Board Level 1 Posts</p>
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
                  The RRB Group D exam is a national-level recruitment examination conducted by the Railway Recruitment Boards (RRBs) 
                  to fill Level 1 positions in various departments of the Indian Railways. This exam is a popular choice for candidates 
                  who have completed their Class 10th education and are seeking employment in the railways. The examination covers various 
                  posts including Track Maintainer, Helper/Assistant, Pointsman, and Porter roles across different railway zones and divisions.
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
                        {index === 1 && <FaWeight className="w-5 h-5 mr-2" />}
                        {index === 2 && <FaCertificate className="w-5 h-5 mr-2" />}
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
                      <div className="text-2xl font-bold text-blue-900">100</div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {eligibilityData.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">{item.category}</h3>
                      <p className="text-gray-600">{item.requirement}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Educational Qualification Options:</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• 10th pass or ITI or equivalent qualification</li>
                    <li>• National Apprenticeship Certificate (NAC) granted by NCVT</li>
                    <li>• Any equivalent qualification recognized by the government</li>
                  </ul>
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
                        <th className="border border-gray-300 p-3 text-left">Section</th>
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
                          <td className="border border-gray-300 p-3 text-center">{index === 0 ? "90 minutes (120 for PwD)" : ""}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-100 font-bold">
                        <td className="border border-gray-300 p-3">Total</td>
                        <td className="border border-gray-300 p-3 text-center">100</td>
                        <td className="border border-gray-300 p-3 text-center">100</td>
                        <td className="border border-gray-300 p-3 text-center">90 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Negative marking: 1/3 mark deduction for incorrect answers</li>
                    <li>• Mode: Online Computer-Based Test</li>
                    <li>• Multiple language options available</li>
                    <li>• PWD candidates get extra 30 minutes (120 minutes total)</li>
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
                        {index === 3 && <FaBook className="w-5 h-5 mr-2" />}
                        {subject.subject} ({subject.questions} Questions)
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
                  <FaWeight className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Physical Efficiency Test (PET)</h2>
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
                        <th className="border border-gray-300 p-3 text-center">Weight Lifting</th>
                        <th className="border border-gray-300 p-3 text-center">Running</th>
                        <th className="border border-gray-300 p-3 text-center">Attempts</th>
                        <th className="border border-gray-300 p-3 text-center">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {physicalRequirements.map((req, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 p-3 font-semibold text-blue-900">{req.category}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.weightLifting}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.running}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.attempts}</td>
                          <td className="border border-gray-300 p-3 text-center text-sm">{req.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center">
                      <FaWeight className="w-5 h-5 mr-2" />
                      Weight Lifting Test
                    </h4>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Carry specified weight for 100 meters</li>
                      <li>• Complete within 2 minutes</li>
                      <li>• Weight must not be put down during test</li>
                      <li>• Only one attempt allowed</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center">
                      <FaStopwatch className="w-5 h-5 mr-2" />
                      Running Test
                    </h4>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Run 1000 meters within time limit</li>
                      <li>• Different time limits for male/female</li>
                      <li>• Tests physical endurance</li>
                      <li>• Must qualify to proceed further</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mt-6">
                  <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                    <FaShieldAlt className="w-5 h-5 mr-2" />
                    PWD Candidates
                  </h4>
                  <p className="text-purple-700 text-sm">
                    Persons with Disabilities are exempted from appearing in PET. After qualifying in the CBT, 
                    such candidates will have to pass the medical examination prescribed for Persons with Disabilities.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Job Profiles */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('job-profiles')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaAward className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Job Profiles & Posts</h2>
              </div>
              {expandedSections.includes('job-profiles') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('job-profiles') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {jobProfiles.map((job, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">{job.position}</h3>
                      <p className="text-gray-600 text-sm">{job.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold text-blue-800 mb-4">Level 1 Posts Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="text-blue-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Track Maintainer Grade IV
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Helper/Assistant in various departments
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Pointsman
                      </li>
                    </ul>
                    <ul className="text-blue-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Porter (Station/Mail/Express)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Gateman
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Other Level 1 positions as notified
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
              <h3 className="font-semibold mb-2">Railway Level 1</h3>
              <p className="text-sm opacity-90">Entry-level railway positions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaWeight className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Physical Test</h3>
              <p className="text-sm opacity-90">Weight lifting & running</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">10th Qualification</h3>
              <p className="text-sm opacity-90">Class 10th/ITI minimum</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Age Limit</h3>
              <p className="text-sm opacity-90">18-36 years with relaxations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RRBGroupDExamPage;
