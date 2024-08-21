import React from "react";

const Header = () => {
    return (
        <>
            <header className="masthead">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Welcome to Bruin Chalet</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">A cabin in Big Bear</h2>
                            <a className="btn btn-primary" href="#about">Book Now</a>
                        </div>
                    </div>
                </div>
            </header>
            {/* <section className="about-section text-center" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-4">Built with Bootstrap 5</h2>
                            <p className="text-white-50">
                                Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                                <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                                The theme is open source, and you can use it for any purpose, personal or commercial.
                            </p>
                        </div>
                    </div>
                    <img className="img-fluid" src="assets/img/ipad.png" alt="..." />
                </div>
            </section> */}
        </>
    )
}

export default Header;