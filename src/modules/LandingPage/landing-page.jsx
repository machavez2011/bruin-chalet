import React from "react";
import BookingModal from "./components/BookingModal";
import Header from "./components/Header";
import Activities from "./components/Activities";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

const LandingPage = ({ showModal, handleClose, openModal }) => {
  return (
    <>
      <Header openModal={openModal} />

      <BookingModal showModal={showModal} handleClose={handleClose} />

      <Activities />

      <Signup />

      <Contact />
    </>
  );
};

export default LandingPage;
