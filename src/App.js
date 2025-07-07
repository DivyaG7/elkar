import './App.css';
import Home from './pages/Home';
import Room from './pages/Room';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './responsive.css';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/logo.png';

import ScrollTopButton from './components/ScrollTopButton';


// Wrapper to use location inside
function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname !== "/") return; // only run preloader for "/"

    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("exit");
      }

      setTimeout(() => {
        setLoading(false);
      }, 800); // animation duration
    }, 2000); // preloader wait

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App">
      {loading ? (
        <div id="preloader" className="d-flex justify-content-center align-items-center vh-100 bg-dark">
          <img src={logo} alt='logo' className="logo-animation" />
        </div>
      ) : (
        <>
          <div className="main-content animate-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/room" element={<Room />} />
            </Routes>
          </div>
          <ScrollTopButton />
        </>
      )}
    </div>
  );
}

// Main export
export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
