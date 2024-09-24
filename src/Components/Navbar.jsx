import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { CartContext } from "./CartContext";
import "./Navbar.css";
import "../assets/styles/colors.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from context
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
              <a
                id="nav-toggle"
                href="javascript:void(0);" // Prevents page from jumping to top
                onClick={toggleMobileMenu}
              >
                <span
                  className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
                ></span>
              </a>
            </div>
            <ul className={`nav-list ${isMobileMenuOpen ? "open" : ""}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collection">Collection</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              {/* Uncomment the search bar if you need it */}
              {/* <li className="nav-icon search-container">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Search Here"
                  onClick={handleSearchClick} // Navigate immediately when clicked
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </li> */}

              {/* Cart Icon with item count */}
              <li className="nav-icon">
                <Link to="/cart">
                  <i className="fa-solid fa-shopping-cart"></i>
                  <span className="cart-count">
                    {cartItems.length > 0 ? cartItems.length : 0}
                  </span> {/* Display item count or 0 */}
                </Link>
              </li>

              {/* User Icon */}
              <li className="nav-icon">
                <Link to="/login">
                  <i className="fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
