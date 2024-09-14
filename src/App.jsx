import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import NavBar from './components/NavBar';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<NavBar openModal={handleShow} />}>
          <Route
            index
            element={
              <LandingPage showModal={showModal} handleClose={handleClose} openModal={handleShow} />
            }
          />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;