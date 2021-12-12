import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { Navbar as BootstrapNav, Container, Nav } from 'react-bootstrap';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <BootstrapNav sticky="top" className="nav" expand="sm">
      <Container fluid>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <h1>Roi's Portfolio</h1>
        </Fade>
        <BootstrapNav.Toggle aria-controls="navbarScroll" />
        <BootstrapNav.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <ul>
                <li className="nav-btn">
                  <Link to="about" smooth duration={1000}>
                    About
                  </Link>
                </li>
                <li className="nav-btn">
                  <Link to="projects" smooth duration={1000}>
                    Projects
                  </Link>
                </li>
                <li className="nav-btn">
                  <Link to="contact" smooth duration={1000}>
                    Contact
                  </Link>
                </li>
              </ul>
            </Fade>
          </Nav>
        </BootstrapNav.Collapse>
      </Container>
    </BootstrapNav>
  );
};

export default Navbar;
