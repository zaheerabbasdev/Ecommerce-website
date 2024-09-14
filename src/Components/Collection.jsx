// Collection.jsx
import React from "react";
import "./Collection.css";
import Cards from "./Cards"; // Correct import
import image from "../assets/images/ecommerce.webp";

const Collection = () => {
  const cardData = [
    { image: image, title: "Product 1", price: "$76" },
    { image: image, title: "Product 2", price: "$85" },
    { image: image, title: "Product 3", price: "$90" },
    { image: image, title: "Product 4", price: "$120" },
    { image: image, title: "Product 5", price: "$150" },
    { image: image, title: "Product 6", price: "$76" },
    { image: image, title: "Product 7", price: "$85" },
    { image: image, title: "Product 8", price: "$90" },
    { image: image, title: "Product 9", price: "$120" },
    { image: image, title: "Product 10", price: "$150" },
  
  
  ];

  return (
    <div className="collection-section" id="collection">
      <div className="container">
        <div className="heading">
          <h1>LATEST COLLECTIONS</h1>
        </div>
        <div className="paragraph">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            illum fuga temporibus molestias nostrum deleniti aperiam.
          </p>
        </div>
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-2" key={index}>
              <Cards image={card.image} title={card.title} price={card.price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
