import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-modal";

const CourseManager = ({
  courses,
  formState,
  setFormState,
  courseSearchTerm,
  setCourseSearchTerm,
  handleCreateCourse,
  handleDeleteCourse,
  handleEditCourse,
  isModalOpen,
  closeModal,
  handleUpdateCourse,
}) => {
  const { courseName, courseStartDate, courseEndDate, courseDescription } = formState;

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200" id="courses">
      {/* Manage Courses Card */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Courses</h2>

      <form onSubmit={handleCreateCourse}>
        <div className="grid grid-cols-1 gap-6 mb-8">
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setFormState({ ...formState, courseName: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="date"
              value={courseStartDate}
              onChange={(e) => setFormState({ ...formState, courseStartDate: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />

            <input
              type="date"
              value={courseEndDate}
              onChange={(e) => setFormState({ ...formState, courseEndDate: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <textarea
            placeholder="Course Description"
            value={courseDescription}
            onChange={(e) => setFormState({ ...formState, courseDescription: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700"
          >
            Add Course
          </button>
        </div>
      </form>

      <h2 className="text-2xl font-semibold mb-3">Course List</h2>
      <input
        type="text"
        placeholder="Search courses"
        value={courseSearchTerm}
        onChange={(e) => setCourseSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
      />
      <ul className="space-y-4">
        {courses
          .filter((course) =>
            course.name.toLowerCase().includes(courseSearchTerm.toLowerCase())
          )
          .map((course) => (
            <li
              key={course.code}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg"
            >
              <div>
                <h3 className="text-xl font-bold">{course.name}</h3>
                <p className="text-gray-600">
                  {course.startDate} - {course.endDate}
                </p>
                <p>{course.description}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEditCourse(course)}
                  className="text-blue-500"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteCourse(course.code)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
      </ul>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2 className="my-4 font-bold text-3xl ">Edit Course</h2>
        <form onSubmit={handleUpdateCourse}>
          <input
            type="text"
            placeholder="Course Name"
            className="p-2 border border-gray-300 rounded mb-2 w-full"
            value={courseName}
            onChange={(e) => setFormState({ ...formState, courseName: e.target.value })}
            required
          />
          <input
            type="date"
            className="p-2 border border-gray-300 rounded mb-2 w-full"
            value={courseStartDate}
            onChange={(e) => setFormState({ ...formState, courseStartDate: e.target.value })}
            required
          />
          <input
            type="date"
            className="p-2 border border-gray-300 rounded mb-2 w-full"
            value={courseEndDate}
            onChange={(e) => setFormState({ ...formState, courseEndDate: e.target.value })}
            required
          />
          <textarea
            placeholder="Course Description"
            className="p-2 border border-gray-300 rounded mb-2 w-full"
            value={courseDescription}
            onChange={(e) => setFormState({ ...formState, courseDescription: e.target.value })}
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Update Course
          </button>
          <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2">
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

CourseManager.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  setCourses: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    courseName: PropTypes.string,
    courseStartDate: PropTypes.string,
    courseEndDate: PropTypes.string,
    courseDescription: PropTypes.string,
  }).isRequired,
  setFormState: PropTypes.func.isRequired,
  courseSearchTerm: PropTypes.string.isRequired,
  setCourseSearchTerm: PropTypes.func.isRequired,
  handleCreateCourse: PropTypes.func.isRequired,
  handleDeleteCourse: PropTypes.func.isRequired,
  handleEditCourse: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleUpdateCourse: PropTypes.func.isRequired,
};

export default CourseManager;
