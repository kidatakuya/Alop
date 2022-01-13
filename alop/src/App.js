// import logo from './logo.svg';
import { HomePage , CourseDetail, ErrorPage, CourseList } from './components';
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
        <Route path="/CourseDetail/id=:courseId" element={<CourseDetail />} />
        <Route path="/CourseList/category=:categoryId" element={<CourseList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </>
  );
}

export default App;
