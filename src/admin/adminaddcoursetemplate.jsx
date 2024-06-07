
import AddcourseForm from './addcourse';
import AddbatchForm from './addbatch';

const AdminPanel = ({ onAddcourse, onAddbatch ,courses}) => {
  return (
    <div style={{ padding: '20px', minWidth: '400px' }}>
      <h2 style={{ color: 'black' }}>Admin Panel</h2>
      <AddcourseForm onAddcourse={onAddcourse} />
      <AddbatchForm onAddbatch={onAddbatch}  courses={courses} />
    </div>
  );
};

export default AdminPanel;
