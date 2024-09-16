import React from "react";
import "./MainCollection.css";
import Cards from "./Cards"; 
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
import image11 from "../assets/images/image-11.png";
import image12 from "../assets/images/image-12.png";
import image13 from "../assets/images/image-13.png";
import image14 from "../assets/images/image-14.png";
import image15 from "../assets/images/image-15.png";
import image16 from "../assets/images/image-16.png";
import image17 from "../assets/images/image-17.png";
import image18 from "../assets/images/image-18.png";
import image19 from "../assets/images/image-19.png";
import image20 from "../assets/images/image-20.png";
import image21 from "../assets/images/image-21.png";
import image22 from "../assets/images/image-22.png";
import image23 from "../assets/images/image-23.png";
import image24 from "../assets/images/image-24.png";
import image25 from "../assets/images/image-25.png";
import image26 from "../assets/images/image-26.png";
import image27 from "../assets/images/image-27.png";
import image28 from "../assets/images/image-28.png";
import image29 from "../assets/images/image-29.png";
import image30 from "../assets/images/image-30.png";
import image32 from "../assets/images/image-32.png";
import image33 from "../assets/images/image-33.png";
import image34 from "../assets/images/image-34.png";
import image35 from "../assets/images/image-35.png";
import image36 from "../assets/images/image-36.png";
import image37 from "../assets/images/image-37.png";
import image38 from "../assets/images/image-38.png";
import image39 from "../assets/images/image-39.png";
import image40 from "../assets/images/image-40.png";
import image41 from "../assets/images/image-41.png";
import image42 from "../assets/images/image-42.png";
import image43 from "../assets/images/image-43.png";
import image44 from "../assets/images/image-44.png";
import image46 from "../assets/images/image-46.png";
import image47 from "../assets/images/image-47.png";
import image48 from "../assets/images/image-48.png";
import image49 from "../assets/images/image-49.png";
import image50 from "../assets/images/image-50.png";
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

    { image: image11, title: "Kid Tapered Slim Fit Trouser", price: "$76" },
    {
      image: image12,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
    },
    {
      image: image13,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
    },
    {
      image: image14,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$120",
    },
    {
      image: image15,
      title: "Men Tapered Fit Flat-Front Trousers",
      price: "$150",
    },
    { image: image16, title: "PGirls Round Neck Cotton Top", price: "$76" },
    {
      image: image17,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$85",
    },
    { image: image18, title: "Kid Tapered Slim Fit Trouser", price: "$90" },
    { image: image19, title: "Men Printed Plain Cotton Shirt", price: "$120" },
    {
      image: image20,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$150",
    },

    { image: image21, title: "Kid Tapered Slim Fit Trouser", price: "$76" },
    {
      image: image22,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
    },
    {
      image: image23,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
    },
    {
      image: image24,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$120",
    },
    {
      image: image25,
      title: "Men Tapered Fit Flat-Front Trousers",
      price: "$150",
    },
    { image: image26, title: "PGirls Round Neck Cotton Top", price: "$76" },
    {
      image: image27,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$85",
    },
    { image: image28, title: "Kid Tapered Slim Fit Trouser", price: "$90" },
    { image: image29, title: "Men Printed Plain Cotton Shirt", price: "$120" },
    {
      image: image30,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$150",
    },
    {
      image: image32,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
    },
    {
      image: image33,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
    },
    {
      image: image34,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$120",
    },
    {
      image: image35,
      title: "Men Tapered Fit Flat-Front Trousers",
      price: "$150",
    },
    { image: image36, title: "PGirls Round Neck Cotton Top", price: "$76" },
    {
      image: image37,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$85",
    },
    { image: image38, title: "Kid Tapered Slim Fit Trouser", price: "$90" },
    { image: image39, title: "Men Printed Plain Cotton Shirt", price: "$120" },
    {
      image: image40,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$150",
    },

    { image: image41, title: "Kid Tapered Slim Fit Trouser", price: "$76" },
    {
      image: image42,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
    },
    {
      image: image43,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
    },
    {
      image: image44,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$120",
    },
    
    { image: image46, title: "PGirls Round Neck Cotton Top", price: "$76" },
    {
      image: image47,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$85",
    },
    { image: image48, title: "Kid Tapered Slim Fit Trouser", price: "$90" },
    { image: image49, title: "Men Printed Plain Cotton Shirt", price: "$120" },
    {
      image: image50,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$150",
    },
  ];

  return (
    <div className="maincollection-section" id="maincollection">
  <div className="row">
    {/* Filter Section */}
    <div className="col-md-3 filter-section">
      <h1>Filters</h1>
      <div className="filter-category-section">
        <h6>Categories</h6>
        <label>
          <input type="checkbox" />
          Men
        </label>
        <label>
          <input type="checkbox" />
          Women
        </label>
        <label>
          <input type="checkbox" />
          Kids
        </label>
      </div>
      <div className="filter-type-section">
        <h6>Type</h6>
        <label>
          <input type="checkbox" />
          Topwear
        </label>
        <label>
          <input type="checkbox" />
          Bottomwear
        </label>
        <label>
          <input type="checkbox" />
          Winterwear
        </label>
      </div>
    </div>

    {/* Collection Section */}
    <div className="col-md-8 collection-section">
      <div className="collection-header">
      
        <h3>All Collections</h3>
        <select>
          <option value="1">Sort by: Relevant</option>
          <option value="2">Sort by: Low to High</option>
          <option value="3">Sort by: High to Low</option>
        </select>
      </div>

      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <Cards image={card.image} title={card.title} price={card.price} />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default MainCollection;
