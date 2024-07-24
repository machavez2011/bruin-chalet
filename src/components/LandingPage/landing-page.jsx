import React, { useState } from "react";
import BookingModal from './modules/BookingModal';
import NavBar from "./modules/NavBar/nav-bar";
import Header from './modules/Header';
import Project from './modules/Project';
import Signup from './modules/Signup';
import Contact from './modules/Contact';

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <>
            <NavBar openModal={handleShow} />

            <Header />

            <BookingModal showModal={showModal} handleClose={handleClose} />

            <Project />

            <Signup />

            <Contact />
        </>
    )
}

export default LandingPage;