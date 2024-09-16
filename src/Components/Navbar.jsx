import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";
import "../assets/styles/colors.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // React Router's navigate function

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle navigation when the search bar is clicked
  const handleSearchClick = () => {
    navigate("/collection"); // Immediately navigate to the collection page
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collection">Collection</Link></li>
              <li><Link to="/bestseller">Best Seller</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>

              {/* Search bar container */}
              <li className="nav-icon search-container">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Search Here"
                  onClick={handleSearchClick} // Navigate immediately when clicked
                />
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
    </>
  );
};

export default Navbar;
