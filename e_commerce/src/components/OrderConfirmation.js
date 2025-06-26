import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  // Fallback for simple orderId and totalAmount if available separately
  const orderId = location.state?.orderId;
  const totalAmount = location.state?.totalAmount;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">Your order has been placed successfully.</p>

        {/* If detailed orderDetails exist, show order summary */}
        {orderDetails ? (
          <div className="text-left mb-6">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <ul className="divide-y divide-gray-200 mb-4">
              {orderDetails.items.map((item) => (
                <li key={item.id} className="py-2 flex justify-between">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-semibold text-gray-800 text-lg">
              <span>Total:</span>
              <span>₹{orderDetails.total}</span>
            </div>
          </div>
        ) : (
          // If no detailed order, show simple orderId and totalAmount
          <>
            {orderId && (
              <p className="mb-2">
                Your order number: <strong>{orderId}</strong>
              </p>
            )}
            {totalAmount && (
              <p className="mb-6">
                Total amount paid: <strong>₹{totalAmount}</strong>
              </p>
            )}
          </>
        )}

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
