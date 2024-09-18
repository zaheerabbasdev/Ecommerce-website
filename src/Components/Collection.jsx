import React from "react";
import { useNavigate } from "react-router-dom";
import "./Collection.css";
import Cards from "./Cards";
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-2.png";
import image4 from "../assets/images/image-2.png";
import image5 from "../assets/images/image-2.png";

const Collection = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      id: 1,  // Unique ID for each product
      image: image1,
      title: "Kid Tapered Slim Fit Trouser",
      price: "$38",
      reviews: 122,
      description: "A lightweight, pullover shirt...",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image1, image2],
    },
    {
      id: 2,
      image: image2,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
      reviews: 98,
      description: "Comfortable cotton T-shirt...",
      sizes: ["S", "M", "L"],
      relatedImages: [image1, image2],
    },
    {
      id: 3,
      image: image3,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
      reviews: 10,
      description: "Comfortable cotton S-shirt...",
      sizes: ["S", "M", "L"],
      relatedImages: [image1, image2],
    },
    {
      id: 4,
      image: image4,
      title: "Girl Round Neck Pure Cotton T-shirt",
      price: "$100",
      reviews: 70,
      description: "Easy cotton T-shirt...",
      sizes: ["S", "M", "L"],
      relatedImages: [image1, image2],
    },
       {
      id: 5,
      image: image5,
      title: "Girl Round Neck Pure Cotton T-shirt",
      price: "$100",
      reviews: 70,
      description: "Easy cotton T-shirt...",
      sizes: ["S", "M", "L"],
      relatedImages: [image1, image2],
    },
    // Add other products
  ];

  const handleImageClick = (product) => {
    // Navigate to the product detail page with the product ID in the URL
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="collection-section" id="collection">
      <div className="container">
        <div className="heading">
          <h1>LATEST COLLECTIONS</h1>
           <p>
            Explore our latest collection of trendy and comfortable clothing, <br />designed to fit your lifestyle. From casual tees to stylish jackets, we’ve got something for everyone.

          </p>
        </div>
        <div className="row">
          {cardData.map((card) => (
            <div
              className="col-md-2"
              key={card.id}
              onClick={() => handleImageClick(card)}
            >
              <Cards image={card.image} title={card.title} price={card.price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
