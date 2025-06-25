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
  FaClipboardList,
  FaGraduationCap,
  FaCalculator,
  FaLanguage,
  FaBrain
} from 'react-icons/fa';

const SSCCHSLPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const examTiers = [
    {
      title: "Tier 1 - Computer Based Test",
      details: [
        "Mode: Online Computer Based Test (CBT)",
        "Questions: 100 multiple-choice questions",
        "Total Marks: 200 marks (2 marks each)",
        "Time Duration: 60 minutes",
        "Sections: General Intelligence & Reasoning (25Q), General Awareness (25Q), Quantitative Aptitude (25Q), English Comprehension (25Q)",
        "Nature: Qualifying exam for Tier 2"
      ]
    },
    {
      title: "Tier 2 - Mains Exam",
      details: [
        "Mode: Written multiple-choice exam",
        "Structure: 3 Papers with 2 modules each",
        "Paper 1: Mathematical Abilities + Reasoning & General Intelligence",
        "Paper 2: English Language & Comprehension + General Awareness", 
        "Paper 3: Computer Knowledge + Data Entry Speed Test (15 mins)",
        "Final selection based on Tier 2 performance"
      ]
    }
  ];

  const eligibilityData = [
    { category: "Educational Qualification", requirement: "12th standard (Higher Secondary) from a recognized board" },
    { category: "Age Limit", requirement: "18-27 years (varies by category)" },
    { category: "Posts Available", requirement: "LDC, JSA, PA, SA, DEO" },
    { category: "Age Relaxation", requirement: "Available for reserved categories as per government norms" }
  ];

  const postDetails = [
    { post: "Lower Division Clerk (LDC)", description: "Clerical work in government offices" },
    { post: "Junior Secretariat Assistant (JSA)", description: "Secretarial assistance in ministries" },
    { post: "Postal Assistant (PA)", description: "Postal services operations" },
    { post: "Sorting Assistant (SA)", description: "Mail sorting and distribution" },
    { post: "Data Entry Operator (DEO)", description: "Data entry and computer operations" }
  ];

  const syllabusData = [
    {
      subject: "General Intelligence & Reasoning",
      icon: <FaBrain className="w-6 h-6" />,
      topics: [
        "Classification", "Analogy", "Coding-Decoding", "Paper Folding Method",
        "Matrix", "Word Formation", "Venn Diagram", "Direction and Distance",
        "Blood Relations", "Verbal Reasoning", "Non-Verbal Reasoning",
        "Seating Arrangement", "Puzzle", "Series"
      ]
    },
    {
      subject: "General Awareness",
      icon: <FaGraduationCap className="w-6 h-6" />,
      topics: [
        "Static General Knowledge", "Science", "Current Affairs", "Sports",
        "Books and Authors", "Important Schemes", "Portfolios", "People in the News",
        "History", "Culture", "Geography", "Economics", "Awards and Honors"
      ]
    },
    {
      subject: "Quantitative Aptitude",
      icon: <FaCalculator className="w-6 h-6" />,
      topics: [
        "Simplification", "Interest", "Averages", "Percentage", "Ratio and Proportion",
        "Problem on Ages", "Speed, Distance, and Time", "Number System",
        "Mensuration", "Data Interpretation", "Time and Work", "Algebra",
        "Trigonometry", "Geometry"
      ]
    },
    {
      subject: "English Comprehension",
      icon: <FaLanguage className="w-6 h-6" />,
      topics: [
        "Reading Comprehension", "Cloze Test", "Spellings", "Phrases and Idioms",
        "One Word Substitution", "Sentence Correction", "Error Spotting",
        "Fill in the Blanks", "Para Jumbles", "Active/Passive", "Narration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC CHSL Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Combined Higher Secondary Level - Gateway to Government Jobs</p>
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
                  The SSC CHSL (Combined Higher Secondary Level) exam is a Central-level recruitment exam for various lower division Clerical and non-technical posts under the government of India. It is conducted to fill posts like Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant (PA), Sorting Assistant (SA), and Data Entry Operator (DEO) in different ministries and departments. The exam follows a two-tiered pattern with Tier 1 being qualifying in nature and Tier 2 being the main exam for final selection.
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
                <h2 className="text-2xl font-bold text-gray-800">Exam Structure</h2>
              </div>
              {expandedSections.includes('overview') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('overview') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {examTiers.map((tier, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <FaCheckCircle className="w-5 h-5 mr-2" />
                        {tier.title}
                      </h3>
                      <ul className="space-y-2">
                        {tier.details.map((detail, detailIndex) => (
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

        {/* Posts Available */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('posts')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaClipboardList className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Available Posts</h2>
              </div>
              {expandedSections.includes('posts') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('posts') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {postDetails.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      <h3 className="font-bold text-blue-900 mb-2">{item.post}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
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

        {/* Detailed Syllabus */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('syllabus')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
              </div>
              {expandedSections.includes('syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('syllabus') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {syllabusData.map((subject, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <div className="bg-blue-900 text-white p-2 rounded-lg mr-3">
                          {subject.icon}
                        </div>
                        {subject.subject}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {subject.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="bg-white rounded p-2 text-sm text-gray-700 flex items-center">
                            <span className="text-blue-600 mr-2">•</span>
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Selection Process */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('selection')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaAward className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Selection Process</h2>
              </div>
              {expandedSections.includes('selection') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('selection') && (
              <div className="mt-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Complete Selection Process:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Tier 1 - Qualifying Round</h4>
                        <p className="text-gray-600">Computer Based Test with 100 questions (200 marks)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Tier 2 - Main Exam</h4>
                        <p className="text-gray-600">Written exam with 3 papers (2 modules each)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Skill Test/Typing Test</h4>
                        <p className="text-gray-600">For certain posts (Data Entry Speed Test included)</p>
                      </div>
                    </div>
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
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Two-Tier Process</h3>
              <p className="text-sm opacity-90">Tier 1 & Tier 2 + Skill Test</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">12th Pass Eligible</h3>
              <p className="text-sm opacity-90">Higher Secondary qualification required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaClipboardList className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Posts</h3>
              <p className="text-sm opacity-90">LDC, JSA, PA, SA, DEO</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Government Job</h3>
              <p className="text-sm opacity-90">Central Government positions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCCHSLPage;