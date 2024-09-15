import React from "react";
import "./BestSellers.css"; // Create this CSS file for styles
import Cards from "./Cards"; // Import the Cards component
import image1 from "../assets/images/image-11.png";
import image2 from "../assets/images/image-12.png";
import image3 from "../assets/images/image-13.png";
import image4 from "../assets/images/image-14.png";
import image5 from "../assets/images/image-15.png";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";

const BestSellers = () => {
  const bestSellersData = [
    { image: image1, title: "Men's Premium T-shirt", price: "$60" },
    { image: image2, title: "Women's Cotton Dress", price: "$120" },
    { image: image3, title: "Unisex Hoodie", price: "$90" },
    { image: image4, title: "Women's High Waist Jeans", price: "$80" },
    { image: image5, title: "Men's Leather Jacket", price: "$150" },
  ];

  return (
    <div className="bestsellers-section" id="bestsellers">
      <div className="container">
        <div className="heading">
          <h1>BEST SELLERS</h1>
        </div>
        <div className="paragraph">
          <p>
            Check out our best sellers, featuring top-quality items that our
            customers love.
          </p>
        </div>
        <div className="row">
          {bestSellersData.map((product, index) => (
            <div className="col-md-2" key={index}>
              <Cards
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>

        <div className="row  customer-support">
          <div className="col-md-4">
            <img src={icon1} alt="icon" />
            <h6>Easy Exchange Policy</h6>
            <p>We offer hassle free exchange policy</p>
          </div>

          <div className="col-md-4">
            <img src={icon2} alt="icon" />
            <h6>7 Days Return Policy</h6>
            <p>We provide 7 days free return policy</p>
          </div>

          <div className="col-md-4">
            <img src={icon3} alt="icon" />
            <h6>Best customer support</h6>
            <p>we provide 24/7 customer support</p>
          </div>
        </div>

        <div className="row1 subscribtion">
          <h4>Subscribe now & get 20% off</h4>

          <p>
            Stay updated with our latest offers and promotions. Subscribe to our
            newsletter and enjoy an exclusive 20% discount.
          </p>

          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
