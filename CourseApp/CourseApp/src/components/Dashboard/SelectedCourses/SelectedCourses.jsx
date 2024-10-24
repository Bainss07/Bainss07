import PropTypes from 'prop-types';

const SelectedCourses = ({ selectedCourses, availableCourses, handleCourseSelection }) => {
  return (
    <div className="mt-5">
      <h1 className='text-2xl my-7 font-semibold'>Selected Courses:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {selectedCourses.map(courseCode => {
          const course = availableCourses.find(c => c.code === courseCode);
          return (
            course && (
              <div key={course.code} className="bg-gray-800 text-white rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                <h3 className="font-bold text-lg">{course.code}: {course.name}</h3>
                <p className="text-sm">{course.description}</p>
                <p className="text-sm"><strong>Credits:</strong> {course.credits}</p>
                <button 
                  onClick={() => handleCourseSelection(course.code)}
                  className="mt-3 px-3 py-1 text-sm bg-red-500 rounded-lg transition duration-300 hover:bg-red-400"
                >
                  Remove
                </button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

SelectedCourses.propTypes = {
  selectedCourses: PropTypes.arrayOf(PropTypes.string).isRequired,
  availableCourses: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
  })).isRequired,
  handleCourseSelection: PropTypes.func.isRequired,
};

export default SelectedCourses;
