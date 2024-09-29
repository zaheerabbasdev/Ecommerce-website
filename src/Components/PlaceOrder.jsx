import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext"; // Import CartContext to access cart items
import "./PlaceOrder.css"; // Add your custom styling

const PlaceOrder = () => {
  // Accessing cart items and removeFromCart function from CartContext
  const { cartItems } = useContext(CartContext);

  // State to manage form fields and payment method
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle payment method change
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // Validation function to check if all fields are filled
  const isFormValid = () => {
    const { firstName, lastName, email, street, city, state, zipcode, country, phone } = formData;
    return (
      firstName &&
      lastName &&
      email &&
      street &&
      city &&
      state &&
      zipcode &&
      country &&
      phone &&
      paymentMethod
    );
  };

  // Function to clean price string by removing the '$' symbol and converting to a number
  const cleanPrice = (price) => {
    return parseFloat(price.replace('$', ''));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + cleanPrice(item.price) * item.quantity; // Assuming quantity is stored in the cartItems
  }, 0);

  const shippingFee = 10; // Example shipping fee
  const total = subtotal + shippingFee;

  // Handle form submission
  const handlePlaceOrder = () => {
    if (!isFormValid()) {
      alert("Please fill out all required fields and select a payment method.");
      return;
    }
    // Add your logic to handle the order submission
    alert(`Order placed with payment method: ${paymentMethod}`);
  };

  return (
    <div className="custom-place-order-container">
      <div className="custom-delivery-information">
        <h2>
          DELIVERY <span>INFORMATION</span>
        </h2>
        <form>
          <div className="custom-row">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last name"
            />
          </div>
          <div className="custom-row">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
            />
          </div>
          <div className="custom-row">
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              placeholder="Street"
            />
          </div>
          <div className="custom-row">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
            />
          </div>
          <div className="custom-row">
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleInputChange}
              placeholder="Zipcode"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
            />
          </div>
          <div className="custom-row">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
          </div>
        </form>
      </div>

      <div className="custom-cart-totals">
        <h2>
          CART <span>TOTALS</span>
        </h2>
        <div className="custom-summary-item">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="custom-summary-item">
          <span>Shipping Fee</span>
          <span>${shippingFee.toFixed(2)}</span>
        </div>
        <div className="custom-summary-item custom-total">
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>

      <div className="custom-payment-method">
        <h2>
          PAYMENT <span>METHOD</span>
        </h2>
        <div className="custom-payment-options">
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
        <button className="custom-place-order-button" onClick={handlePlaceOrder}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
