import PropTypes from 'prop-types';

const CourseRegistration = ({ availableCourses, courseSearch, setCourseSearch, handleCourseSelection, selectedCourses, openCourseDetails }) => {
  // Filter available courses based on the search input
  const filteredCourses = availableCourses.filter(course =>
    course.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
    course.code.toLowerCase().includes(courseSearch.toLowerCase())
  );

  return (
    <div className="mb-5" id="courses">
      <h2 className="text-2xl font-semibold text-gray-800">Available Courses</h2>
      <input
        type="text"
        placeholder="Search courses..."
        value={courseSearch}
        onChange={(e) => setCourseSearch(e.target.value)}
        className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredCourses.map(course => (
          <div key={course.code} className="bg-white border border-gray-300 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800">{course.code}: {course.name}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-gray-600"><strong>Credits:</strong> {course.credits}</p>
            <div className="mt-3 flex justify-between">
              <button
                onClick={() => handleCourseSelection(course.code)}
                className={`px-3 py-1 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                  selectedCourses.includes(course.code) ? 'bg-red-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {selectedCourses.includes(course.code) ? 'Remove' : 'Add'}
              </button>
              <button 
                onClick={() => openCourseDetails(course)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-400"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CourseRegistration.propTypes = {
  availableCourses: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
  })).isRequired,
  courseSearch: PropTypes.string.isRequired,
  setCourseSearch: PropTypes.func.isRequired,
  handleCourseSelection: PropTypes.func.isRequired,
  selectedCourses: PropTypes.arrayOf(PropTypes.string).isRequired,
  openCourseDetails: PropTypes.func.isRequired,
};

export default CourseRegistration;
