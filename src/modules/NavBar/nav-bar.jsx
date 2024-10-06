import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/js/src/collapse.js";

const NavBar = ({ openModal }) => {
  return (
    <>
      <Nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <Container className="px-4 px-lg-5">
          <Navbar.Brand href="#page-top">Bruin Chalet Big Bear</Navbar.Brand>
          <Button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </Button>
          <Navbar.Collapse id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <Link className="nav-item nav-link" to="/">
                About
              </Link>
              <Link className="nav-item nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-item nav-link" to="/photos">
                Photos
              </Link>
            </ul>
            <Button variant="primary" className="" onClick={openModal}>
              Check Availability
            </Button>
          </Navbar.Collapse>
        </Container>
      </Nav>
      <Outlet />
    </>
  );
};

export default NavBar;
