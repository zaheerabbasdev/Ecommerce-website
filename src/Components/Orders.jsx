import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./Orders.css"; // Add your custom styling for the Order component

const Orders = () => {
  const location = useLocation();
  const { cartItems, orderDate, paymentMethod } = location.state || {}; // Destructure state from location


  

  return (
    <div className="order-summary-container">
    
      <h2>MY ORDERS</h2>
      <div className="order-list">
        {/* Check if cartItems exist and have a length */}
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="order-item">
              <div className="order-item-left">
                <img
                  src={item.selectedImage} // Use the correct property for the image
                  alt={item.title}
                  className="order-image"
                />
                <div className="order-info">
                  <h4>{item.title}</h4>
                  <p>{item.price} &nbsp; Quantity: {item.quantity} &nbsp; Size: {item.selectedSize}</p>
                  {orderDate && <p>Date: {orderDate}</p>}
                  {paymentMethod && <p>Payment: {paymentMethod}</p>}
                </div>
              </div>
              <div className="order-item-right">
                <p className="order-status">
                  <span className="status-dot"></span> Order Placed
                </p>
                <button className="track-order-button">Track Order</button>
              </div>
            </div>
          ))
        ) : (
          <p>No orders available.</p> // Display this message when there are no orders
        )}
      </div>
      
    </div>
  );
};

export default Orders;
