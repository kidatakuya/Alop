// import logo from './logo.svg';
import { HomePage , CourseDetail, ErrorPage, CourseList, Course, Credit, CreditCheck, CreditCompleted, Login, MyCourseList, ShoppingList, Signup, SignupComplete, SignupConfirmation, FavoriteCourse } from './components';
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
        <Route path="/Course" element={<Course />} />
        <Route path="/Credit" element={<Credit />} />
        <Route path="/CreditCheck" element={<CreditCheck />} />
        <Route path="/CreditCompleted" element={<CreditCompleted />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyCourseList" element={<MyCourseList />} />
        <Route path="/ShoppingList" element={<ShoppingList />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignupComplete" element={<SignupComplete />} />
        <Route path="/SignupConfirmation" element={<SignupConfirmation />} />
        <Route path="/FavoriteCourse" element={<FavoriteCourse />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </>
  );
}

export default App;
