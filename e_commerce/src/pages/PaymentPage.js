import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useCart();
  const { cartItems } = state;
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    if (total === 0) {
      alert("Cart is empty!");
      navigate("/cart");
    }
  }, [total, navigate]);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_qD26cTKNSxMO5U",//this is my razor pay id.
      amount: total * 100,
      currency: "INR",
      name: "G-SHOP",
      description: "Thank you for shopping from G-Shop",
     image: "g.png", // use https!

      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        
        navigate("/thankyou");
      },
      prefill: {
        name: "Akash Chandra",
        email: "akash@example.com",
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
    <div className="payment-page" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Confirm Your Payment</h2>
      <p>Total Amount: ₹{total}</p>
      <button
        onClick={handlePayment}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#3399cc",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
