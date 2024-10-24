import PropTypes from "prop-types";

const Registration = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if the modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl transition-transform transform duration-500 ease-in-out">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 lg:w-1/2">
          <div className="text-4xl font-bold flex justify-center text-gray-800">
            <span className="font-semibold">Course</span>Arena
          </div>

          <p className="mt-3 text-xl text-center text-gray-600">Create Your Account!</p>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="" disabled selected>Select your role</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="password">
                Password
              </label>
            </div>
            <input
              id="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="confirmPassword">
                Confirm Password
              </label>
            </div>
            <input
              id="confirmPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Register
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a href="#" className="text-xs text-gray-500 uppercase hover:underline">or login</a>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>

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

Registration.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Registration;
