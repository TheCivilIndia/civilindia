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
  FaLanguage,
  FaSearch
} from 'react-icons/fa';

const UPSCExamPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const examPhases = [
    {
      title: "Phase 1: Civil Services Preliminary Exam (Prelims)",
      details: [
        "Objective type examination for selection to Main Examination",
        "Paper I (General Studies): 100 questions, 2 marks each, 0.66 negative marking",
        "Paper II (CSAT): 80 questions, 2.5 marks each, 0.83 negative marking, qualifying nature (33% required)",
        "Total Duration: 2 hours per paper",
        "Only Paper I marks counted for merit to qualify for Mains"
      ]
    },
    {
      title: "Phase 2: Civil Services Main Examination (Mains)",
      details: [
        "Written examination with 9 papers (7 counted for merit)",
        "Conventional (essay) type questions",
        "No negative marking",
        "2 qualifying papers: Indian Language & English (300 marks each)",
        "7 merit papers totaling 1750 marks"
      ]
    },
    {
      title: "Phase 3: Personality Test (Interview)",
      details: [
        "Conducted by a competent board of observers",
        "Assessment of personality traits and suitability for public service",
        "Questions on matters of general interest",
        "275 marks allocated for interview",
        "Final merit based on Mains + Interview (2025 total marks)"
      ]
    }
  ];

  const mainsStructure = [
    { paper: "Essay", subject: "Essay Writing", marks: 250 },
    { paper: "General Studies I", subject: "Indian Heritage, Culture, History & Geography", marks: 250 },
    { paper: "General Studies II", subject: "Governance, Constitution, Polity & International Relations", marks: 250 },
    { paper: "General Studies III", subject: "Technology, Economic Development, Environment & Security", marks: 250 },
    { paper: "General Studies IV", subject: "Ethics, Integrity and Aptitude", marks: 250 },
    { paper: "Optional Paper I", subject: "Chosen Optional Subject", marks: 250 },
    { paper: "Optional Paper II", subject: "Chosen Optional Subject", marks: 250 }
  ];

  const eligibilityData = [
    { category: "Nationality", requirement: "Citizen of India (special conditions for other services)" },
    { category: "Age Limit", requirement: "21-32 years (relaxation: SC/ST +5 years, OBC +3 years)" },
    { category: "Educational Qualification", requirement: "Bachelor's degree from recognized university" },
    { category: "Attempts", requirement: "General: 6 attempts, OBC: 9 attempts, SC/ST: No limit" }
  ];

  const allIndiaServices = [
    { service: "Indian Administrative Service (IAS)", description: "Administrative roles in central and state governments" },
    { service: "Indian Police Service (IPS)", description: "Senior police positions across the country" },
    { service: "Indian Forest Service (IFS)", description: "Forest conservation and environmental protection" }
  ];

  const groupAServices = [
    "Indian P&T Accounts & Finance Service",
    "Indian Audit and Accounts Service",
    "Indian Revenue Service (Customs and Central Excise)",
    "Indian Defence Accounts Service",
    "Indian Revenue Service (I.T.)",
    "Indian Ordnance Factories Service",
    "Indian Postal Service",
    "Indian Civil Accounts Service",
    "Indian Railway Traffic Service",
    "Indian Railway Accounts Service",
    "Indian Railway Personnel Service",
    "Indian Railway Protection Force",
    "Indian Defence Estates Service",
    "Indian Information Service",
    "Indian Trade Service",
    "Indian Corporate Law Service"
  ];

  const groupBServices = [
    "Armed Forces Headquarters Civil Service (Section Officer's Grade)",
    "Delhi, Andaman & Nicobar Islands, Lakshadweep, Daman & Diu, and Dadra & Nagar Haveli Civil Service (DANICS)",
    "Delhi, Andaman & Nicobar Islands, Lakshadweep, Daman & Diu, and Dadra & Nagar Haveli Police Service (DANIPS)",
    "Pondicherry Civil Service",
    "Pondicherry Police Service"
  ];

  const optionalSubjects = [
    "Agriculture", "Animal Husbandry and Veterinary Science", "Anthropology", "Botany", "Chemistry",
    "Civil Engineering", "Commerce and Accountancy", "Economics", "Electrical Engineering", "Geography",
    "Geology", "History", "Law", "Management", "Mathematics", "Mechanical Engineering", "Medical Science",
    "Philosophy", "Physics", "Political Science and International Relations", "Psychology", "Public Administration",
    "Sociology", "Statistics", "Zoology", "Literature (Various Languages)"
  ];

  const prelimsSyllabus = [
    { subject: "Current Events", topics: "National and international importance" },
    { subject: "History", topics: "Indian history and National Movement" },
    { subject: "Geography", topics: "Indian and World Geography - Physical, Social, Economic" },
    { subject: "Polity", topics: "Constitution, Political System, Panchayati Raj, Public Policy" },
    { subject: "Economy", topics: "Economic and Social Development, Sustainable Development" },
    { subject: "Environment", topics: "Environmental Ecology, Biodiversity, Climate Change" },
    { subject: "Science", topics: "General Science concepts" }
  ];

  const csatSyllabus = [
    "Comprehension", "Interpersonal skills and communication", "Logical reasoning and analytical ability",
    "Decision-making and problem solving", "General mental ability", "Basic numeracy (Class X level)",
    "Data interpretation (Class X level)"
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UPSC Civil Services Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to India's Most Prestigious Government Services</p>
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
                  The Union Public Service Commission (UPSC) Civil Services Examination is one of India's most esteemed and formidable examinations, 
                  conducted annually to recruit officers for All India Services including Indian Administrative Service (IAS), Indian Police Service (IPS), 
                  Indian Forest Service (IFS), and other Central Government services.
                </p>
                <p>
                  This comprehensive examination follows a rigorous three-phase selection process designed to identify candidates with the intellectual 
                  capacity, integrity, and leadership qualities required for senior administrative positions in the Indian government.
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
                <h2 className="text-2xl font-bold text-gray-800">Three-Phase Selection Process</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 gap-6">
                  {examPhases.map((phase, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <FaCheckCircle className="w-5 h-5 mr-2" />
                        {phase.title}
                      </h3>
                      <ul className="space-y-2">
                        {phase.details.map((detail, detailIndex) => (
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

        {/* Mains Structure */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('mains')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaClipboardList className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Mains Examination Structure</h2>
              </div>
              {expandedSections.includes('mains') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('mains') && (
              <div className="mt-6">
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Merit Papers (1750 + 275 = 2025 Total Marks)</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {mainsStructure.map((paper, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-blue-900">{paper.paper}</h4>
                        <p className="text-gray-600 text-sm">{paper.subject}</p>
                      </div>
                      <div className="text-lg font-bold text-green-600">{paper.marks} marks</div>
                    </div>
                  ))}
                  <div className="bg-green-50 rounded-lg p-4 flex justify-between items-center border-2 border-green-200">
                    <div>
                      <h4 className="font-semibold text-green-800">Personality Test (Interview)</h4>
                      <p className="text-green-600 text-sm">Final assessment by expert board</p>
                    </div>
                    <div className="text-lg font-bold text-green-600">275 marks</div>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Two qualifying papers (Indian Language & English) with 300 marks each are not counted for final merit.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Services Offered */}
<div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('services')}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-900 text-white p-2 rounded-lg">
                <FaAward className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Services & Career Opportunities</h2>
            </div>
            {expandedSections.includes('services') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
          </div>
          {expandedSections.includes('services') && (
            <div className="mt-6">
              {/* All India Services */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">All India Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {allIndiaServices.map((service, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-blue-900 mb-2">{service.service}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group A Services */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Group 'A' Central Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {groupAServices.map((service, index) => (
                    <div key={index} className="bg-gray-50 rounded p-3 text-gray-600 text-sm">
                      <span className="text-blue-600 mr-2">•</span>
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Group B Services */}
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Group 'B' Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {groupBServices.map((service, index) => (
                    <div key={index} className="bg-gray-50 rounded p-3 text-gray-600 text-sm">
                      <span className="text-blue-600 mr-2">•</span>
                      {service}
                    </div>
                  ))}
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

        {/* Optional Subjects */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('optional')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Optional Subjects (Choose Any One)</h2>
              </div>
              {expandedSections.includes('optional') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('optional') && (
              <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {optionalSubjects.map((subject, index) => (
                    <div key={index} className="bg-blue-50 rounded p-3 text-center text-sm">
                      <span className="text-blue-800 font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Strategic Tip:</strong> Choose an optional subject based on your academic background, interest, and scoring potential. 
                    Optional subjects contribute 500 marks (25%) to your final score.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prelims Syllabus */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('prelims-syllabus')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Prelims Syllabus Overview</h2>
              </div>
              {expandedSections.includes('prelims-syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('prelims-syllabus') && (
              <div className="mt-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">General Studies Paper I</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prelimsSyllabus.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">{item.subject}</h4>
                        <p className="text-gray-600 text-sm">{item.topics}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">General Studies Paper II (CSAT)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {csatSyllabus.map((topic, index) => (
                      <div key={index} className="bg-blue-50 rounded p-3 text-center text-sm">
                        <span className="text-blue-800">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> CSAT is qualifying in nature. You need minimum 33% marks to qualify for Mains.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Mains Syllabus */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-900 text-white p-2 rounded-lg">
                <FaSearch className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Detailed Mains Syllabus</h2>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Important:</strong> The Mains syllabus is extensive and detailed. For complete syllabus coverage of all papers, 
                please refer to the official UPSC notification and syllabus document.
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://www.upsc.gov.in/sites/default/files/Syllabus-English.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                <FaFileAlt className="w-5 h-5 mr-2" />
                Download Official Complete Syllabus
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
              <h3 className="font-semibold mb-2">3-Stage Process</h3>
              <p className="text-sm opacity-90">Prelims → Mains → Interview</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Prestigious Services</h3>
              <p className="text-sm opacity-90">IAS, IPS, IFS & 22+ other services</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaLanguage className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">25+ Optional Subjects</h3>
              <p className="text-sm opacity-90">Choose based on your expertise</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRupeeSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Excellent Career</h3>
              <p className="text-sm opacity-90">High salary & social status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPSCExamPage;
