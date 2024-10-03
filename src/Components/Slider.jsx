import React, { useEffect, useRef } from "react";
import "./Slider.css"; // Import component-specific CSS
import Collection from "./Collection";
import BestSellers from "./BestSellers";

import { initSlider } from "./Slide.js";
import image1 from "../assets/images/cute-woman.jpg";
import image2 from "../assets/images/imagesss.png";
import image3 from "../assets/images/girl.jpg"; // Corrected the image path
import image4 from "../assets/images/slide.png"; // Corrected the image path

const Slider = () => {
  const slidesRef = useRef([]); // Array of slide references
  const radiosRef = useRef([]); // Array of radio button references
  const currentSlide = useRef(1); // Track the current slide

  useEffect(() => {
    initSlider(slidesRef.current, radiosRef.current, currentSlide);
  }, []);

  return (
    <>
      <div id="home" className="slider-container">
        <div className="image-slider">
          {/* Slide 1 */}
          <div
            className="slide"
            id="slide1"
            ref={(el) => (slidesRef.current[0] = el)}
          >
            <img src={image1} alt="Makkah" className="slide-background" />
            <div className="slide-content">
              {/* <h2>Welcome to Zaheer's Store</h2>
              <p>
                Your journey to exclusive products starts here. At Zaheer's
                Store, we pride ourselves on offering a curated selection of
                high-quality products that cater to your every need. From the
                latest trends in fashion to timeless essentials for your home,
                our collection is designed to inspire and delight. Enjoy a
                seamless shopping experience with unbeatable deals and
                exceptional customer service. Whether you're treating yourself
                or searching for the perfect gift, you’ll find everything you
                need right here. Join us on this exciting journey of discovery
                and indulge in a world of exclusive offerings!
              </p> */}
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="slide"
            id="slide2"
            ref={(el) => (slidesRef.current[1] = el)}
          >
            <img src={image2} alt="Process" className="slide-background" />
            <div className="slide-content">
              {/* <h2>High-Quality Products</h2>
              <p>
                Find the latest trends and timeless essentials in one place. At
                Zaheer's Store, we believe in delivering only the best. Our
                collection features high-quality products sourced from trusted
                manufacturers, ensuring durability and satisfaction. From
                stylish apparel to innovative gadgets, each item is carefully
                selected to meet your expectations. We prioritize quality over
                quantity, so you can shop with confidence knowing you're
                investing in products that stand the test of time. Discover the
                difference that premium quality makes in your shopping
                experience!
              </p> */}
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="slide"
            id="slide3"
            ref={(el) => (slidesRef.current[2] = el)}
          >
            <img src={image3} alt="Shop" className="slide-background" />
            <div className="slide-content">
              {/* <h2>Seamless Shopping</h2>
              <p>
                Enjoy unbeatable deals and exceptional service at Zaheer's
                Store. Experience a hassle-free shopping journey at Zaheer's
                Store. Our user-friendly website and intuitive navigation make
                it easy to find exactly what you need. Enjoy secure payment
                options and swift checkout processes designed for your
                convenience. With dedicated customer support available at every
                step, we're here to assist you whenever you need help. Shop
                seamlessly from the comfort of your home and discover how easy
                online shopping can be!
              </p> */}
            </div>
          </div>

          {/* Slide 4 */}
          <div
            className="slide"
            id="slide4"
            ref={(el) => (slidesRef.current[3] = el)}
          >
            <img src={image4} alt="Replacement" className="slide-background" />
            <div className="slide-content">
              {/* <h2>Shop Now</h2>
              <p>
                Discover the best deals and exclusive offers at Zaheer's Store!
                Browse our extensive collection of high-quality products
                tailored to meet your needs. Whether you're searching for the
                latest trends or timeless essentials, we have something for
                everyone. Enjoy a user-friendly shopping experience with secure
                payments and fast shipping. Don’t wait—dive into your next
                shopping adventure today and elevate your lifestyle with our
                amazing finds!
              </p> */}
            </div>
          </div>
        </div>

        {/* Radio buttons for navigation */}
        <div className="radio-buttons">
          <input
            type="radio"
            name="slider-radio"
            id="radio1"
            data-slide="1"
            ref={(el) => (radiosRef.current[0] = el)}
            defaultChecked
          />
          <input
            type="radio"
            name="slider-radio"
            id="radio2"
            data-slide="2"
            ref={(el) => (radiosRef.current[1] = el)}
          />
          <input
            type="radio"
            name="slider-radio"
            id="radio3"
            data-slide="3"
            ref={(el) => (radiosRef.current[2] = el)}
          />
          <input
            type="radio"
            name="slider-radio"
            id="radio4"
            data-slide="4"
            ref={(el) => (radiosRef.current[3] = el)}
          />
        </div>
      </div>

      {/* Collection and BestSellers components */}
      <Collection />
      <BestSellers />
    </>
  );
};

export default Slider;
