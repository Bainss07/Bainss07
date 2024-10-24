// StudentDashboard.js
import { useState } from 'react';
import {Sidebar, StudentNavbar, ProfileInfo, CourseRegistration, SelectedCourses, ContactForm, CourseDetailsModal } from '../../components/Index';

const StudentDashboard = () => {
  const [student] = useState({
    firstName: 'John',
    isAdmin: false,
    studentID: 'S123456',
    department: 'Computer Science',
    program: 'B.Sc. in Software Engineering',
  });

  const [term, setTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courseSearch, setCourseSearch] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const availableCourses = [
    { code: 'CS101', name: 'Introduction to Computer Science', description: 'Learn the basics of programming and computer science concepts.', credits: 3 },
    { code: 'CS102', name: 'Data Structures', description: 'Understanding data organization and manipulation.', credits: 4 },
    { code: 'CS103', name: 'Algorithms', description: 'Explore algorithm design and analysis.', credits: 4 },
    { code: 'CS104', name: 'Web Development', description: 'Build dynamic websites using HTML, CSS, and JavaScript.', credits: 3 },
    { code: 'CS105', name: 'Database Systems', description: 'Learn about relational databases and SQL.', credits: 3 },
  ];

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleCourseSelection = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      if (selectedCourses.length < 5) {
        setSelectedCourses([...selectedCourses, course]);
      } else {
        alert('You can only register for up to 5 courses.');
      }
    }
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    console.log('Contact message submitted:', contactMessage);
    setContactMessage('');
  };

  const openCourseDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeCourseDetails = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-5 ml-64">
        <StudentNavbar firstName={student.firstName} />
        
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-5" id="dashboard">Student Dashboard</h1>

          <ProfileInfo student={student} />

          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-gray-800">Select Term</h2>
            <select 
              value={term} 
              onChange={handleTermChange} 
              className="mt-2 p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select a term</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
          </div>

          <CourseRegistration 
            availableCourses={availableCourses} 
            courseSearch={courseSearch}
            setCourseSearch={setCourseSearch}
            handleCourseSelection={handleCourseSelection}
            selectedCourses={selectedCourses}
            openCourseDetails={openCourseDetails}
          />

          <SelectedCourses 
            selectedCourses={selectedCourses} 
            availableCourses={availableCourses} 
            handleCourseSelection={handleCourseSelection} 
          />
          
          <ContactForm 
            contactMessage={contactMessage}
            setContactMessage={setContactMessage}
            handleSubmitContact={handleSubmitContact}
          />
        </div>

        {selectedCourse && (
          <CourseDetailsModal 
            selectedCourse={selectedCourse} 
            closeCourseDetails={closeCourseDetails} 
          />
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
