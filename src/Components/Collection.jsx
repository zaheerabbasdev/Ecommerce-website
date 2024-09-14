// Collection.jsx
import React from "react";
import "./Collection.css";
import Cards from "./Cards"; // Correct import
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import image4 from "../assets/images/image-4.png";
import image5 from "../assets/images/image-5.png";
import image6 from "../assets/images/image-6.png";
import image7 from "../assets/images/image-7.png";
import image8 from "../assets/images/image-8.png";
import image9 from "../assets/images/image-9.png";
import image10 from "../assets/images/image-10.png";


const Collection = () => {
  const cardData = [
    { image: image1, title: "Kid Tapered Slim Fit Trouser", price: "$76" },
    { image: image2, title: "Men Round Neck Pure Cotton T-shirt", price: "$85" },
    { image: image3, title: "Boy Round Neck Pure Cotton T-shirt", price: "$90" },
    { image: image4, title: "Women Zip-Front Relaxed Fit Jacket", price: "$120" },
    { image: image5, title: "Men Tapered Fit Flat-Front Trousers", price: "$150" },
    { image: image6, title: "PGirls Round Neck Cotton Top", price: "$76" },
    { image: image7, title: "Women Zip-Front Relaxed Fit Jacket", price: "$85" },
    { image: image8, title: "Kid Tapered Slim Fit Trouser", price: "$90" },
    { image: image9, title: "Men Printed Plain Cotton Shirt", price: "$120" },
    { image: image10, title: "Women Zip-Front Relaxed Fit Jacket", price: "$150" },
  
  
  ];

  return (
    <div className="collection-section" id="collection">
      <div className="container">
        <div className="heading">
          <h1>LATEST COLLECTIONS</h1>
        </div>
        <div className="paragraph">
          <p>
            Explore our latest collection of trendy and comfortable clothing, designed to fit your lifestyle. From casual tees to stylish jackets, we’ve got something for everyone.

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
