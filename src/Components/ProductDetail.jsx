import React, { useEffect, useState, useContext } from "react";
import "./ProductDetail.css";
import { useLocation } from "react-router-dom";
import { CartContext } from "./CartContext";
import star from "../assets/images/star.png"; // Path to star image
import starEmpty from "../assets/images/star-light.png"; // Path to empty star image

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state; // Retrieve product data from state
  const [selectedImage, setSelectedImage] = useState(product.image); // Default to the main product image
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size
  const [errorMessage, setErrorMessage] = useState(""); // Error message if size is not selected

  // Access the addToCart function from context
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage("Please Select Size First.");
      return;
    }

    // Add the product along with the selected image and size to the cart
    addToCart({
      ...product,
      selectedImage, // Adding the selected image to the product object
      selectedSize, // Adding the selected size to the product object
    });

    // Clear error message once product is added to cart
    setErrorMessage("");
  };

  // Function to handle related image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
    window.scrollTo(0, 0); // Scroll to the top of the page when an image is clicked
  };

  // Use useEffect to scroll to the top when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="image-gallery">
          <img src={selectedImage} alt={product.title} className="main-image" />
          <div className="thumbnail-gallery">
            {product.relatedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`thumbnail ${index}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)} // Set the selected image and scroll to the top on click
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={index < product.stars ? star : starEmpty}
                alt="star"
                className="star"
              />
            ))}
            <span className="review-count">({product.reviewsCount})</span>{" "}
            {/* Display review count */}
          </div>
          <p className="description">{product.description}</p>
          <p className="description2">{product.description2}</p>
          <div className="sizes">
            <h3>Select Sizes</h3>
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`size-btn ${
                  selectedSize === size ? "selected" : ""
                }`} // Highlight selected size
                onClick={() => setSelectedSize(size)} // Set selected size
              >
                {size}
              </button>
            ))}
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Display error message */}
          
          {/* Related Images, Description, and Reviews Section */}
          {/* <div className="related-section">
            <div className="additional-description">
              <div className="row related-description">
                <h4>Description</h4>
                <div className="reviews">
                  <p>Reviews (122)</p>
                </div>
                <p>
                  An e-commerce website is an online platform that facilitates
                  the buying and selling of products or services over the
                  internet. It serves as a virtual marketplace where businesses
                  and individuals can showcase their products, interact with
                  customers, and conduct transactions without the need for a
                  physical presence. E-commerce websites have gained immense
                  popularity due to their convenience, accessibility, and the
                  global reach they offer. E-commerce websites typically display
                  products or services along with detailed descriptions, images,
                  prices, and any available variations (e.g., sizes, colors).
                  Each product usually has its own dedicated page with relevant
                  information.
                </p>
              </div>
            </div>

            <h3>Related Products</h3>
            <div className="related-gallery">
              {product.relatedImages.map((image, index) => (
                <div key={index} className="card related-cards">
                  <img
                    src={image}
                    alt={`Related product ${index}`}
                    className="card-img-top related-cards-img"
                    onClick={() => handleImageClick(image)}
                  />
                  <div className="cards-body">
                    <h5 className="cards-title">{product.title}</h5>{" "}
                    <p className="cards-text">{product.price}</p>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
