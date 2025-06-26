import React from "react";
import "./Orders.css";

const Orders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="orders-page">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order">
            <h3>Order #{index + 1}</h3>
            {order.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p><strong>{item.name}</strong></p>
                  <p>₹{item.price} x {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
