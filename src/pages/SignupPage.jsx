
import { FaGraduationCap, FaBook } from 'react-icons/fa'
import Footer from '../components/Footer';

const SignupPage = () => {
  const signupOptions = [
    {
      type: 'Student',
      icon: <FaGraduationCap className="w-16 h-16 text-blue-600 mb-4" />,
      description: 'Access comprehensive courses, interactive learning, and personal growth opportunities.',
      buttonText: 'Student Signup',
      link: 'https://tci.shikshasuite.co.in/site/userlogin '
    },
    {
      type: 'Teacher',
      icon: <FaBook className="w-16 h-16 text-blue-600 mb-4" />,
      description: 'Create engaging courses, manage students, and share your expertise globally.',
      buttonText: 'Instructor Signup',
      link: 'https://tci.shikshasuite.co.in/admin/admin/dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-20 md:py-12">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">Join Our Learning Community</h1>
          <p className="text-xl text-gray-600">Choose your path and start your educational journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {signupOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-blue-100 rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-2xl hover:border-blue-300"
            >
             <p className='text-center flex justify-center items-center'>{option.icon}</p> 
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{option.type} Sign Up</h2>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <a 
                href={option.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                {option.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;