import React, { useState } from "react";
import "./Navbar.css";
import "../assets/styles/colors.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
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
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Shop</a>
            </li>
            <li>
              <a href="#battery">About</a>
            </li>
            <li>
              <a href="#locations">Contact Us</a>
            </li>
            

            <li className="nav-icon">
              <a
                href="#search"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>

             <li className="nav-icon">
              <a
                href="#cart"
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </li>

              <li className="nav-icon">
              <a
                href="#user"
              >
                <i class="fa-solid fa-user"></i>
              </a>
            </li>


          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
