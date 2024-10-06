// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './modules/LandingPage';
import ContactPage from './modules/ContactPage';
import PhotosPage from './modules/PhotosPage';
import NavBar from './modules/NavBar';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <BrowserRouter basename={'/bruin-chalet/'}>
      <Routes>
        <Route path="/" element={<NavBar openModal={handleShow} />}>
          <Route
            index
            element={
              <LandingPage showModal={showModal} handleClose={handleClose} openModal={handleShow} />
            }
          />
          <Route path="contact" element={<ContactPage />} />
          <Route path="photos" element={<PhotosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;