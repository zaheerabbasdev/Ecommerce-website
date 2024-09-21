import React, { useState } from "react";
import "./PlaceOrder.css"; // Add your custom styling

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    // Add your logic to handle the order submission
    alert(`Order placed with payment method: ${paymentMethod}`);
  };

  return (
    <div className="place-order-container">
      <div className="delivery-information">
        <h2>
          DELIVERY <span>INFORMATION</span>
        </h2>
        <form>
          <div className="row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="row">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="row">
            <input type="text" placeholder="Street" />
          </div>
          <div className="row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="row">
            <input type="text" placeholder="Zipcode" />
            <input type="text" placeholder="Country" />
          </div>
          <div className="row">
            <input type="text" placeholder="Phone" />
          </div>
        </form>
      </div>

      <div className="cart-totals">
        <h2>
          CART <span>TOTALS</span>
        </h2>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$0.00</span> {/* Replace with your subtotal logic */}
        </div>
        <div className="summary-item">
          <span>Shipping Fee</span>
          <span>$10.00</span> {/* Replace with your shipping fee logic */}
        </div>
        <div className="summary-item total">
          <strong>Total</strong>
          <strong>$0.00</strong> {/* Replace with your total calculation */}
        </div>
      </div>

      <div className="payment-method">
        <h2>
          PAYMENT <span>METHOD</span>
        </h2>
        <div className="payment-options">
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="Stripe"
              onChange={() => handlePaymentMethodChange("Stripe")}
            />
            <label>Stripe</label>
          </div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="Razorpay"
              onChange={() => handlePaymentMethodChange("Razorpay")}
            />
            <label>Razorpay</label>
          </div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="Cash on Delivery"
              onChange={() => handlePaymentMethodChange("Cash on Delivery")}
            />
            <label>Cash on Delivery</label>
          </div>
        </div>
<button className="place-order-button" onClick={handlePlaceOrder}>
        PLACE ORDER
      </button>
      </div>

      
    </div>
  );
};

export default PlaceOrder;
