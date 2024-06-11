import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import TeacherApp from './teacherApp.jsx';
import AdminApp from './adminApp.jsx';
import './index.css';
import Dashboard from './studentComponent/dashboard.jsx';
import Profile from './studentComponent/profile.jsx';
import Attendance from './studentComponent/attendance.jsx';
import Timetable from './studentComponent/timetable.jsx';
import Course from './studentComponent/course.jsx';
import CoursePage from './studentComponent/coursepage.jsx';
import TeacherDashboard from './teacherComponent/teacherdashboard.jsx';
import TeacherProfile from './teacherComponent/teacherprofile.jsx';
import TeacherAttendance from './teacherComponent/teacherattendance.jsx';
import TeacherTimetable from './teacherComponent/teachertimetable.jsx';
import TeacherCourse from './teacherComponent/teachercourse.jsx';
import AdminDashboard from './admin/admindashboard.jsx';
import AdminProfile from './admin/adminprofile.jsx';
import AdminAttendance from './admin/adminattendance.jsx';
import AdminTimetable from './admin/admintimetable.jsx';
import AdminCourse from './admin/admincourse.jsx';
import Adminadd from './admin/adminaddcourse.jsx';
import Signin from './signin.jsx';
import CreatorBadge from './CreatorBadge';

const BodyBackgroundColor = ({ children, color }) => {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, [color]);

  return children || null;
};

const RoleBasedRoute = ({ element, roles }) => {
  const role = localStorage.getItem('role');
  if (roles.includes(role)) {
    return element;
  } else {
    return <Navigate to="/signin" />;
  }
};
const token = localStorage.getItem('token');
const AppWithTokenCheck = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
   
    
  }, []);
  if (token=="null") {
      
    window.location = '/signin';
  }
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<BodyBackgroundColor color="rgb(12, 15, 23)"><Signin /><CreatorBadge /></BodyBackgroundColor>} />
        <Route path="/admin" element={<RoleBasedRoute roles={['admin']} element={<><AdminDashboard /><AdminApp /><CreatorBadge /></>} />} />
        <Route path="/adminprofile" element={<RoleBasedRoute roles={['admin']} element={<><AdminProfile /><AdminApp /><CreatorBadge /></>} />} />
        <Route path="/adminattendance" element={<RoleBasedRoute roles={['admin']} element={<><AdminAttendance /><AdminApp /><CreatorBadge /></>} />} />
        <Route path="/admintimetable" element={<RoleBasedRoute roles={['admin']} element={<><AdminTimetable /><AdminApp /><CreatorBadge /></>} />} />
        <Route path="/admincourse" element={<RoleBasedRoute roles={['admin']} element={<><AdminCourse /><AdminApp /><CreatorBadge /></>} />} />
        <Route path="/adminadd" element={<RoleBasedRoute roles={['admin']} element={<><Adminadd /><AdminApp /><CreatorBadge /></>} />} />
        <Route path="/" element={<RoleBasedRoute roles={['student']} element={<><Dashboard /><App /><CreatorBadge /></>} />} />
        <Route path="/profile" element={<RoleBasedRoute roles={['student']} element={<><Profile /><App /><CreatorBadge /></>} />} />
        <Route path="/attendance" element={<RoleBasedRoute roles={['student']} element={<><Attendance /><App /><CreatorBadge /></>} />} />
        <Route path="/timetable" element={<RoleBasedRoute roles={['student']} element={<><Timetable /><App /><CreatorBadge /></>} />} />
        <Route path="/course" element={<RoleBasedRoute roles={['student']} element={<><Course /><App /><CreatorBadge /></>} />} />
        <Route path="/teacher" element={<RoleBasedRoute roles={['teacher']} element={<><TeacherDashboard /><TeacherApp /><CreatorBadge /></>} />} />
        <Route path="/teacherprofile" element={<RoleBasedRoute roles={['teacher']} element={<><TeacherProfile /><TeacherApp /><CreatorBadge /></>} />} />
        <Route path="/teacherattendance" element={<RoleBasedRoute roles={['teacher']} element={<><TeacherAttendance /><TeacherApp /><CreatorBadge /></>} />} />
        <Route path="/teachertimetable" element={<RoleBasedRoute roles={['teacher']} element={<><TeacherTimetable /><TeacherApp /><CreatorBadge /></>} />} />
        <Route path="/teachercourse" element={<RoleBasedRoute roles={['teacher']} element={<><TeacherCourse /><TeacherApp /><CreatorBadge /></>} />} />
        <Route path="/course/:courseid" element={<RoleBasedRoute roles={['student']} element={<><CoursePage /><App /><CreatorBadge /></>} />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithTokenCheck />
  </React.StrictMode>
);
