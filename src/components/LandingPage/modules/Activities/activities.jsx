import React from "react";

const Activities = () => {
    return (
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/activities/WelcomeTheVillage.webp" alt="..." /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>The Village</h4>
                            <p className="text-black-50 mb-0">At the heart. of Big Bear Lake you will find a charming district known as The Village that serves as a hub for shopping, sightseeing, dining and nightlife.</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="assets/img/activities/BigBearLake.jpg" alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4>Big Bear Lake</h4>
                                    <p className="mb-0 text-black-50">Big Bear Lake is the jewel of the San Bernardino National Forest and known for excellent fishing, snowboarding and skiing, hiking, and mountain biking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="assets/img/activities/BigBearSkiing.png" alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4>Skiing</h4>
                                    <p className="mb-0 text-black-50">Big Bear offers the best skiing and snowboarding experiences in Southern California at Snow Summit and Bear Mountain ski resorts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities;