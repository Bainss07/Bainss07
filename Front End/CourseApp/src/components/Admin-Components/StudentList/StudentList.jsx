
import PropTypes from 'prop-types';

const StudentList = ({ registeredStudents }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-3">Registered Students</h2>
      <ul>
        {registeredStudents.map(student => (
          <li key={student.id} className="border-b border-gray-200 py-2">
            <strong>{student.name}</strong> - {student.program}
          </li>
        ))}
      </ul>
    </div>
  );
};

StudentList.propTypes = {
  registeredStudents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
  })).isRequired,
};

export default StudentList;
