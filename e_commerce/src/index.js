import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ KEEP THIS ONLY ONCE
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
