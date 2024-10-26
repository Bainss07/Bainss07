
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'; 
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';


const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
    </Router>
  );
};

export default App;
