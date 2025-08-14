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
  FaTrain,
  FaCalculator,
  FaBrain,
  FaGlobe,
  FaKeyboard,
  FaGraduationCap,
  FaClipboard
} from 'react-icons/fa';

const RRBNTPCExamPage = () => {
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
        "Questions: 100 multiple-choice questions",
        "Duration: 90 minutes",
        "Marks: 100 total marks",
        "Subjects: General Awareness (40), Mathematics (30), General Intelligence & Reasoning (30)",
        "Negative Marking: 1/3 mark deduction for wrong answers",
        "Available in 15 languages",
        "Qualifying stage for CBT 2"
      ]
    },
    {
      title: "CBT 2 (Computer Based Test 2)",
      details: [
        "Questions: 120 multiple-choice questions",
        "Duration: 90 minutes",
        "Marks: 120 total marks",
        "Subjects: General Awareness (50), Mathematics (35), General Intelligence & Reasoning (35)",
        "Negative Marking: 1/3 mark deduction for wrong answers",
        "Final merit list preparation",
        "Higher difficulty than CBT 1"
      ]
    },
    {
      title: "Skill Test & Document Verification",
      details: [
        "Typing Skill Test for relevant posts",
        "Typing proficiency in Hindi/English required",
        "Computer Based Aptitude Test (CBAT) if applicable",
        "Document verification process",
        "Medical examination",
        "Final selection based on CBT 2 + Skill Test"
      ]
    }
  ];

  const undergraduatePosts = [
    { post: "Junior Clerk cum Typist", ageLimit: "18-33 Years", education: "12th with 50% marks", typingRequired: true },
    { post: "Accounts Clerk cum Typist", ageLimit: "18-33 Years", education: "12th with 50% marks", typingRequired: true },
    { post: "Junior Time Keeper", ageLimit: "18-33 Years", education: "12th with 50% marks", typingRequired: true },
    { post: "Trains Clerk", ageLimit: "18-33 Years", education: "12th with 50% marks", typingRequired: false },
    { post: "Commercial cum Ticket Clerk", ageLimit: "18-33 Years", education: "12th with 50% marks", typingRequired: false }
  ];

  const graduatePosts = [
    { post: "Traffic Assistant", ageLimit: "18-36 Years", education: "Bachelor's Degree", typingRequired: false },
    { post: "Goods Guard", ageLimit: "18-36 Years", education: "Bachelor's Degree", typingRequired: false },
    { post: "Senior Commercial cum Ticket Clerk", ageLimit: "18-36 Years", education: "Bachelor's Degree", typingRequired: false },
    { post: "Senior Clerk cum Typist", ageLimit: "18-36 Years", education: "Bachelor's Degree", typingRequired: true },
    { post: "Junior Account Assistant cum Typist", ageLimit: "18-36 Years", education: "Bachelor's Degree", typingRequired: true },
    { post: "Senior Time Keeper", ageLimit: "18-36 Years", education: "Bachelor's Degree", typingRequired: true },
    { post: "Commercial Apprentice", ageLimit: "18-36 Years", education: "Bachelor's Degree", typingRequired: false },
    { post: "Station Master", ageLimit: "18-36 Years", education: "Bachelor's Degree", typingRequired: false }
  ];

  const cbt1Pattern = [
    { subject: "General Awareness", questions: 40, marks: 40 },
    { subject: "Mathematics", questions: 30, marks: 30 },
    { subject: "General Intelligence and Reasoning", questions: 30, marks: 30 }
  ];

  const cbt2Pattern = [
    { subject: "General Awareness", questions: 50, marks: 50 },
    { subject: "Mathematics", questions: 35, marks: 35 },
    { subject: "General Intelligence and Reasoning", questions: 35, marks: 35 }
  ];

  const eligibilityData = [
    { category: "Nationality", requirement: "Citizens of India, Nepal, or Bhutan" },
    { category: "Age Limit - Undergraduate", requirement: "18-33 years for 12th level posts" },
    { category: "Age Limit - Graduate", requirement: "18-36 years for degree level posts" },
    { category: "Educational Qualification", requirement: "12th (50% marks) for UG posts, Bachelor's degree for Graduate posts" },
    { category: "Special Note", requirement: "50% marks not required for SC/ST/PwD/Ex-Servicemen" }
  ];

  const salaryRanges = [
    { level: "Level 2", posts: "Junior Clerk, Accounts Clerk", salary: "₹19,900 - ₹63,200" },
    { level: "Level 4", posts: "Traffic Assistant, Goods Guard", salary: "₹25,500 - ₹81,100" },
    { level: "Level 6", posts: "Station Master, Senior Clerk", salary: "₹35,400 - ₹1,12,400" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RRB NTPC Exam</h1>
          <p className="text-xl md:text-2xl opacity-90">Non-Technical Popular Categories Recruitment</p>
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
                  The Railway Recruitment Board (RRB) Non-Technical Popular Categories (NTPC) exam is one of the most sought-after recruitment drives for various 
                  non-technical posts in the Indian Railways. This comprehensive examination is conducted for both undergraduate (12th level) and graduate-level positions, 
                  offering numerous career opportunities across different departments of Indian Railways. The exam covers a wide range of posts from Junior Clerk to Station Master, 
                  providing candidates with excellent career growth prospects in the railway sector.
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
                        {index === 1 && <FaFileAlt className="w-5 h-5 mr-2" />}
                        {index === 2 && <FaKeyboard className="w-5 h-5 mr-2" />}
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
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">Online</div>
                      <div className="text-sm text-gray-600">Exam Mode</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">100+120</div>
                      <div className="text-sm text-gray-600">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">90 min</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">1/3</div>
                      <div className="text-sm text-gray-600">Negative Marking</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">15</div>
                      <div className="text-sm text-gray-600">Languages</div>
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
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {eligibilityData.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">{item.category}</h3>
                      <p className="text-gray-600">{item.requirement}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
                  <p className="text-yellow-800 text-sm">
                    For typing skill test posts, candidates must have typing proficiency in Hindi/English on computer. 
                    50% marks requirement is waived for SC/ST/PwD/Ex-Servicemen candidates.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Post Details */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('posts')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaClipboard className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Available Posts</h2>
              </div>
              {expandedSections.includes('posts') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('posts') && (
              <div className="mt-6">
                {/* Undergraduate Posts */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <FaGraduationCap className="w-5 h-5 mr-2" />
                    Undergraduate Level Posts (12th Level)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3 text-left">Post</th>
                          <th className="border border-gray-300 p-3 text-center">Age Limit</th>
                          <th className="border border-gray-300 p-3 text-center">Education</th>
                          <th className="border border-gray-300 p-3 text-center">Typing Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {undergraduatePosts.map((post, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 p-3 font-semibold text-blue-900">{post.post}</td>
                            <td className="border border-gray-300 p-3 text-center">{post.ageLimit}</td>
                            <td className="border border-gray-300 p-3 text-center text-sm">{post.education}</td>
                            <td className="border border-gray-300 p-3 text-center">
                              {post.typingRequired ? 
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Yes</span> : 
                                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">No</span>
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Graduate Posts */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <FaAward className="w-5 h-5 mr-2" />
                    Graduate Level Posts
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-green-100">
                          <th className="border border-gray-300 p-3 text-left">Post</th>
                          <th className="border border-gray-300 p-3 text-center">Age Limit</th>
                          <th className="border border-gray-300 p-3 text-center">Education</th>
                          <th className="border border-gray-300 p-3 text-center">Typing Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {graduatePosts.map((post, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 p-3 font-semibold text-blue-900">{post.post}</td>
                            <td className="border border-gray-300 p-3 text-center">{post.ageLimit}</td>
                            <td className="border border-gray-300 p-3 text-center text-sm">{post.education}</td>
                            <td className="border border-gray-300 p-3 text-center">
                              {post.typingRequired ? 
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Yes</span> : 
                                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">No</span>
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Exam Pattern */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('exam-pattern')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Pattern</h2>
              </div>
              {expandedSections.includes('exam-pattern') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('exam-pattern') && (
              <div className="mt-6">
                {/* CBT 1 Pattern */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <FaCheckCircle className="w-5 h-5 mr-2" />
                    CBT 1 Exam Pattern
                  </h3>
                  <div className="overflow-x-auto mb-4">
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
                        {cbt1Pattern.map((subject, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 p-3 font-semibold text-blue-900">{subject.subject}</td>
                            <td className="border border-gray-300 p-3 text-center">{subject.questions}</td>
                            <td className="border border-gray-300 p-3 text-center">{subject.marks}</td>
                            <td className="border border-gray-300 p-3 text-center">{index === 0 ? "90 minutes" : ""}</td>
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
                </div>

                {/* CBT 2 Pattern */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <FaCheckCircle className="w-5 h-5 mr-2" />
                    CBT 2 Exam Pattern
                  </h3>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-green-900 text-white">
                          <th className="border border-gray-300 p-3 text-left">Subject</th>
                          <th className="border border-gray-300 p-3 text-center">Questions</th>
                          <th className="border border-gray-300 p-3 text-center">Marks</th>
                          <th className="border border-gray-300 p-3 text-center">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cbt2Pattern.map((subject, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 p-3 font-semibold text-blue-900">{subject.subject}</td>
                            <td className="border border-gray-300 p-3 text-center">{subject.questions}</td>
                            <td className="border border-gray-300 p-3 text-center">{subject.marks}</td>
                            <td className="border border-gray-300 p-3 text-center">{index === 0 ? "90 minutes" : ""}</td>
                          </tr>
                        ))}
                        <tr className="bg-green-100 font-bold">
                          <td className="border border-gray-300 p-3">Total</td>
                          <td className="border border-gray-300 p-3 text-center">120</td>
                          <td className="border border-gray-300 p-3 text-center">120</td>
                          <td className="border border-gray-300 p-3 text-center">90 minutes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Important Exam Details:</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Negative Marking: 1/3 mark deduction for each incorrect answer</li>
                    <li>• Exam Mode: Online (Computer Based Test)</li>
                    <li>• Languages: Available in 15 different languages</li>
                    <li>• CBT 1 is qualifying in nature for CBT 2</li>
                    <li>• Final merit list prepared based on CBT 2 performance</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Salary Structure */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => toggleSection('salary')}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <FaRupeeSign className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Salary Structure</h2>
              </div>
              {expandedSections.includes('salary') ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </div>
            {expandedSections.includes('salary') && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {salaryRanges.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-bold text-blue-900 mb-2">{item.level}</h3>
                      <div className="text-2xl font-bold text-green-600 mb-2">{item.salary}</div>
                      <p className="text-gray-600 text-sm">{item.posts}</p>
                    </div>
                  ))}
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
                <FaTrain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Posts</h3>
              <p className="text-sm opacity-90">13+ different railway posts</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGlobe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">15 Languages</h3>
              <p className="text-sm opacity-90">Multilingual exam support</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaKeyboard className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Skill Tests</h3>
              <p className="text-sm opacity-90">Typing & CBAT included</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRupeeSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Great Salary</h3>
              <p className="text-sm opacity-90">Up to ₹1,12,400 + benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RRBNTPCExamPage;