import React from "react";
import { Col, Container, Image, Row } from 'react-bootstrap';

const Activities = () => {
    return (
        <section className="projects-section bg-light" id="projects">
            <Container className="px-4 px-lg-5">
                <Row className="gx-0 mb-4 mb-lg-5 align-items-center">
                    <Col xl={8} lg={7}><Image className="img-fluid mb-3 mb-lg-0" src="assets/img/activities/WelcomeTheVillage.webp" alt="..." /></Col>
                    <Col xl={4} lg={5}>
                        <div className="featured-text text-center text-lg-left">
                            <h4>The Village</h4>
                            <p className="text-black-50 mb-0">At the heart. of Big Bear Lake you will find a charming district known as The Village that serves as a hub for shopping, sightseeing, dining and nightlife.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="gx-0 mb-5 mb-lg-0 justify-content-center">
                    <Col lg={6}><Image className="img-fluid" src="assets/img/activities/BigBearLake.jpg" alt="..." /></Col>
                    <Col lg={6}>
                        <div className="text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4>Big Bear Lake</h4>
                                    <p className="mb-0 text-black-50">Big Bear Lake is the jewel of the San Bernardino National Forest and known for excellent fishing, snowboarding and skiing, hiking, and mountain biking.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="gx-0 justify-content-center">
                    <Col lg={6}><Image className="img-fluid" src="assets/img/activities/BigBearSkiing.png" alt="..." /></Col>
                    <Col lg={6} className="order-lg-first">
                        <div className="text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4>Skiing</h4>
                                    <p className="mb-0 text-black-50">Big Bear offers the best skiing and snowboarding experiences in Southern California at Snow Summit and Bear Mountain ski resorts.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Activities;