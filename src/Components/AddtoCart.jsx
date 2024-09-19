import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import './AddtoCart.css'

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = 10; // Example shipping fee
  const total = subtotal + shippingFee;

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
                <p>${item.price}</p>
                <span className="cart-item-size">Size: {item.selectedSize}</span>
                <p>Quantity: {item.quantity}</p>
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
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
