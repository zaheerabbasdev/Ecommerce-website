import React from "react";
import { useNavigate } from "react-router-dom";
import "./Collection.css";
import Cards from "./Cards";
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-2.png";
import image4 from "../assets/images/image-2.png";
import image5 from "../assets/images/image-2.png";
import star from "../assets/images/star.png";


const Collection = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      id: 6,  // Unique ID for each product
      image: image1,
      title: "Kid Tapered Slim Fit Trouser",
      price: "$38",
      reviewsCount: 123,
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description2:"100% Original product. Cash on delivery is available on this product. Easy return and exchange policy within 7 days.",
      relatedImages: [image1],
    },
    {
      id: 7,
      image: image2,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
      reviewsCount: 123,
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description2:"100% Original product. Cash on delivery is available on this product. Easy return and exchange policy within 7 days.",
      relatedImages: [image2],
    },
    {
      id: 8,
      image: image3,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
      reviewsCount: 123,
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description2:"100% Original product. Cash on delivery is available on this product. Easy return and exchange policy within 7 days.",
      relatedImages: [image3],
    },
    {
      id: 9,
      image: image4,
      title: "Girl Round Neck Pure Cotton T-shirt",
      price: "$100",
      reviewsCount: 123,
      description: "Easy cotton T-shirt...",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description2:"100% Original product. Cash on delivery is available on this product. Easy return and exchange policy within 7 days.",
      relatedImages: [image4],
    },
       {
      id: 10,
      image: image5,
      title: "Girl Round Neck Pure Cotton T-shirt",
      price: "$100",
      reviewsCount: 123,
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description2:"100% Original product. Cash on delivery is available on this product. Easy return and exchange policy within 7 days.",
      relatedImages: [image5],
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