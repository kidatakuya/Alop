// import logo from './logo.svg';
import { HomePage , MyPage } from './components';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MyPage/:courseId" element={<MyPage />} />
      </Routes>
      
    </>
  );
}

export default App;
