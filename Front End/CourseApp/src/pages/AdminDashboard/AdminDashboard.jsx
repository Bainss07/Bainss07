import { useState } from "react";
import { ProfileCard, CourseManager, StudentList, AdminSidebar, TopNavbar } from "../../components/Index";

const AdminDashboard = () => {
  const [admin] = useState({
    firstName: "Jane",
    isAdmin: true,
    adminID: "A123456",
  });

  const registeredStudents = [
    { id: "S001", name: "John Doe", program: "B.Sc. in Software Engineering" },
    { id: "S002", name: "Alice Smith", program: "B.Sc. in Computer Science" },
    { id: "S003", name: "Bob Brown", program: "B.Sc. in Information Technology" },
  ];

  const [courses, setCourses] = useState([
    {
      code: 'CS101',
      name: 'Introduction to Computer Science',
      startDate: '2024-10-01',
      endDate: '2024-12-15',
      description: 'This course provides an introduction to the field of computer science.',
    },
    {
      code: 'MATH202',
      name: 'Calculus II',
      startDate: '2024-10-10',
      endDate: '2024-12-20',
      description: 'A continuation of Calculus I, covering integration techniques and applications.',
    },
    {
      code: 'HIST303',
      name: 'World History',
      startDate: '2024-10-05',
      endDate: '2024-12-18',
      description: 'An overview of world history from ancient times to the modern era.',
    },
  ]);

  const [courseSearchTerm, setCourseSearchTerm] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formState, setFormState] = useState({
    courseName: "",
    courseStartDate: "",
    courseEndDate: "",
    courseDescription: "",
  });

  const handleCreateCourse = (e) => {
    e.preventDefault();
    const newCourse = {
      code: `CS${courses.length + 101}`,
      name: formState.courseName,
      startDate: formState.courseStartDate,
      endDate: formState.courseEndDate,
      description: formState.courseDescription,
    };
    setCourses([...courses, newCourse]);
    resetForm();
  };

  const handleDeleteCourse = (courseCode) => {
    setCourses(courses.filter((course) => course.code !== courseCode));
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setFormState({
      courseName: course.name,
      courseStartDate: course.startDate,
      courseEndDate: course.endDate,
      courseDescription: course.description,
    });
    setIsModalOpen(true);
  };

  const handleUpdateCourse = (e) => {
    e.preventDefault();
    const updatedCourses = courses.map((course) =>
      course.code === editingCourse.code
        ? { ...course, ...formState }
        : course
    );
    setCourses(updatedCourses);
    closeModal();
    resetForm();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCourse(null);
  };

  const resetForm = () => {
    setFormState({
      courseName: "",
      courseStartDate: "",
      courseEndDate: "",
      courseDescription: "",
    });
  };

  const handleViewMessages = () => {
    setSubmittedMessages([
      { id: 1, message: "Need help with registration", student: "John Doe" },
      { id: 2, message: "Question about course requirements", student: "Alice Smith" },
    ]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar handleViewMessages={handleViewMessages} />
      <main className="flex-1 p-5 ml-64">
        <TopNavbar admin={admin} />
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProfileCard admin={admin} />
          <CourseManager
            courses={courses}
            setCourses={setCourses}
            formState={formState}
            setFormState={setFormState}
            courseSearchTerm={courseSearchTerm}
            setCourseSearchTerm={setCourseSearchTerm}
            handleCreateCourse={handleCreateCourse}
            handleDeleteCourse={handleDeleteCourse}
            handleEditCourse={handleEditCourse}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            handleUpdateCourse={handleUpdateCourse}
          />
          <StudentList registeredStudents={registeredStudents} />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
