import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Col, Row, Button, Alert, Card } from "react-bootstrap";

const unavailableDates = [
  "7/26/2024",
  "8/1/2024",
  "7/20/2024",
  "7/1/2024",
  "7/26/2024",
];

const CalendarPicker = () => {
  const [guests, setGuests] = useState(2);
  const [pets, setPets] = useState(0);
  const [selectedDates, setSelectedDates] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [fadeEffect, setFadeEffect] = useState(false);

  useEffect(() => {
    if (showWarning) {
      const fadeTimer = setTimeout(() => setFadeEffect(true), 2000);
      const hideTimer = setTimeout(() => setShowWarning(false), 3000);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [showWarning]);

  const onChangeEvent = (value) => {
    const startDate = value[0];
    const endDate = value[1];
    const hasUnavailableDate = unavailableDates.some((date) => {
      let formattedDate = new Date(date);
      return startDate <= formattedDate && endDate >= formattedDate;
    });
    if (hasUnavailableDate) {
      setShowWarning(true);
      setFadeEffect(false);
      setSelectedDates([]);
    } else {
      setSelectedDates(value);
    }
  };

  const tileDisabled = ({ date }) => {
    const activeDate =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    const today = new Date();
    return date <= today || unavailableDates.includes(activeDate)
      ? true
      : false;
  };

  return (
    <Container className="mt-4">
      {showWarning && (
        <Row className="mb-3">
          <Alert
            variant="warning"
            style={{
              opacity: fadeEffect ? 0 : 1,
              transition: "opacity 0.5s ease-out",
            }}
          >
            Your selected dates include unavailable dates.
          </Alert>
        </Row>
      )}

      <Row className="justify-content-center">
        <Col lg={6}>
          <Calendar
            onChange={onChangeEvent}
            tileDisabled={tileDisabled}
            selectRange={true}
            value={selectedDates}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title>Selected Dates</Card.Title>
              <Card.Text>
                Start Date:{" "}
                {selectedDates[0]
                  ? selectedDates[0].toLocaleDateString()
                  : "Not selected"}
              </Card.Text>
              <Card.Text>
                End Date:{" "}
                {selectedDates[1]
                  ? selectedDates[1].toLocaleDateString()
                  : "Not selected"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Row className="mb-3">
            <Col>
              <div className="d-flex align-items-center">
                <span>Guests: </span>
                <Button
                  variant="primary"
                  className="ms-2"
                  onClick={() => setGuests(guests + 1)}
                >
                  +
                </Button>
                <span className="mx-2">{guests}</span>
                <Button
                  variant="danger"
                  onClick={() => setGuests(guests > 0 ? guests - 1 : 0)}
                >
                  -
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <div className="d-flex align-items-center">
                <span>Pets: </span>
                <Button
                  variant="primary"
                  className="ms-2"
                  onClick={() => setPets(pets + 1)}
                >
                  +
                </Button>
                <span className="mx-2">{pets}</span>
                <Button
                  variant="danger"
                  onClick={() => setPets(pets > 0 ? pets - 1 : 0)}
                >
                  -
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarPicker;
