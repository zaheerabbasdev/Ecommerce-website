import React, { useEffect, useState, useContext } from 'react';
import './ProductDetail.css';
import { useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state; // Retrieve product data from state
  const [selectedImage, setSelectedImage] = useState(product.image); // Default to the main product image
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size
  const [errorMessage, setErrorMessage] = useState(''); // Error message if size is not selected

  // Access the addToCart function from context
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage('Please select Size.');
      return;
    }
    
    // Add the product along with the selected image and size to the cart
    addToCart({
      ...product,
      selectedImage, // Adding the selected image to the product object
      selectedSize,  // Adding the selected size to the product object
    });

    // Clear error message once product is added to cart
    setErrorMessage('');
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
                onClick={() => setSelectedImage(image)} // Set the selected image on click
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">Price: {product.price}</p>
          <p className="reviews">Reviews: {product.reviews}</p>
          <p className="description">{product.description}</p>
          <div className="sizes">
            <h3>Select Sizes</h3>
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`} // Highlight selected size
                onClick={() => setSelectedSize(size)} // Set selected size
              >
                {size}
              </button>
            ))}
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
