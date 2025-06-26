import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { state, dispatch } = useCart();
  const { cartItems } = state;
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-info-wrapper">
                  <div className="cart-main-info">
                    <h4>{item.name}</h4>
                    <p><strong>Price:</strong> ₹{item.price}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                      }
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-divider" />

                  <div className="cart-description">
                    {item.description ||
                      "This product is perfect for your daily needs and combines both style and functionality."}
                  </div>
                </div>
              </div>
            ))}

            <div className="address-section">
              <h3>Delivery Address</h3>
              <textarea
                placeholder="Enter your delivery address here..."
                rows="3"
              />
              <input
                type="text"
                placeholder="Nearby Landmark"
                className="landmark-input"
              />
            </div>

            <div className="total-section">
              <h3>Total: ₹{getTotalPrice()}</h3>
              <button onClick={() => navigate("/payment")}>
                Proceed to Pay
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
