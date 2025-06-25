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
  FaShieldAlt
} from 'react-icons/fa';

const SSCGDPage = () => {
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
      title: "Computer Based Examination (CBE)",
      details: [
        "Mode: Computer Based Test",
        "Questions: 80 multiple-choice questions",
        "Sections: General Intelligence & Reasoning, General Knowledge & Awareness, Elementary Mathematics, English/Hindi",
        "Time: 60 minutes",
        "Marks: 160 total marks (2 marks per question)",
        "Negative Marking: -0.50 marks for each incorrect answer"
      ]
    },
    {
      title: "Physical Tests & Medical Examination",
      details: [
        "Physical Efficiency Test (PET)",
        "Physical Standard Test (PST)",
        "Detailed Medical Examination (DME)",
        "Only CBE qualified candidates called for physical tests",
        "Final selection based on CBE score after clearing all stages"
      ]
    }
  ];

  const eligibilityData = [
    { category: "Educational Qualification", requirement: "10th Class pass from a recognized board" },
    { category: "Age Limit", requirement: "18-23 years (as on cut-off date)" },
    { category: "Age Relaxation - SC/ST", requirement: "Up to 5 years relaxation" },
    { category: "Age Relaxation - OBC", requirement: "Up to 3 years relaxation" }
  ];

  const examPattern = [
    { section: "General Intelligence & Reasoning", questions: "20", marks: "40" },
    { section: "General Knowledge & Awareness", questions: "20", marks: "40" },
    { section: "Elementary Mathematics", questions: "20", marks: "40" },
    { section: "English/Hindi", questions: "20", marks: "40" }
  ];

  const reasoningSyllabus = [
    "Analogies", "Similarities and differences", "Blood relation", "Spatial visualization",
    "Spatial orientation", "Visual memory", "Discrimination", "Observation",
    "Relationship concepts", "Arithmetical reasoning and figural classification",
    "Arithmetic number series", "Non-verbal series", "Coding and decoding"
  ];

  const mathSyllabus = [
    "Number Systems", "Computation of Whole Numbers", "Decimals and Fractions",
    "Fundamental arithmetical operations", "Percentages", "Ratio and Proportion",
    "Averages", "Interest", "Profit and Loss", "Discount", "Mensuration",
    "Time and Distance", "Ratio and Time", "Time and Work"
  ];

  const gkSyllabus = [
    "India and its neighbouring countries", "Sports", "History", "Culture",
    "Geography", "Economic Scene", "General Polity", "Indian Constitution",
    "Current Affairs", "Static GK topics", "Scientific Research"
  ];

  const englishSyllabus = [
    "Reading Comprehension", "Fill in the Blanks", "Para jumbles", "Correct Spelling",
    "Direct/Indirect Speech", "One Word Substitution", "Synonyms Antonyms",
    "Error Spotting Questions", "Idiom & Phrases", "Cloze Test",
    "Sentence Improvement", "Active Passive", "Miscellaneous"
  ];

  const hindiSyllabus = [
    "संधि और संधि विच्छेद", "उपसर्ग", "प्रत्यय", "अनेकार्थक शब्द",
    "पर्यायवाची शब्द", "सामासिक पदों की रचना और समास विग्रह",
    "विपरीतार्थक (विलोम) शब्द", "संज्ञा शब्दों से विशेषण बनाना",
    "शब्द-युग्म", "वाक्य-शुद्धि", "मुहावरे और लोकोक्तियाँ",
    "वाच्य: कर्तृवाच्य, कर्मवाच्य और भाववाच्य प्रयोग"
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SSC GD Constable Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Gateway to Central Armed Police Forces</p>
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
                  The SSC GD (Staff Selection Commission General Duty) exam is a Central-level recruitment exam for General Duty Constables in various Central Armed Police Forces (CAPFs). 
                  The full form is Constable General Duty (GD). The purpose is to recruit General Duty Constables in CAPFs, SSF (Secretariat Security Force), Assam Rifles, and Narcotics Control Bureau. 
                  It is conducted as a Computer Based Examination (CBE) followed by physical tests and medical examination.
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
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-900">80</div>
                      <div className="text-sm text-gray-600">Total Questions</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">160</div>
                      <div className="text-sm text-gray-600">Total Marks</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-600">60</div>
                      <div className="text-sm text-gray-600">Minutes</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-600">-0.50</div>
                      <div className="text-sm text-gray-600">Negative Marking</div>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Section</th>
                        <th className="px-4 py-3 text-center">Questions</th>
                        <th className="px-4 py-3 text-center">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examPattern.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-medium">{item.section}</td>
                          <td className="px-4 py-3 text-center">{item.questions}</td>
                          <td className="px-4 py-3 text-center">{item.marks}</td>
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
              <div className="mt-6 space-y-6">
                {/* Reasoning Syllabus */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">General Intelligence & Reasoning</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {reasoningSyllabus.map((topic, index) => (
                      <div key={index} className="bg-white rounded p-2 text-sm text-gray-700">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mathematics Syllabus */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Elementary Mathematics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {mathSyllabus.map((topic, index) => (
                      <div key={index} className="bg-white rounded p-2 text-sm text-gray-700">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* GK Syllabus */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">General Knowledge & Awareness</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {gkSyllabus.map((topic, index) => (
                      <div key={index} className="bg-white rounded p-2 text-sm text-gray-700">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* English Syllabus */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">English Language</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {englishSyllabus.map((topic, index) => (
                      <div key={index} className="bg-white rounded p-2 text-sm text-gray-700">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hindi Syllabus */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">हिंदी भाषा (Hindi Language)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {hindiSyllabus.map((topic, index) => (
                      <div key={index} className="bg-white rounded p-2 text-sm text-gray-700">
                        • {topic}
                      </div>
                    ))}
                  </div>
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
              <h3 className="font-semibold mb-2">Multi-Stage Selection</h3>
              <p className="text-sm opacity-90">CBE + PET + PST + DME</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Central Armed Forces</h3>
              <p className="text-sm opacity-90">CAPFs, SSF, Assam Rifles, NCB</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Prestigious Career</h3>
              <p className="text-sm opacity-90">Serve the Nation with Pride</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCGDPage;