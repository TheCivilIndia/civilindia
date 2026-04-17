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
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt
} from 'react-icons/fa';

const SSCCGLPage = () => {
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
      title: "Tier I - Preliminary Exam",
      details: [
        "Mode: Computer Based Test (CBT)",
        "Questions: 100 multiple-choice questions",
        "Sections: General Intelligence & Reasoning (25Q), General Awareness (25Q), Quantitative Aptitude (25Q), English Comprehension (25Q)",
        "Time: 60 minutes",
        "Marks: 200 total marks (2 marks per question)",
        "Nature: Qualifying exam - successful candidates proceed to Tier II"
      ]
    },
    {
      title: "Tier II - Mains Exam",
      details: [
        "Mode: Computer Based Test (CBT)",
        "Structure: Three sections with multiple papers",
        "Section I: Three papers with two modules each",
        "Section II: Only for Junior Statistical Officer (JSO) candidates",
        "Section III: Only for Assistant Audit Officer/Assistant Accounts Officer candidates",
        "Includes Data Entry Speed Test (15 minutes separate session)"
      ]
    }
  ];

  const eligibilityData = [
    { 
      category: "Nationality/Citizenship", 
      requirement: "Must be Indian citizens" 
    },
    { 
      category: "Age Limit", 
      requirement: "18 to 32 years" 
    },
    { 
      category: "Educational Qualification", 
      requirement: "Bachelor's degree from a recognized university" 
    },
    { 
      category: "Age Relaxation", 
      requirement: "SC/ST: 5 years, OBC: 3 years, Physically Handicapped: 5 years" 
    }
  ];

  const tierTwoDetails = [
    {
      section: "Section I",
      papers: [
        {
          paper: "Paper 1",
          modules: ["Mathematical Abilities", "Reasoning and General Intelligence"]
        },
        {
          paper: "Paper 2", 
          modules: ["English Language and Comprehension", "General Awareness"]
        },
        {
          paper: "Paper 3",
          modules: ["Computer Knowledge Module", "Data Entry Speed Test (15 mins separate session)"]
        }
      ]
    }
  ];

  const sscCGLPosts = [
    {
      post: "Assistant Audit Officer",
      department: "Indian Audit & Accounts Department under C&AG",
      classification: "Group 'B' Gazetted (Non-Ministerial)"
    },
    {
      post: "Assistant Accounts Officer", 
      department: "Indian Audit & Accounts Department under C&AG",
      classification: "Group 'B' Gazetted (Non-Ministerial)"
    },
    {
      post: "Assistant Section Officer",
      department: "Central Secretariat Service, Intelligence Bureau, Ministry of Railway, Ministry of External Affairs, AFHQ",
      classification: "Group 'B'"
    },
    {
      post: "Assistant",
      department: "Other Ministries/Departments/Organizations", 
      classification: "Group 'B'"
    },
    {
      post: "Inspector of Income Tax",
      department: "CBDT",
      classification: "Group 'C'"
    },
    {
      post: "Inspector (Central Excise)",
      department: "CBIC",
      classification: "Group 'B'"
    },
    {
      post: "Assistant Enforcement Officer",
      department: "Directorate of Enforcement, Department of Revenue",
      classification: "Group 'B'"
    },
    {
      post: "Sub Inspector",
      department: "Central Bureau of Investigation", 
      classification: "Group 'B'"
    },
    {
      post: "Inspector",
      department: "Central Bureau of Narcotics",
      classification: "Group 'B'"
    },
    {
      post: "Junior Statistical Officer",
      department: "M/o Statistics & Programme Implementation",
      classification: "Group 'B'"
    },
    {
      post: "Statistical Investigator Grade-II",
      department: "Registrar General of India",
      classification: "Group 'B'"
    },
    {
      post: "Auditor",
      department: "Offices under C&AG, CGDA",
      classification: "Group 'C'"
    },
    {
      post: "Accountant/Junior Accountant",
      department: "Other Ministry/Departments",
      classification: "Group 'C'"
    },
    {
      post: "Senior Secretariat Assistant/Upper Division Clerks",
      department: "Central Govt. Offices/Ministries other than CSCS cadres",
      classification: "Group 'C'"
    },
    {
      post: "Tax Assistant",
      department: "CBDT/CBIC",
      classification: "Group 'C'"
    },
    {
      post: "Upper Division Clerks",
      department: "Government Departments",
      classification: "Group 'C'"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>SSC CGL Exam 2025 Coaching | Civil India Kanpur</title>
        <meta
          name="description"
          content="Join Civil India, Kanpur’s best SSC CGL coaching institute for 2025. Get expert guidance, syllabus coverage, eligibility details, salary info, and preparation for SSC CGL Tier I & Tier II exams."
        />
        <meta
          name="keywords"
          content="SSC CGL 2025 coaching Kanpur, SSC CGL syllabus, SSC CGL eligibility, SSC CGL salary, SSC CGL preparation, SSC CGL Tier 1, SSC CGL Tier 2, SSC coaching Kanpur, SSC CGL posts"
        />
        <link rel="canonical" href="https://www.thecivilindia.in/career/ssc/cgl-exam" />

        {/* Open Graph */}
        <meta property="og:title" content="SSC CGL Coaching 2025 | Civil India Kanpur" />
        <meta
          property="og:description"
          content="Civil India offers expert SSC CGL coaching in Kanpur. Covers Tier I & II syllabus, eligibility, salary, posts, and government job guidance."
        />
        <meta property="og:url" content="https://www.thecivilindia.in/career/ssc/cgl-exam" />
        <meta property="og:image" content="https://www.thecivilindia.in/images/ssc-cgl-banner.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SSC CGL Exam 2025 Coaching | Civil India" />
        <meta
          name="twitter:description"
          content="Prepare for SSC CGL 2025 with Civil India. Expert coaching, complete syllabus, posts, salary, and eligibility details."
        />
        <meta name="twitter:image" content="https://www.thecivilindia.in/images/ssc-cgl-banner.jpg" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "SSC CGL Exam Coaching 2025",
          "description": "Civil India offers SSC CGL coaching in Kanpur with full coverage of Tier I & Tier II exams, eligibility, syllabus, posts, and preparation strategies.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Civil India",
            "url": "https://www.thecivilindia.in"
          }
        }
        `}</script>
      </Helmet>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC CGL Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Combined Graduate Level - Gateway to Central Government Jobs</p>
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
                  The Staff Selection Commission conducts the SSC CGL exam every year to recruit candidates into many organizations, departments, and offices working under the Government of India. It is a Central level exam through which recruitment of Group B and Group C posts in government departments takes place. The purpose of the SSC CGL examination is to recruit candidates for non-gazetted Group B and C posts in various ministries, organizations, and departments under the Government of India, providing graduates with opportunities to secure government jobs in various fields.
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

        {/* Tier II Details */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('tier2')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Tier II - Detailed Structure</h2>
              </div>
              {expandedSections.includes('tier2') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('tier2') && (
              <div className="mt-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Section I - All Candidates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tierTwoDetails[0].papers.map((paper, index) => (
                      <div key={index} className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">{paper.paper}</h4>
                        <ul className="space-y-1">
                          {paper.modules.map((module, moduleIndex) => (
                            <li key={moduleIndex} className="text-sm text-gray-600">
                              <span className="text-blue-600 mr-1">•</span>
                              {module}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Section II</h4>
                      <p className="text-yellow-700 text-sm">Only for candidates applying for Junior Statistical Officer (JSO) posts</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Section III</h4>
                      <p className="text-green-700 text-sm">Only for candidates shortlisted for Assistant Audit Officer/Assistant Accounts Officer posts</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Posts Available */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('posts')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaBriefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Available Posts</h2>
              </div>
              {expandedSections.includes('posts') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('posts') && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="px-6 py-3 font-semibold">Post</th>
                        <th className="px-6 py-3 font-semibold">Department/Ministry</th>
                        <th className="px-6 py-3 font-semibold">Classification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sscCGLPosts.map((post, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 font-medium text-gray-900">{post.post}</td>
                          <td className="px-6 py-4 text-gray-600">{post.department}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              post.classification.includes("Group 'B'") 
                                ? "bg-green-100 text-green-800" 
                                : "bg-blue-100 text-blue-800"
                            }`}>
                              {post.classification}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                href="https://ssc.gov.in/api/attachment/uploads/masterData/Syllabus/CGL-syllabus-169635-.pdf"
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaCalendarAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Two-Tier Process</h3>
              <p className="text-sm opacity-90">Tier I & Tier II Exams</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaBriefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Posts</h3>
              <p className="text-sm opacity-90">16+ Different Government Positions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Group B & C Posts</h3>
              <p className="text-sm opacity-90">Gazetted & Non-Gazetted Positions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Graduate Level</h3>
              <p className="text-sm opacity-90">Bachelor's Degree Required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCCGLPage;
