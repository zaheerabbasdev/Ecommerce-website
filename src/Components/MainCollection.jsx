import React from "react";
import { useState } from "react";
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
// import image33 from "../assets/images/image-33.png";
import image34 from "../assets/images/image-34.png";
import image35 from "../assets/images/image-35.png";
// import image36 from "../assets/images/image-36.png";
import image37 from "../assets/images/image-37.png";
import image38 from "../assets/images/image-38.png";
import image39 from "../assets/images/image-39.png";
import image40 from "../assets/images/image-40.png";
import image41 from "../assets/images/image-41.png";
// import image42 from "../assets/images/image-42.png";
import image43 from "../assets/images/image-43.png";
// import image44 from "../assets/images/image-44.png";
// import image46 from "../assets/images/image-46.png";
// import image47 from "../assets/images/image-47.png";
import image48 from "../assets/images/image-48.png";
// import image49 from "../assets/images/image-49.png";
// import image50 from "../assets/images/image-50.png";

const MainCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // Single category
  const [selectedType, setSelectedType] = useState(""); // Single type
  const [sortOrder, setSortOrder] = useState(""); // For sorting order
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  const cardData = [
    {
      image: image1,
      title: "Kid Tapered Slim Fit Trouser",
      price: "$76",
      category: "Kids",
      type: "Bottomwear",
    },
    {
      image: image2,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
      category: "Men",
      type: "Topwear",
    },
    {
      image: image3,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
      category: "Kids",
      type: "Topwear",
    },
    {
      image: image4,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$120",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image5,
      title: "Men Tapered Fit Flat-Front Trousers",
      price: "$150",
      category: "Men",
      type: "Bottomwear",
    },
    {
      image: image6,
      title: "Girls Round Neck Cotton Top",
      price: "$76",
      category: "Kids",
      type: "Topwear",
    },
    {
      image: image7,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$85",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image8,
      title: "Kid Tapered Slim Fit Trouser",
      price: "$90",
      category: "Kids",
      type: "Bottomwear",
    },
    {
      image: image9,
      title: "Men Printed Plain Cotton Shirt",
      price: "$120",
      category: "Men",
      type: "Topwear",
    },
    {
      image: image10,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$150",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image11,
      title: "Boy Casual Slim Fit Jeans",
      price: "$80",
      category: "Kids",
      type: "Bottomwear",
    },
    {
      image: image12,
      title: "Men Cotton Full-Sleeve Shirt",
      price: "$90",
      category: "Men",
      type: "Topwear",
    },
    {
      image: image13,
      title: "Boys Casual Striped T-Shirt",
      price: "$70",
      category: "Kids",
      type: "Topwear",
    },
    {
      image: image14,
      title: "Women Cropped Hooded Sweatshirt",
      price: "$130",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image15,
      title: "Men Slim Fit Denim Jeans",
      price: "$140",
      category: "Men",
      type: "Bottomwear",
    },
    {
      image: image16,
      title: "Girls Printed Fleece Hoodie",
      price: "$75",
      category: "Kids",
      type: "Winterwear",
    },
    {
      image: image17,
      title: "Women Long-Sleeve Fleece Hoodie",
      price: "$110",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image18,
      title: "Boy Tapered Fit Denim Pants",
      price: "$95",
      category: "Kids",
      type: "Bottomwear",
    },
    {
      image: image19,
      title: "Men Linen Casual Shirt",
      price: "$125",
      category: "Men",
      type: "Topwear",
    },
    {
      image: image20,
      title: "Women Puffer Jacket",
      price: "$180",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image21,
      title: "Kid Slim Fit Jogger Pants",
      price: "$85",
      category: "Kids",
      type: "Bottomwear",
    },
    {
      image: image22,
      title: "Men Half-Sleeve Printed T-Shirt",
      price: "$90",
      category: "Men",
      type: "Topwear",
    },
    {
      image: image23,
      title: "Boy Graphic Round Neck T-Shirt",
      price: "$60",
      category: "Kids",
      type: "Topwear",
    },
    {
      image: image24,
      title: "Women Fleece Zipper Hoodie",
      price: "$120",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image25,
      title: "Men Relaxed Fit Cotton Trousers",
      price: "$170",
      category: "Men",
      type: "Bottomwear",
    },
    {
      image: image26,
      title: "Girls Floral Printed Top",
      price: "$65",
      category: "Kids",
      type: "Topwear",
    },
    {
      image: image27,
      title: "Women Quilted Winter Coat",
      price: "$160",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image28,
      title: "Kid Casual Tapered Fit Pants",
      price: "$95",
      category: "Kids",
      type: "Bottomwear",
    },
    {
      image: image29,
      title: "Men Slim Fit Cotton Shirt",
      price: "$130",
      category: "Men",
      type: "Topwear",
    },
    {
      image: image30,
      title: "Women Hooded Bomber Jacket",
      price: "$190",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image32,
      title: "Men Graphic Printed T-Shirt",
      price: "$85",
      category: "Men",
      type: "Topwear",
    },
    // { image: image33, title: "Boy Polo Neck Casual T-Shirt", price: "$80", category: "Kids", type: "Topwear" },
    {
      image: image34,
      title: "Women Casual Hooded Sweatshirt",
      price: "$140",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image35,
      title: "Men Cotton Chinos",
      price: "$155",
      category: "Men",
      type: "Bottomwear",
    },
    // { image: image36, title: "Girls Embroidered Long-Sleeve Top", price: "$95", category: "Kids", type: "Topwear" },
    {
      image: image37,
      title: "Women Zipper Hooded Jacket",
      price: "$125",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image38,
      title: "Kid Slim Fit Stretch Pants",
      price: "$100",
      category: "Kids",
      type: "Bottomwear",
    },
    {
      image: image39,
      title: "Men Casual Cotton Shirt",
      price: "$135",
      category: "Men",
      type: "Topwear",
    },
    {
      image: image40,
      title: "Women Double-Layer Winter Jacket",
      price: "$200",
      category: "Women",
      type: "Winterwear",
    },
    {
      image: image41,
      title: "Kid Slim Fit Sweatpants",
      price: "$90",
      category: "Kids",
      type: "Bottomwear",
    },
    // { image: image42, title: "Men Graphic Long-Sleeve T-Shirt", price: "$95", category: "Men", type: "Topwear" },
    {
      image: image43,
      title: "Boy Casual Printed T-Shirt",
      price: "$70",
      category: "Kids",
      type: "Topwear",
    },
    // { image: image44, title: "Women Insulated Winter Parka", price: "$180", category: "Women", type: "Winterwear" },
    // { image: image46, title: "Girls Casual Cotton T-Shirt", price: "$75", category: "Kids", type: "Topwear" },
    // { image: image47, title: "Women Sherpa Lined Winter Jacket", price: "$175", category: "Women", type: "Winterwear" },
    {
      image: image48,
      title: "Kid Slim Fit Cotton Pants",
      price: "$90",
      category: "Kids",
      type: "Bottomwear",
    },
    // { image: image49, title: "Men Regular Fit Button-Down Shirt", price: "$140", category: "Men", type: "Topwear" },
    // { image: image50, title: "Women High-Neck Quilted Jacket", price: "$190", category: "Women", type: "Winterwear" },
  ];

  // Function to handle the change in category filters (only one can be selected at a time)
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value === selectedCategory ? "" : value); // Toggle selection
  };

  // Function to handle the change in type filters (only one can be selected at a time)
  const handleTypeChange = (e) => {
    const { value } = e.target;
    setSelectedType(value === selectedType ? "" : value); // Toggle selection
  };

  // Handle sorting option change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value); // Set the selected sort order
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Convert search term to lowercase
  };

  // Parse price from string and return as a number for comparison
  const getPriceValue = (priceString) =>
    parseFloat(priceString.replace("$", ""));

  // Filter the card data based on selected category, type, and search term
  const filteredCards = cardData.filter((card) => {
    const categoryMatch =
      !selectedCategory || card.category === selectedCategory;
    const typeMatch = !selectedType || card.type === selectedType;
    const searchMatch = card.title.toLowerCase().includes(searchTerm); // Search functionality
    return categoryMatch && typeMatch && searchMatch;
  });

  // Sort the filtered data based on price
  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return getPriceValue(a.price) - getPriceValue(b.price); // Low to High
    } else if (sortOrder === "highToLow") {
      return getPriceValue(b.price) - getPriceValue(a.price); // High to Low
    } else {
      return 0; // Default order (no sorting)
    }
  });

  return (
    <div className="maincollection-section" id="maincollection">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3 filter-section">
          <h1>Filters</h1>
          <div className="filter-category-section">
            <h6>Categories</h6>
            <label>
              <input
                type="checkbox"
                value="Men"
                checked={selectedCategory === "Men"}
                onChange={handleCategoryChange}
              />
              Men
            </label>
            <label>
              <input
                type="checkbox"
                value="Women"
                checked={selectedCategory === "Women"}
                onChange={handleCategoryChange}
              />
              Women
            </label>
            <label>
              <input
                type="checkbox"
                value="Kids"
                checked={selectedCategory === "Kids"}
                onChange={handleCategoryChange}
              />
              Kids
            </label>
          </div>
          <div className="filter-type-section">
            <h6>Type</h6>
            <label>
              <input
                type="checkbox"
                value="Topwear"
                checked={selectedType === "Topwear"}
                onChange={handleTypeChange}
              />
              Topwear
            </label>
            <label>
              <input
                type="checkbox"
                value="Bottomwear"
                checked={selectedType === "Bottomwear"}
                onChange={handleTypeChange}
              />
              Bottomwear
            </label>
            <label>
              <input
                type="checkbox"
                value="Winterwear"
                checked={selectedType === "Winterwear"}
                onChange={handleTypeChange}
              />
              Winterwear
            </label>
          </div>
        </div>

        {/* Collection Section */}
        <div className="col-md-8 collection-section">
          <div className="collection-header">
            <h3>All Collections</h3>
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Search Here"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              
            </div>
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="">Sort by: Relevant</option>
              <option value="lowToHigh">Sort by: Low to High</option>
              <option value="highToLow">Sort by: High to Low</option>
            </select>
          </div>

          <div className="row">
            {sortedCards.map((card, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
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
  );
};

export default MainCollection;
