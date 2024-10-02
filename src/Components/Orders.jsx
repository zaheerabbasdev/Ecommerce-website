import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./Orders.css"; // Add your custom styling for the Order component

const Orders = () => {
  const location = useLocation();
  const { cartItems, orderDate, paymentMethod } = location.state || {}; // Destructure state from location

  return (
    <div className="custom-order-summary">
      <h2>ORDER PLACED</h2>
      <div className="custom-order-details">
        <h3>Order Details:</h3>
        {/* Check if cartItems exist and have a length */}
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="custom-order-item">
              <img
                src={item.selectedImage} // Use the correct property for the image
                alt={item.title}
                className="custom-order-image"
              />
              <div className="custom-order-info">
                <h4>{item.title}</h4>
                <p>Price: {item.price}</p>
                <p>Size: {item.selectedSize}</p> {/* Use the correct property for size */}
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No orders are available.</p> // Display this message when there are no orders
        )}
        {orderDate && <p>Date: {orderDate}</p>}
        {paymentMethod && <p>Payment Method: {paymentMethod}</p>}
        <button className="custom-track-order-button">Track Order</button>
      </div>
    </div>
  );
};

export default Orders;
