import React from "react";
import BookingModal from "./components/BookingModal";
import Header from "./components/Header";
import Activities from "./components/Activities";

const LandingPage = ({ showModal, handleClose, openModal }) => {
  return (
    <>
      <Header openModal={openModal} />

      <BookingModal showModal={showModal} handleClose={handleClose} />

      <Activities />
    </>
  );
};

export default LandingPage;
