import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { useLocation } from 'react-router-dom'; // For accessing state passed through navigate

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state; // Retrieve product data from state

  const [selectedImage, setSelectedImage] = useState(product.image); // Default to the main product image

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
                onClick={() => setSelectedImage(image)}
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
              <button key={index} className="size-btn">{size}</button>
            ))}
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
