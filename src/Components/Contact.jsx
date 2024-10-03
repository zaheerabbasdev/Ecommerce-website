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
            <p>Village Tano Tehsil Lahor Distt Swabi</p>
            <a href="tel:+923139804929">Tel: +923139804929</a>
            <a href="milto:zabbas092002@gmail.com">Email: zabbas092002@gmail.com</a>
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
