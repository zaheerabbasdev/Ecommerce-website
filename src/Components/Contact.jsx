import React from "react";
import "./Contact.css";
import contact from "../assets/images/contact-image.png";

const Contact = () => {
  return (
    <div>
      <div className="contact-section" id="contact">
        <div className="row">
          <h1>Contact US</h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src={contact} alt="contact image" />
          </div>

          <div className="col-md-6">
            <h4>Our Store</h4>
            <p>54709 Willms Station Suite 350, Washington, USA</p>
            <a href="tel:0313980499">Tel: (415) 555-0132</a>
            <a href="milto:zabbas09220@gmail.com">Email: admin@forever.com</a>
            <h5>Careers at Forever</h5>
            <p>Learn more about our teams and job openings.</p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
