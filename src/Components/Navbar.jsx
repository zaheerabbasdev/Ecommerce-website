import React, { useState } from "react";
import "./Navbar.css";
import "../assets/styles/colors.css";
import abbas from '../assets/images/ecommerce.webp'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsContentVisible(!isContentVisible); // Toggle Hero section visibility
  };

  return (
    <>
      <header className="navigation">
        <div className="nav-container">
          <div className="brand">
            <span>Ecommerce Store</span>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!" onClick={toggleMobileMenu}>
                <span
                  className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
                ></span>
              </a>
            </div>
            <ul className={`nav-list ${isMobileMenuOpen ? "open" : ""}`}>
              <li><a href="#home">Home</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact Us</a></li>

              <li className="nav-icon search-container">
                <input type="text" name="text" id="text" placeholder="Search Here" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>

              <li className="nav-icon">
                <a href="#cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>

              <li className="nav-icon">
                <a href="#user">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className={`hero-section ${!isContentVisible ? 'slide-down' : ''}`} id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>
                Unleash Your Shopping Experience
              </h1>
              <p>
                Explore our exclusive collection of high-quality products designed to meet all your needs. From the latest trends to timeless essentials, we have something for everyone. Enjoy seamless shopping with unbeatable deals and exceptional service. Start your journey with us today and discover what makes Zaheer's Store your go-to destination for all things amazing. Shop now and experience the difference!.
              </p>
              <a
                href="https://www.fiverr.com/zaheerabbas65?up_rollout=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Shop Now
              </a>
            </div>
            <div className="col-md-6">
              <img
                src={abbas} // Adjust the path as needed
                alt="Zaheer Abbas"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
