// import logo from './logo.svg';
import { HomePage , CourseDetail, ErrorPage } from './components';
import './ress.scss'
import './App.css';
import { useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
function App() {

  // ページ移動後のスクロール位置をトップににする。
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
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
