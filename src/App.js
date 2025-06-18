
import './App.css';
import Home from './pages/Home';
import './responsive.css'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/logo.png'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("exit"); // 💥 slide up
      }

      setTimeout(() => {
        setLoading(false); // remove after animation
      }, 800); // match animation duration
    }, 2000); // preloader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div id="preloader" className="d-flex justify-content-center align-items-center vh-100 bg-dark">
          <img src={logo} alt='logo' className="logo-animation" />
        </div>
      ) : (
        <div className="main-content animate-in" >
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
