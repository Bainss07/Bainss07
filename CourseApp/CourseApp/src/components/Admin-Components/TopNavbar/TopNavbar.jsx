import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopNavbar = ({ admin }) => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md p-3 mb-5 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Welcome, {admin.firstName}</h2>
      <div className="flex items-center gap-2">
        <img
          src="https://ui-avatars.com/api/?name=Jane+Doe"
          alt="User Avatar"
          className="w-14 h-14 rounded-full mr-2"
        />
        <Link to="/">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
};

TopNavbar.propTypes = {
  admin: PropTypes.object.isRequired,
};

export default TopNavbar;
