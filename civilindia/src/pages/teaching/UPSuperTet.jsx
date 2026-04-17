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
  FaCogs,
  FaGraduationCap,
  FaLanguage,
  FaCalculator,
  FaFlask,
  FaGlobe,
  FaChalkboardTeacher,
  FaChild,
  FaBrain,
  FaLaptop,
  FaUserTie
} from 'react-icons/fa';

const UPSuperTETPage = () => {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'overview']);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const examPattern = [
    { subject: "Language (Hindi, English, Sanskrit)", marks: 40, icon: <FaLanguage className="w-5 h-5" /> },
    { subject: "Mathematics", marks: 20, icon: <FaCalculator className="w-5 h-5" /> },
    { subject: "Science", marks: 10, icon: <FaFlask className="w-5 h-5" /> },
    { subject: "Environment and Social Study", marks: 10, icon: <FaGlobe className="w-5 h-5" /> },
    { subject: "Teaching Methodology", marks: 10, icon: <FaChalkboardTeacher className="w-5 h-5" /> },
    { subject: "Child Psychology", marks: 10, icon: <FaChild className="w-5 h-5" /> },
    { subject: "General Knowledge / Current Affairs", marks: 30, icon: <FaBook className="w-5 h-5" /> },
    { subject: "Logical Knowledge", marks: 5, icon: <FaBrain className="w-5 h-5" /> },
    { subject: "Information Technology", marks: 5, icon: <FaLaptop className="w-5 h-5" /> },
    { subject: "Life Skill / Management and Aptitude", marks: 10, icon: <FaUserTie className="w-5 h-5" /> }
  ];

  const eligibilityData = [
    { 
      category: "Educational Qualification", 
      requirement: "Bachelor's degree with 2-year D.El.Ed OR Bachelor's degree with 1-year B.Ed OR 4-year B.El.Ed" 
    },
    { 
      category: "Additional Requirement", 
      requirement: "Must have passed UPTET (Uttar Pradesh Teacher Eligibility Test) or CTET (Central Teacher Eligibility Test)" 
    },
    { 
      category: "Age Limit", 
      requirement: "21 to 40 years" 
    },
    { 
      category: "Selection Process", 
      requirement: "10% weightage for academic records + 60% weightage for written exam performance" 
    }
  ];

  const examDetails = [
    { label: "Total Questions", value: "150", icon: <FaFileAlt className="w-5 h-5" /> },
    { label: "Examination Mode", value: "Offline", icon: <FaClock className="w-5 h-5" /> },
    { label: "Total Marks", value: "150", icon: <FaAward className="w-5 h-5" /> },
    { label: "Official Website", value: "updeled.gov.in", icon: <FaGlobe className="w-5 h-5" /> }
  ];

  const syllabusData = [
    {
      subject: "General Hindi",
      topics: [
        "विलोम (Antonyms)",
        "पर्यायवाची (Synonyms)", 
        "रस (Rasa)",
        "संधियां (Sandhi)",
        "तद्भव तत्सम (Tadbhav Tatsam)",
        "लोकोक्तियाँ (Proverbs)",
        "मुहावरे (Idioms)",
        "वाक्यांशों के लिए एक शब्द (One word substitution)",
        "अनेकार्थी शब्द (Multiple meaning words)",
        "व्याकरण (Grammar)",
        "अपठित गद्यांश पद्यांश (Unseen passages)",
        "अलंकार, समास (Figures of speech, Compound words)"
      ]
    },
    {
      subject: "General English",
      topics: [
        "Active Voice and Passive Voice",
        "Parts of Speech",
        "Transformation of Sentences",
        "Direct and Indirect Speech",
        "Punctuation and Spellings",
        "Words Meanings",
        "Vocabulary & usage",
        "Idioms and Phrases",
        "Fill in the Blanks"
      ]
    },
    {
      subject: "Science",
      topics: [
        "Daily life includes science",
        "Speed force",
        "Energy",
        "Light",
        "Sound",
        "World of creatures",
        "Human body",
        "Health",
        "Hygiene and nutrition",
        "Environment & natural resources",
        "Stages of matter and substance"
      ]
    },
    {
      subject: "Mathematics",
      topics: [
        "Numerical ability",
        "Mathematical operations",
        "Decimal",
        "Fractions",
        "Percentage",
        "Interest",
        "Profit-loss",
        "Divisibility",
        "Factoring",
        "General algebra",
        "Area and Volume",
        "Ratio and Proportion",
        "General geometry",
        "General statistics"
      ]
    },
    {
      subject: "Environment & Social Study",
      topics: [
        "Earth's structure",
        "Rivers",
        "Mountains",
        "Continents",
        "Oceans and fauna",
        "Natural wealth",
        "Latitude and longitude",
        "Solar system",
        "Indian geography",
        "Indian freedom struggle",
        "Indian social reformers",
        "Indian Constitution",
        "Our governance system",
        "Traffic and road safety",
        "Indian economy and challenges"
      ]
    },
    {
      subject: "Teaching Skills",
      topics: [
        "Teaching methods and skills",
        "Principles of learning",
        "Current Indian society and elementary education",
        "Inclusive education",
        "New initiatives for elementary education",
        "Educational evaluation and measurement",
        "Classroom management skills",
        "Educational administration"
      ]
    },
    {
      subject: "Child Psychology",
      topics: [
        "Individual differences",
        "Factors affecting child development",
        "Identification of learning needs",
        "Creating learning environments",
        "Theories of learning and practical applications",
        "Special arrangements for diverse learners"
      ]
    },
    {
      subject: "General Knowledge",
      topics: [
        "Current Affairs",
        "International & National Events",
        "Important events related to Uttar Pradesh",
        "Personalities and their contributions",
        "International and national awards",
        "Sports",
        "Culture and art"
      ]
    },
    {
      subject: "Logical Knowledge",
      topics: [
        "Analogies",
        "Series and Patterns",
        "Binary Logic",
        "Classification",
        "Clocks and Calendars",
        "Coded Inequalities",
        "Coding-Decoding",
        "Critical reasoning",
        "Number Series",
        "Puzzles",
        "Symbols and Notations",
        "Venn Diagrams and Dice",
        "Data Interpretation",
        "Direction Sense Test",
        "Letter Series"
      ]
    },
    {
      subject: "Information Technology",
      topics: [
        "Information technology in teaching",
        "Educational technology and school management",
        "Computer fundamentals",
        "Internet and smartphones",
        "Useful applications in teaching",
        "Digital teaching materials"
      ]
    },
    {
      subject: "Life Skill/Management and Aptitude",
      topics: [
        "Professional conduct and ethics",
        "Motivation",
        "Role of education",
        "Constitutional values",
        "Effective communication",
        "Leadership skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UP Super TET (STET)</h1>
          <p className="text-xl md:text-2xl opacity-90">Uttar Pradesh Super Teacher Eligibility Test</p>
          <p className="text-lg opacity-80 mt-2">Gateway to Primary & Upper Primary Teaching Positions</p>
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
                <h2 className="text-2xl font-bold text-gray-800">About UP Super TET</h2>
              </div>
              {expandedSections.includes('introduction') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('introduction') && (
              <div className="mt-6 text-gray-600 leading-relaxed">
                <p>
                  The Uttar Pradesh Super Teacher Eligibility Test (UP Super TET) is conducted by UPBEB (Uttar Pradesh Basic Education Board). It's a state-level examination for the recruitment of teachers in Primary and Upper Primary schools across Uttar Pradesh. This exam is designed to assess candidates' knowledge and teaching aptitude for elementary education positions.
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {examDetails.map((detail, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="flex justify-center mb-2 text-blue-900">
                        {detail.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-1">{detail.label}</h3>
                      <p className="text-blue-900 font-bold">{detail.value}</p>
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
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Pattern</h2>
              </div>
              {expandedSections.includes('pattern') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('pattern') && (
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Subject</th>
                        <th className="border border-gray-300 px-4 py-3 text-center">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examPattern.map((subject, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">
                            <div className="flex items-center space-x-2">
                              <div className="text-blue-900">
                                {subject.icon}
                              </div>
                              <span>{subject.subject}</span>
                            </div>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-900">
                            {subject.marks}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50 font-bold">
                        <td className="border border-gray-300 px-4 py-3">Total</td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-blue-900">150</td>
                      </tr>
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

        {/* Detailed Syllabus */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('syllabus')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Detailed Syllabus</h2>
              </div>
              {expandedSections.includes('syllabus') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('syllabus') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {syllabusData.map((subject, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">{subject.subject}</h3>
                      <ul className="space-y-2">
                        {subject.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="text-gray-600 flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-sm">{topic}</span>
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

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">State Level Exam</h3>
              <p className="text-sm opacity-90">Conducted by UP Basic Education Board</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Teaching Career</h3>
              <p className="text-sm opacity-90">Primary & Upper Primary School Teachers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">150 Questions</h3>
              <p className="text-sm opacity-90">Offline examination mode</p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Selection Process</h3>
              <p className="text-blue-700 text-sm">
                Final selection based on:<br/>
                • 10% weightage for academic records (High School, Intermediate, Graduation, Training)<br/>
                • 60% weightage for written examination performance
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-semibold text-green-800 mb-2">Official Website</h3>
              <p className="text-green-700 text-sm">
                For latest updates and notifications:<br/>
                <a href="https://updeled.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                  updeled.gov.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPSuperTETPage;