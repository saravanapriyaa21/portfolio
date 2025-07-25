import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <BSNavbar.Brand as={NavLink} to="/" className="fw-bold">
          Saravana Priyaa
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
