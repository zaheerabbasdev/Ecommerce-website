import React from "react";
import "./MainCollection.css";
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

const MainCollection = () => {
  const cardData = [
    { image: image1, title: "Kid Tapered Slim Fit Trouser", price: "$76" },
    {
      image: image2,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
    },
    {
      image: image3,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
    },
    {
      image: image4,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$120",
    },
    {
      image: image5,
      title: "Men Tapered Fit Flat-Front Trousers",
      price: "$150",
    },
    { image: image6, title: "PGirls Round Neck Cotton Top", price: "$76" },
    {
      image: image7,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$85",
    },
    { image: image8, title: "Kid Tapered Slim Fit Trouser", price: "$90" },
    { image: image9, title: "Men Printed Plain Cotton Shirt", price: "$120" },
    {
      image: image10,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$150",
    },
  ];

  return (
    <div>
      <div className="maincollection-section" id="maincollection">
        <div className="row">
        <h1>Filters</h1>
          <div className="filter-section">
            <h6>Categories</h6>
            <label>
              <input type="checkbox" />
              Men
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Women
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Kids
            </label>
          </div>

          <div className="filter-section">
            <h6>Types</h6>
            <label>
              <input type="checkbox" />
              Topwear
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Bottomwear
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Winterwear
            </label>
          </div>

          <div className="col-md-4 collection">
            <h3>All Collections</h3>
            <form action="">
              <select name="" id="">
                <option value="1">Sorted by: Relavent</option>
                <option value="2">Sorted by: Low to High</option>
                <option value="3">Sorted by: High to Low</option>
              </select>
            </form>
            <div className="row">
              {cardData.map((card, index) => (
                <div className="col-md-2" key={index}>
                  <Cards
                    image={card.image}
                    title={card.title}
                    price={card.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCollection;
