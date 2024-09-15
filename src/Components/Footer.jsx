import React, { useEffect } from "react";
import "./Footer.css"; // Import the CSS for Footer
import facebook from "../assets/images/facebook.png";
import WhatsApp from "../assets/images/WhatsApp.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import email from "../assets/images/email.png";
import phone_call from "../assets/images/phone-call.png";
import location from "../assets/images/location.png";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="row">
        <div className="col-md-4">
          <h3>Mission</h3>
          <p className="text-justify">
            Our mission is to offer top-quality products with exceptional
            customer service, ensuring a seamless shopping experience that
            combines convenience, affordability, and sustainability. We strive
            to provide innovative solutions that meet the evolving needs of our
            customers, while fostering a greener, more responsible future
          </p>
        </div>
        <div className="col-md-2">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#collection">Collection</a>
            </li>
            <li>
              <a href="#bestsellers">Best Seller</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=100027804542462"
              >
                <img src={facebook} alt="facebook" className="social-icon" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://wa.me/+923139804929">
                <img src={WhatsApp} alt="WhatsApp" className="social-icon" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC3PHKti_MhDr_o1xqmlvaCg"
              >
                <img src={youtube} alt="youtube" className="social-icon" />
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/zaheerabbas6145/?hl=en"
              >
                <img src={instagram} alt="instagram" className="social-icon" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>Get in Touch</h3>
          <ul>
            <li>
              <a href="mailto:zabbas092002@gmail.com">
                <img src={email} alt="email" className="social-icon" />
                Zabbas092002@gmail.com
              </a>
            </li>
            <li>
              <img src={phone_call} alt="phone_call" className="social-icon" />
              <a href="tel:+923019711007">+923139804929</a>
            </li>
            <li>
              <img src={location} alt="location" className="social-icon" />
              <a href="https://goo.gl/maps/ZaheerAbbasLocation" target="blank">
                Village Tano Tehsil Lahor Distt Swabi
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <p className="text-copyright text-center">
          © 2024 Ecommerce Store All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
