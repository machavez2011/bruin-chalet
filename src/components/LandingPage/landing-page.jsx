import React from "react";
import BookingModal from "./modules/BookingModal";
import Header from "./modules/Header";
import Activities from "./modules/Activities";
import Signup from "./modules/Signup";
import Contact from "./modules/Contact";

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
