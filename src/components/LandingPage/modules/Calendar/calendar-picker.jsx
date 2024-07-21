import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import { Container, Col, Row, Button } from "react-bootstrap";

const CalendarPicker = () => {
    const [guests, setGuests] = useState(2);
    const [pets, setPets] = useState(0);
    const unavailableDates = ['7/26/2024', '8/1/2024', '7/20/2024', '7/1/2024', '7/26/2024']

    const onChangeEvent = value => {
        console.log(value);
    };
    const tileDisabled = ({ date }) => {
        const activeDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        const today = new Date();
        return date <= today || unavailableDates.includes(activeDate) ? true : false;
    }

    return(
        <Container>
            <Row>
                <Col>
                    <Calendar 
                        onChange={onChangeEvent} 
                        tileDisabled={tileDisabled}
                        selectRange={true}
                    />
                </Col>
                <Col>
                    <Row>
                        <Col>Guests</Col>
                        <Col>
                            <Button variant="primary" onClick={() => setGuests(guests + 1)}>+</Button>
                            {guests}
                            <Button variant="danger" onClick={() => setGuests(guests - 1)}>-</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Pets</Col>
                        <Col>
                            <Button variant="primary" onClick={() => setPets(pets + 1)}>+</Button>
                            {pets}
                            <Button variant="danger" onClick={() => setPets(pets - 1)}>-</Button>
                        </Col>
                    </Row>

                    Dates &nbsp;
                </Col>
            </Row>
        </Container>
    )
}

export default CalendarPicker;