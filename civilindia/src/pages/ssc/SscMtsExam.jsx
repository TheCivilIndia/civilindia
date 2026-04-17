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
  FaCheckCircle
} from 'react-icons/fa';

const SSCMTSPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

    // ===================
  // SEO Data
  // ===================
  const seo = {
    title:
      "SSC MTS Exam 2025 | Eligibility, Syllabus, Pattern & Job Roles | Civil India",
    description:
      "Get complete details about SSC MTS Exam 2025 including eligibility, syllabus, exam pattern, job roles, selection process and key highlights. Start your SSC MTS preparation with Civil India.",
    url: "https://www.thecivilindia.in/career/ssc/mts-exam",
    keywords:
      "SSC MTS Exam 2025, SSC Multitasking Staff, SSC MTS eligibility, SSC MTS syllabus, SSC MTS exam pattern, SSC MTS job roles, SSC coaching Kanpur",
    image: "https://www.thecivilindia.in/images/ssc-mts-banner.jpg",
  };


  const examStages = [
    {
      title: "Tier I - Session I",
      details: [
        "Subjects: General Intelligence & Reasoning, Quantitative Aptitude",
        "Questions: 40 questions (20 each subject)",
        "Marks: 120 total marks (60 marks per section)",
        "Marking Scheme: +3 for correct answers, no negative marking",
        "Minimum qualifying marks required for this section"
      ]
    },
    {
      title: "Tier I - Session II",
      details: [
        "Subjects: English Language & Comprehension, General Awareness",
        "Questions: 40 questions (20 each subject)",
        "Marks: 120 total marks (60 marks per section)",
        "Marking Scheme: +3 for correct answers, -1 for incorrect answers",
        "Merit list prepared based on Session II marks"
      ]
    },
    {
      title: "Havildar PET/PST Test",
      details: [
        "Physical Endurance Test for Havildar posts",
        "Medical examination for selected candidates",
        "Only applicable for Havildar position",
        "Candidates must qualify Tier I to appear for PET/PST"
      ]
    }
  ];

  const eligibilityData = [
    { category: "Educational Qualification", requirement: "10th grade pass from a recognized board" },
    { category: "Age Limit - MTS", requirement: "18-25 years" },
    { category: "Age Limit - Havildar", requirement: "18-25 years" },
    { category: "Age Relaxation", requirement: "Provided for reserved categories as per government norms" }
  ];

  const jobRoles = [
    { role: "Multitasking Staff (MTS)", description: "File management, general cleanliness, support functions" },
    { role: "Havildar", description: "Security duties, maintaining discipline in offices" },
    { role: "Peon", description: "Office support, document delivery, basic administrative tasks" },
    { role: "Gardener", description: "Maintenance of office gardens and green spaces" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
          <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC MTS Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to Government Support Staff Careers</p>
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
                  The SSC MTS (Staff Selection Commission Multitasking Staff) exam is a national-level examination conducted by the Staff Selection Commission 
                  to recruit candidates for Group C non-gazetted, non-ministerial posts in various ministries, departments, and offices of the Indian Government. 
                  It's a way to secure a government job, often for roles like Peon, Gardener, or Jamadar. The exam targets roles that typically involve 
                  non-clerical duties like file management, general cleanliness, and other support functions.
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Job Roles */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('roles')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaAward className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Job Roles & Responsibilities</h2>
              </div>
              {expandedSections.includes('roles') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('roles') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {jobRoles.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{item.role}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('notes')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Important Exam Details</h2>
              </div>
              {expandedSections.includes('notes') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('notes') && (
              <div className="mt-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Session I - No Negative Marking</h3>
                  <p className="text-yellow-700">General Intelligence & Reasoning and Quantitative Aptitude sections have no penalty for wrong answers.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                  <h3 className="font-semibold text-red-800 mb-2">Session II - Negative Marking</h3>
                  <p className="text-red-700">English Language & Comprehension and General Awareness sections have -1 mark penalty for each incorrect answer.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Merit List Preparation</h3>
                  <p className="text-green-700">Final merit list is prepared based on Session II marks only.</p>
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
                href="https://blogmedia.testbook.com/blog/wp-content/uploads/2023/04/ssc-mts-syllabus-pdf-9568a4ed.pdf"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Two-Session Exam</h3>
              <p className="text-sm opacity-90">Session I (No negative) + Session II (Negative marking)</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Group C Posts</h3>
              <p className="text-sm opacity-90">Non-gazetted, non-ministerial government positions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">10th Pass Eligible</h3>
              <p className="text-sm opacity-90">Minimum qualification: Class 10th pass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCMTSPage;
