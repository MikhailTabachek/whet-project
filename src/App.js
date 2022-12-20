import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Disclaimer from './pages/Disclaimer/Disclaimer';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/disclaimer" element={<Disclaimer/>} />
      </Routes>
    </>
  );
}

export default App;
