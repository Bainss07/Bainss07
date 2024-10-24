
import PropTypes from 'prop-types';

const ProfileInfo = ({ student }) => {
  return (
    <div className="mb-5 p-4 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-2xl font-semibold text-gray-800">Profile Information</h2>
      <p><strong>Name:</strong> {student.firstName}</p>
      <p><strong>Status:</strong> {student.isAdmin ? 'Admin' : 'Student'}</p>
      <p><strong>Student ID:</strong> {student.studentID}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Program:</strong> {student.program}</p>
    </div>
  );
};

ProfileInfo.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    studentID: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileInfo;
