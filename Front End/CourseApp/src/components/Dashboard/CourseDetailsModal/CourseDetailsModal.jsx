// CourseDetailsModal.js
import PropTypes from 'prop-types';

const CourseDetailsModal = ({ selectedCourse, closeCourseDetails }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-2">{selectedCourse.code}: {selectedCourse.name}</h2>
        <p className="mb-4">{selectedCourse.description}</p>
        <p><strong>Credits:</strong> {selectedCourse.credits}</p>
        <button 
          onClick={closeCourseDetails}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

CourseDetailsModal.propTypes = {
  selectedCourse: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
  }).isRequired,
  closeCourseDetails: PropTypes.func.isRequired,
};

export default CourseDetailsModal;
