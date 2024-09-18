import React from 'react';
import './ProductDetail.css'
import { useLocation } from 'react-router-dom'; // For accessing state passed through `navigate`

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state; // Retrieve product data from state

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} className="product-image" />
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Reviews: {product.reviews}</p>
        <div className="sizes">
          <h3>Available Sizes</h3>
          {product.sizes.map((size, index) => (
            <button key={index} className="size-btn">{size}</button>
          ))}
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>

        <div className="related-images">
          <h3>Related Images</h3>
          <div className="related-images-grid">
            {product.relatedImages.map((relatedImage, index) => (
              <img key={index} src={relatedImage} alt="related" className="related-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
