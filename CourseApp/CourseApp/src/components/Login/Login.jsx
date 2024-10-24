import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; 

const fakeCredentials = {
  student: { email: 'student@example.com', password: 'student123' },
  instructor: { email: 'instructor@example.com', password: 'instructor123' },
};

const Login = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Form validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    // Check credentials
    if (email === fakeCredentials.student.email && password === fakeCredentials.student.password) {
      // Navigate to the student dashboard
      navigate('/studentDashboard');
      onClose(); 
    } else if (email === fakeCredentials.instructor.email && password === fakeCredentials.instructor.password) {
      // Navigate to the instructor dashboard
      navigate('/adminDashboard');
      onClose(); 
    } else {
      setError('Invalid email or password.');
    }
  };

  if (!isOpen) return null; // Don't render anything if the modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl transition-transform transform duration-500 ease-in-out">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 lg:w-1/2">
          <div className="text-4xl font-bold flex justify-center text-gray-800">
            <span className="font-semibold">Course</span>Arena
          </div>

          <p className="mt-3 text-xl text-center text-gray-600">Welcome back!</p>

          {error && <div className="text-red-500 text-center">{error}</div>} {/* Display error message */}

          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>
              <a href="#" className="text-xs text-center text-gray-500 uppercase hover:underline">or login with email</a>
              <span className="w-1/5 border-b lg:w-1/4"></span>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="LoggingEmailAddress">Email Address</label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="loggingPassword">Password</label>
                <a href="#" className="text-xs text-gray-500 hover:underline">Forget Password?</a>
              </div>
              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <button 
                type="submit" 
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b md:w-1/4"></span>
              <a href="#" className="text-xs text-gray-500 uppercase hover:underline">or sign up</a>
              <span className="w-1/5 border-b md:w-1/4"></span>
            </div>
          </form>

          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out rounded-full"
          >
            &times; {/* Close button */}
          </button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Corrected prop type
  onClose: PropTypes.func.isRequired,
};

export default Login;
