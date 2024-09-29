import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from 'react-router-dom';
import './AddtoCart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  
  // Initialize quantities state with cart items
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );

  // Initialize navigate hook
  const navigate = useNavigate();

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
    if (!isNaN(quantity) && quantity > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: quantity,
      }));
      updateCartItemQuantity(id, quantity); // Update quantity in context or state
    }
  };

  // Function to clean price string by removing the '$' symbol and converting to a number
  const cleanPrice = (price) => {
    return parseFloat(price.replace('$', ''));
  };

  // Calculate subtotal by summing up the price * quantity for each item
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = cleanPrice(item.price); // Clean the price before calculation
    return total + itemPrice * quantities[item.id];
  }, 0);

  const shippingFee = 10; // Example shipping fee
  const total = subtotal + shippingFee;

  // Handle Proceed to Checkout
  const handleProceedToCheckout = () => {
    navigate('/place-order'); // Adjust the route as needed
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Display the selected image in the cart */}
              <img src={item.selectedImage} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <span className="cart-item-size">{item.selectedSize}</span>
                <div className="cart-item-quantity">
                  <label htmlFor={`quantity-${item.id}`}></label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={quantities[item.id]}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    min="1"
                    className="quantity-input"
                  />
                </div>
              </div>
              <button className="btn" onClick={() => removeFromCart(item.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-totals">
        <h3>Cart Totals</h3>
        <div className="cart-summary">
          <div className="summary-item">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping Fee</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="summary-item total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
        <button className="checkout-button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
