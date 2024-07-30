import React from "react";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = ({ openModal }) => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <Container className="px-4 px-lg-5">
                <Navbar.Brand href="#page-top">Bruin Chalet Big Bear</Navbar.Brand>
                <Button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </Button>
                <Navbar.Collapse id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
                    </ul>
                    <Button variant="primary" className="" onClick={openModal}>Check Availability</Button>
                </Navbar.Collapse>
            </Container>
        </Nav>
    )
}

export default NavBar;