import React from "react";
import CalendarPicker from './modules/Calendar';
import NavBar from "./modules/NavBar/nav-bar";
import Header from './modules/Header';
import Project from './modules/Project';
import Signup from './modules/Signup';
import Contact from './modules/Contact';

const LandingPage = () => {
    return (
        <>
            <NavBar />

            <Header />

            <CalendarPicker />

            <Project />

            <Signup />

            <Contact />
        </>
    )
}

export default LandingPage;