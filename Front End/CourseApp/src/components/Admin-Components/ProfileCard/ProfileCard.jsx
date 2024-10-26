import PropTypes from 'prop-types';

const ProfileCard = ({ admin }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-3">Profile Information</h2>
      <p><strong>Name:</strong> {admin.firstName}</p>
      <p><strong>Status:</strong> {admin.isAdmin ? "Admin" : "Student"}</p>
      <p><strong>Admin ID:</strong> {admin.adminID}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  admin: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    adminID: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileCard;
