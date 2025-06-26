import "./Home.css";
import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Correct casing

function Home() {
  const { dispatch } = useCart(); // ✅ get dispatch from context

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alert(`${product.name} added to cart`);
  };

  const products = [
     { id: 1, name: "Headphones", price: 2999, image: "/images/headphones.png", description: "High-quality wireless headphones with noise cancellation." },
    { id: 2, name: "Smartwatch", price: 49999, image: "/images/smartwatch.png", description: "Premium smartwatch with health and fitness tracking features." },
    { id: 3, name: "Speaker", price: 2500, image: "/images/speaker.jpeg", description: "Portable Bluetooth speaker with deep bass and clear sound." },
    { id: 4, name: "Laptop", price: 79999, image: "/images/laptop.jpg", description: "Powerful laptop for work and gaming with high performance." },
    { id: 5, name: "Camera", price: 21999, image: "/images/camera.png", description: "Capture memories in HD with this professional-grade camera." },
    { id: 6, name: "Tablet", price: 14999, image: "/images/tablet.png", description: "Lightweight tablet for reading, streaming, and productivity." },
    { id: 7, name: "Keyboard", price: 1999, image: "/images/keyboard.png", description: "Ergonomic keyboard with backlight and smooth typing experience." },
    { id: 8, name: "Watch", price: 999, image: "/images/watch.jpg", description: "Elegant analog watch with leather strap and durable build." },
  ];

  return (
    <div className="homepage">
      {/* MOOOI Clothing Section */}
      <section className="hero-block block-three">
        <div className="moooi-heading">
          <h2>Discover Timeless Style</h2>
          <div className="moooi-offer">🔥 Limited Time Offer: Flat 30% Off On All Items! 🔥</div>
        </div>

        <div className="moooi-gallery">
          {[ /* Clothing Products */ 
            { id: 101, name: "Oversized Shirt", price: 799, image: "/images/oversizedshirts.png"  ,},
            { id: 102, name: "Jeans", price: 1299, image: "/images/jeans.png" },
            { id: 103, name: "Women's Top", price: 699, image: "/images/womenstop.png" },
            { id: 104, name: "Women's Jeans", price: 1399, image: "/images/womenjeans.png" },
            { id: 105, name: "Crop Top", price: 499, image: "/images/top.png" },
            { id: 106, name: "Pants", price: 999, image: "/images/pants.png" },
          ].map((product) => (
            <div className="moooi-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <button className="product-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Skin Care Section */}
      <section className="hero-block block-one-skincare"
        style={{
          backgroundImage: `url(/images/skinbanner.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px",
          position: "relative",
        }}>
        <div className="offer-badge">FLAT 25% OFF</div>
        <div className="skincare-heading">SKINCARE REGIME</div>

        <div className="product-container">
          {[ /* Skincare Products */
            { id: 201, name: "Serum", price: 899, image: "/images/SERUM.jpeg", hover: "/images/serumhover.jpeg" },
            { id: 202, name: "Facewash", price: 499, image: "/images/facewash.jpeg", hover: "/images/facewashhover.webp" },
            { id: 203, name: "Moisturizer", price: 699, image: "/images/most.avif", hover: "/images/moisthover.jpg" },
            { id: 204, name: "Shampoo", price: 499, image: "/images/shampoo.jpeg", hover: "/images/shampoohover.jpeg" },
            { id: 205, name: "Plump Cream", price: 999, image: "/images/plump.jpeg", hover: "/images/plumphover.jpeg" },
          ].map((product) => (
            <div className="product" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                onMouseOver={(e) => (e.currentTarget.src = product.hover)}
                onMouseOut={(e) => (e.currentTarget.src = product.image)}
              />
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Shoes Section */}
      <section className="shoes-section">
        <div className="background-overlay"></div>
        <div className="content-wrapper">
          <div className="heading-container">
            <h1>Step into Style</h1>
            <p className="quote">"Walk with confidence, wherever you go."</p>
          </div>

          <div className="moving-text-container">
            <div className="moving-text">
              {Array(3).fill(["Puma", "Nike", "Adidas", "Skechers", "HRX", "Polo"]).flat().map((brand, i) => (
                <span key={i}>{brand}</span>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {[ /* Shoe Products */
              { id: 301, name: "Puma", price: 2599, image: "/images/puma.avif" },
              { id: 302, name: "Nike Air", price: 3999, image: "/images/nike.webp" },
              { id: 303, name: "Adidas", price: 3499, image: "/images/addidas.jpeg" },
              { id: 304, name: "Skechers", price: 2999, image: "/images/skechers.jpeg" },
              { id: 305, name: "HRX", price: 2199, image: "/images/hrx.webp" },
              { id: 306, name: "Polo", price: 1799, image: "/images/polo.jpg" },
            ].map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Top quality product from {product.name}</p>
                <button className="add-cart-button" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="products-section">
        <h2 className="product-heading">Explore Our Products</h2>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="info">
                <h3>{product.name}</h3>
                <p>Short description of the product.</p>
                <div className="price">₹{product.price.toFixed(2)}</div>
                <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
