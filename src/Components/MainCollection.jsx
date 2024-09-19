import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./MainCollection.css";
import Cards from "./Cards";
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import image4 from "../assets/images/image-4.png";
import image5 from "../assets/images/image-5.png";

const MainCollection = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [selectedCategory, setSelectedCategory] = useState(""); // Single category
  const [selectedType, setSelectedType] = useState(""); // Single type
  const [sortOrder, setSortOrder] = useState(""); // For sorting order
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  const cardData = [
    {
      id: 1, // Unique ID for each product
      image: image1,
      title: "Kid Tapered Slim Fit Trouser",
      price: "$76",
      category: "Kids",
      type: "Bottomwear",
      reviews: 122,
      description: "A lightweight, pullover shirt...",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image1],
    },
    {
      id: 2,
      image: image2,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "$85",
      category: "Men",
      type: "Topwear",
      reviews: 98,
      description: "Comfortable cotton T-shirt...",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image2],
    },
    {
      id: 3,
      image: image3,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "$90",
      category: "Kids",
      type: "Topwear",
      reviews: 45,
      description: "Comfortable cotton T-shirt for boys...",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image3],
    },
    {
      id: 4,
      image: image4,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "$120",
      category: "Women",
      type: "Winterwear",
      reviews: 150,
      description: "Warm and cozy winter jacket...",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image4],
    },
    {
      id: 5,
      image: image5,
      title: "Men Tapered Fit Flat-Front Trousers",
      price: "$150",
      category: "Men",
      type: "Bottomwear",
      reviews: 200,
      description: "Stylish trousers for formal occasions...",
      sizes: ["S", "M", "L", "XL", "XXL"],
      relatedImages: [image5],
    },
  ];

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value === selectedCategory ? "" : value); // Toggle selection
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setSelectedType(value === selectedType ? "" : value); // Toggle selection
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); // Set the selected sort order
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Convert search term to lowercase
  };

  const getPriceValue = (priceString) =>
    parseFloat(priceString.replace("$", ""));

  const filteredCards = cardData.filter((card) => {
    const categoryMatch = !selectedCategory || card.category === selectedCategory;
    const typeMatch = !selectedType || card.type === selectedType;
    const searchMatch = card.title.toLowerCase().includes(searchTerm); // Search functionality
    return categoryMatch && typeMatch && searchMatch;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return getPriceValue(a.price) - getPriceValue(b.price); // Low to High
    } else if (sortOrder === "highToLow") {
      return getPriceValue(b.price) - getPriceValue(a.price); // High to Low
    } else {
      return 0; // Default order (no sorting)
    }
  });

  const handleImageClick = (product) => {
    // Navigate to the product detail page with the product data
    navigate(`/product/${product.id}`, { state: { product } });
  };

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
              <div className="search-icon">
                <i className="fas fa-search"></i> {/* Font Awesome search icon */}
              </div>
              <input
                type="text"
                placeholder="Search Here"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="">Sort by Price: Relevant</option>
              <option value="lowToHigh">Sort by: Low to High</option>
              <option value="highToLow">Sort by: High to Low</option>
            </select>
          </div>

          <div className="row">
            {sortedCards.map((card) => (
              <div
                className="col-md-3 col-sm-6 mb-4"
                key={card.id}
                onClick={() => handleImageClick(card)} // Navigate to product details on click
              >
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
