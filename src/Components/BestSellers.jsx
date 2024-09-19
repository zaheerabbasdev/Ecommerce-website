import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./BestSellers.css";
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
  const navigate = useNavigate(); // Initialize useNavigate

  // Array with product details including id, image, title, price, reviews, description, and sizes
  const bestSellersData = [
    {
      id: 1,
      image: image1,
      title: "Men's Premium T-shirt",
      price: "$60",
      reviews: 55,
      description: "High-quality premium t-shirt for men.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image1],
    },
    {
      id: 2,
      image: image2,
      title: "Women's Cotton Dress",
      price: "$120",
      reviews: 35,
      description: "Comfortable cotton dress for women.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image2],
    },
    {
      id: 3,
      image: image3,
      title: "Unisex Hoodie",
      price: "$90",
      reviews: 70,
      description: "Stylish hoodie suitable for all.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image3],
    },
    {
      id: 4,
      image: image4,
      title: "Women's High Waist Jeans",
      price: "$80",
      reviews: 45,
      description: "Trendy high-waist jeans for women.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image4],
    },
    {
      id: 5,
      image: image5,
      title: "Men's Leather Jacket",
      price: "$150",
      reviews: 120,
      description: "Classic leather jacket for men.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image5],
    },
  ];

  // Function to handle image click and navigate to ProductDetail component with product data
  const handleImageClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="bestsellers-section" id="bestsellers">
      <div className="container">
        <div className="heading">
          <h1>BEST SELLERS</h1>
        </div>
        <div className="paragraph">
          <p>
            Check out our best sellers, featuring top-quality items that our customers love.
          </p>
        </div>
        <div className="row">
          {bestSellersData.map((product, index) => (
            <div className="col-md-2" key={index} onClick={() => handleImageClick(product)}>
              <Cards image={product.image} title={product.title} price={product.price} />
            </div>
          ))}
        </div>

        <div className="row customer-support">
          <div className="col-md-4">
            <img src={icon1} alt="icon" />
            <h6>Easy Exchange Policy</h6>
            <p>We offer hassle-free exchange policy</p>
          </div>
          <div className="col-md-4">
            <img src={icon2} alt="icon" />
            <h6>7 Days Return Policy</h6>
            <p>We provide a 7-day free return policy</p>
          </div>
          <div className="col-md-4">
            <img src={icon3} alt="icon" />
            <h6>Best Customer Support</h6>
            <p>We provide 24/7 customer support</p>
          </div>
        </div>

        <div className="row1 subscription">
          <h4>Subscribe now & get 20% off</h4>
          <p>
            Stay updated with our latest offers and promotions. Subscribe to our newsletter and enjoy an exclusive 20% discount.
          </p>
          <input type="text" name="email" id="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
