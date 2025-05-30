import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png'

const Footer = () => {

  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert('Please agree to the terms and policies before subscribing.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, agreed }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Subscribed successfully!');
        setEmail('');
        setAgreed(false);
      } else {
        alert(result.error || 'Failed to subscribe');
      }
    } catch (error) {
      console.error(error);
      alert('Server error');
    }
  };


  return (
    <footer className="bg-black text-white py-5 px-4 px-md-5">
      <div className="container">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-md-4 mb-4">
            <img src={logo} alt="Logo" className="mb-2" style={{ width: '130px' }} />
            <p style={{ fontSize: '0.9rem' }}>
              Whether it's a romantic escape, a family vacation, or a solo retreat, we're here to make your time in Kodaikanal truly unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h1 className="mb-4 fs-4">Quick Links</h1>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              <li><a href="#about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#rooms" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#amenties" className="text-white text-decoration-none">Amenities</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h1 className="mb-4 fs-4">Contact</h1>
            <ul className="list-unstyled small" style={{ fontSize: '0.9rem' }}>
              <li><i className="me-2 fas fa-envelope"></i><a href="mailto:elkarshomestay@gmail.com" className="text-decoration-none text-white"> elkarshomestay@gmail.com </a></li>
              <li><i className="me-2 fas fa-phone"></i><a href="tel:+917299537537" className="text-decoration-none text-white">
                +91 7299537537
              </a></li>
              <li><i className="me-2 fas fa-map-marker-alt"></i> <a
                href="https://maps.app.goo.gl/TGsxCWH3mvrVjt4KA"  // Replace with exact location URL if available
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
              >
                Address
              </a></li>
            </ul>
          </div>
        </div>

        <hr className="border-top border-light opacity-25 my-4" />

        {/* Newsletter Section */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h6 className="mb-0">Sign Up To Get Latest Update</h6>
          </div>
          <div className="col-md-6">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter Your E-mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn" style={{ backgroundColor: '#b88659', color: 'white' }}>
                Submit
              </button>
            </form>
            <div className="form-check mt-2">
              <input className="form-check-input"
                type="checkbox"
                id="agreeCheck"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)} />
              <label className="form-check-label small" htmlFor="agreeCheck">
                I agree to all terms & policies
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
