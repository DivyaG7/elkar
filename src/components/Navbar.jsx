import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png'

const NavbarComponent = () => {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <>
      <Navbar expand="lg" variant='dark' className="navbar py-3" expanded={expanded}>
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="120"
              height="auto"
              className="d-inline-block align-top"
              alt="Hotel Logo"
            />
          </Navbar.Brand>

          {/* Hamburger menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Center - Nav Links */}
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="mx-3 navlink" onClick={handleClose}>HOME</Nav.Link>
              <Nav.Link href="#about" className="mx-3 navlink" onClick={handleClose} >ABOUT US</Nav.Link>
              <Nav.Link href="#rooms" className="mx-3 navlink" onClick={handleClose}>ROOMS</Nav.Link>
              <Nav.Link href="#amenties" className="mx-3 navlink" onClick={handleClose}>AMENITIES</Nav.Link>
              <Nav.Link href="#contact" className="mx-3 navlink" onClick={handleClose}>CONTACT US</Nav.Link>
            </Nav>

            {/* Right - Mail and Address */}
            <div className="text-end d-none d-lg-block">
              <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                <a href="mailto:elkarshomestay@gmail.com" className="text-decoration-none text-white">
                  elkarshomestay@gmail.com
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
                  href="https://www.google.com/maps?q=Elkar+Homestay+Location"  // Replace with exact location URL if available
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

    </>
  )
}

export default NavbarComponent