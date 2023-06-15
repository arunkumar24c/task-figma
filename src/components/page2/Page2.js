import React from "react";
import "./page2.css";
import "animate.css";


const Page2 = () => {
  return (
    <div className="containers">
      {/* left */}
      <div className="left-containers">
        <h1 className="h1">
          Let's Discuss Your
          <br />
          Design Needs
        </h1>
        {/* para */}
        <p className="title">
          If you are interested in learning more about our services or
          <br />
          would like to discuss your design needs, please don't
          <br />
          hesitate to get in touch. Our team is always here to answer
          <br />
          your questions and provide you with the information you
          <br />
          need to make an informed decision.
        </p>
        {/* input */}
        <div className="inputs">
          <input type="text" className="input" placeholder="name" />
          <input type="email" className="input-1" placeholder="email" />
          <button >
            let's do it
          </button>
        </div>
        <p className="place">Kolkata & Ooty</p>
        <p>hello@thecreativhive.com </p>
        <div className="footer">
          <p className="foot"> thecreativhive</p>
        </div>
      </div>
      {/* right */}
      <div className="right-containers">
        <div className="texts">
          <p className="time">Hour</p>

          <p className="time">Mon-Fri</p>

          <p className="times">10pm-6pm</p>
        </div>
        <div className="texts-2">
          <p className="profile">Follow-us</p>

          <p className="profiles">Instagram</p>
          <p className="profiles">LinkedIn</p>
        </div>
        <div className="texts-3">
          <p className="contact">Home</p>
          <p className="contact">Work</p>
          <p className="contact">Services</p>
          <p className="contact">Contact</p>
        </div>
        <span className="end">Top</span>
      </div>
    </div>
  );
};

export default Page2;
