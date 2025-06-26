// src/pages/Payment.js
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { state } = useCart();
  const navigate = useNavigate();

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_qD26cTKNSxMO5U", // Replace with your Razorpay key
      amount: total * 100, // Amount in paise
      currency: "INR",
      name: "G-Shop",
      description: "Order Payment",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        navigate("/thankyou"); // Or show confirmation page
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h2>Review and Pay</h2>

      <h3>Shipping Address</h3>
      <textarea rows={4} placeholder="Enter your full address" style={{ width: "100%" }}></textarea>
      <br />
      <input type="text" placeholder="Nearby landmark (optional)" style={{ width: "100%", marginTop: "10px" }} />

      <h3 style={{ marginTop: "2rem" }}>Order Summary</h3>
      {state.cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
          <strong>{item.name}</strong> – ₹{item.price}
        </div>
      ))}
      <h3>Total: ₹{total}</h3>

      <button
        onClick={handlePayment}
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
