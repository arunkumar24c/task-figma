import React from "react";
import "./navbar.css";
import "animate.css";
import logo from "../../assest/logo.png";
import logos from "../../assest/traingle.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        {/* img */}
        <img
          src={logo}
          alt=""
          className="logo animate__animated animate__lightSpeedInRight"
        />
        <div className="text">
          <h3 className="text-1 animate__animated animate__bounce">
            Expertise
          </h3>
          <h3 className="text-2 animate__animated animate__bounce">Work</h3>
          <h3 className="text-2 animate__animated animate__bounce">Contact</h3>
        </div>
      </div>
      {/* para */}
      <div className="para-container">
        <h1 className="para">
          We're Digital Agency Elevating
          <br />
          Brands Through
          <span className="line animate__animated animate__lightSpeedInRight">
            {" "}
            Branding,
            <br />
            Web Design, And Marketing <br />
          </span>
          Expertise.
        </h1>
      </div>
      <div className="content">
        <div className="left-content">
          <p>
            Based in Kolkata & Ooty
            <br />
            <span className="size">Born in Kolkata </span>
          </p>
          <p className="size-1">
            Design-driven
            <br />
            <span className="size">Digital agency, </span>
          </p>
          <p className="size-1">
            Branding, digital
            <br />
            <span className="size">& communication</span>
          </p>
        </div>
        <div className="right-content">
          <img
            src={logos}
            alt=""
            className="img animate__animated animate__flip"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
