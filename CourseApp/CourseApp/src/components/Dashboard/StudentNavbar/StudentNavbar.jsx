
import PropTypes from 'prop-types';

const StudentNavbar = ({ firstName }) => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md p-3 mb-5 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Welcome, {firstName}</h2>
      <div className="flex items-center gap-2">
        <img 
          src="https://ui-avatars.com/api/?name=John+Doe" 
          alt="User Avatar" 
          className="w-14 h-14 rounded-full mr-2" 
        />
        <a href="/">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700">Logout</button>
        </a>
      </div>
    </nav>
  );
};

StudentNavbar.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default StudentNavbar;
