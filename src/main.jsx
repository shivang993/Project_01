import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Ghb from './App.jsx';
import Contact from './contact/contact.jsx';
import Navbar from './Navbar/navbar.jsx';
import Course from './courses/course.jsx';
import About from './About/about.jsx'
// import The from './App.jsx'; // Home page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
           <Navbar />
      <Routes>
        {/* <Route path="/" element={<The />} />   Home Page */}
   
        <Route path="/" element={<Ghb />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/course" element={<Course />} /> 
            <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  </StrictMode>
);
