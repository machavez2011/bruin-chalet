import React from "react";
import { Button } from "react-bootstrap";

const Header = ({ openModal }) => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">
              Welcome to Bruin Chalet
            </h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              A cabin in Big Bear
            </h2>
            <Button variant="primary" className="" onClick={openModal}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
