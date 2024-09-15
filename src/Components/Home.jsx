import React, { useState } from "react"; // Import useState
import "./Home.css";
import abbas from "../assets/images/ecommerce.webp";
import Collection from "./Collection";
import BestSellers from "./BestSellers";

const Home = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  return (
    <div>
      <section
        className={`hero-section ${!isContentVisible ? "slide-down" : ""}`}
        id="home"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Unleash Your Shopping Experience</h1>
              <p>
                Explore our exclusive collection of high-quality products
                designed to meet all your needs. From the latest trends to
                timeless essentials, we have something for everyone. Enjoy
                seamless shopping with unbeatable deals and exceptional service.
                Start your journey with us today and discover what makes
                Zaheer's Store your go-to destination for all things amazing.
                Shop now and experience the difference!
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
      <Collection /> {/* Add Collection component here */}
      <BestSellers /> {/* Add BestSellers component here */}
    </div>
  );
};

export default Home;
