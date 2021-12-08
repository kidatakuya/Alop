// import logo from './logo.svg';
import { HomePage , CourseDetail } from './components';
import './ress.scss'
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CourseDetail/:courseId" element={<CourseDetail />} />
      </Routes>
      
    </>
  );
}

export default App;
