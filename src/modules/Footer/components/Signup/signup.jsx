import React from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Signup = () => {
    return (
        <section className="signup-section" id="signup">
            <Container className="px-4 px-lg-5">
                <Row className="gx-4 gx-lg-5">
                    <Col md={10} lg={8} className="mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                        <Form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <Row className="input-group-newsletter">
                                <Col><input className="form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></Col>
                                <div className="col-auto"><Button className="btn btn-warning disabled" id="submitButton" type="submit">Notify Me!</Button></div>
                            </Row>
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3 mt-2 text-white">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Signup;