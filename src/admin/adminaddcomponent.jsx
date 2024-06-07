import AddStudentForm from './addstudentform';
import AddTeacherForm from './addteacherform';

const AdminPanel = ({ onAddStudent, onAddTeacher, batches, courses }) => {
  
  return (
    <div style={{ padding: '20px', minWidth: '400px' }}>
      <h2 style={{ color: 'black' }}>Admin Panel</h2>
      <AddStudentForm onAddStudent={onAddStudent} batches={batches} courses={courses} />
      <AddTeacherForm onAddTeacher={onAddTeacher} batches={batches} courses={courses} />
    </div>
  ); 
};

export default AdminPanel;
