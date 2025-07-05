import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  const handleNavClick = (sectionId) => {
    handleClose(); // close navbar

    if (location.pathname === '/') {
      // Already on homepage — scroll directly
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Not on homepage — navigate to home + hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <Navbar expand="lg" variant='dark' className="navbar py-3" expanded={expanded}>
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="120"
            height="auto"
            className="d-inline-block align-top"
            alt="Hotel Logo"
          />
        </Navbar.Brand>

        {/* Hamburger menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center - Nav Links */}
          <Nav className="mx-auto">
            <Nav.Link as="button" className="mx-3 navlink btn btn-link text-white" onClick={() => handleNavClick('home')}>HOME</Nav.Link>
            <Nav.Link as="button" className="mx-3 navlink btn btn-link text-white" onClick={() => handleNavClick('about')}>ABOUT US</Nav.Link>
            <Nav.Link className="mx-3 navlink btn btn-link text-white" href="/room" onClick={handleClose}>ROOMS</Nav.Link>
            <Nav.Link as="button" className="mx-3 navlink btn btn-link text-white" onClick={() => handleNavClick('amenties')}>AMENITIES</Nav.Link>
            <Nav.Link as="button" className="mx-3 navlink btn btn-link text-white" onClick={() => handleNavClick('contact')}>CONTACT US</Nav.Link>
          </Nav>

          {/* Right - Mail and Address */}
          <div className="text-end d-none d-lg-block">
            <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>
              <a href="mailto:elkars@elkarshomestay.com" className="text-decoration-none text-white">
                elkars@elkarshomestay.com
              </a>
              <i className="ms-2 fas fa-envelope"></i>
            </div>
            <div style={{ fontSize: '0.8rem' }}>
              <a href="tel:+917299537537" className="text-decoration-none text-white">
                +91 7299537537
              </a>
              <i className="ms-2 fas fa-phone"></i>
            </div>
            <div style={{ fontSize: '0.8rem' }}>
              <a
                href="https://maps.app.goo.gl/TGsxCWH3mvrVjt4KA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
              >
                Location
              </a>
              <i className="ms-2 fas fa-map-marker-alt"></i>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;
