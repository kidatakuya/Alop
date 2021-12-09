// import logo from './logo.svg';
import { HomePage , CourseDetail, ErrorPage } from './components';
import './ress.scss'
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CourseDetail/:courseId" element={<CourseDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </>
  );
}

export default App;
