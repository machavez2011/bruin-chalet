import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CalendarPicker from "./components/calendar-picker";

const BookingModal = ({showModal, handleClose}) => {
    return (
        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Book Now</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CalendarPicker />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">
                    Close
                </Button>
                <Button variant="primary">
                    Book
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BookingModal;