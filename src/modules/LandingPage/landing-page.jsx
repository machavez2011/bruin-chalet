import React from "react";
import BookingModal from "./components/BookingModal";
import Header from "./components/Header";
import Activities from "./components/Activities";
import Footer from "../Footer";

const LandingPage = ({ showModal, handleClose, openModal }) => {
  return (
    <>
      <Header openModal={openModal} />

      <BookingModal showModal={showModal} handleClose={handleClose} />

      <Activities />

      <Footer />
    </>
  );
};

export default LandingPage;
