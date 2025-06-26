import React from "react";
import "./Home.css";

function Home() {

  const products = [
    {
      id: 1,
      name: "Headphones",
      price: 2999,
      image: "/images/headphones.png",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 49999,
      image: "/images/smartwatch.png",
    },
    {
      id: 3,
      name: "Speaker",
      price: 2500,
      image: "/images/speaker.jpeg",
    },
    {
      id: 4,
      name: "Laptop",
      price: 79999,
      image: "/images/laptop.jpg",
    },
    {
      id: 5,
      name: "Camera",
      price: 21999,
      image: "/images/camera.png",
    },
    {
      id: 6,
      name: "Tablet",
      price: 14999,
      image: "/images/tablet.png",
    },
    {
      id: 7,
      name: "Keyboard",
      price: 1999,
      image: "/images/keyboard.png",
    },
    {
      id: 8,
      name: "Watch",
      price: 999,
      image: "/images/watch.jpg",
    },
  ];
  return (
    <div className="homepage">


       {/* Section 3 – MOOOI style refined */}
<section className="hero-block block-three">
  <div className="moooi-heading">
    <h2>Discover Timeless Style</h2>
    <div className="moooi-offer">🔥 Limited Time Offer: Flat 30% Off On All Items! 🔥</div>
  </div>

  <div className="moooi-gallery">
    <div className="moooi-item">
      <img src="/images/oversizedshirts.png" alt="oversizedshirt" />
    </div>
    <div className="moooi-item">
      <img src="/images/jeans.png" alt="jeans" />
    </div>
    <div className="moooi-item">
      <img src="/images/womenstop.png" alt="tops" />
    </div>
    <div className="moooi-item">
      <img src="/images/womenjeans.png" alt="womensjeans" />
    </div>
    <div className="moooi-item">
      <img src="/images/top.png" alt="top" />
    </div>
    <div className="moooi-item">
      <img src="/images/pants.png" alt="pants" />
    </div>
  </div>
</section>




{/* Skin care - products */}
  <section
  className="hero-block block-one-skincare"
  style={{
    backgroundImage: `url(/images/skinbanner.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '600px',
    position: 'relative',
  }}
>
  {/* Offer Tag */}
  <div className="offer-badge">FLAT 25% OFF</div>

  {/* Hero Text */}
 

  {/* Center Text */}
  <div className="skincare-heading">SKINCARE REGIME</div>

  {/* Hero Image */}
  

  {/* Product Showcase */}
  <div className="product-container">
    {[
      { id: 1, img: '/images/SERUM.jpeg', hover: '/images/serumhover.jpeg' },
      { id: 2, img: '/images/facewash.jpeg', hover: '/images/facewashhover.webp' },
      { id: 3, img: '/images/most.avif', hover: '/images/moisthover.jpg' },
      { id: 4, img: '/images/shampoo.jpeg', hover: '/images/shampoohover.jpeg' },
      { id: 5, img: '/images/plump.jpeg', hover: '/images/plumphover.jpeg' },
    ].map(product => (
      <div className="product" key={product.id}>
        <img
          src={product.img}
          alt="Skincare Product"
          onMouseOver={(e) => e.currentTarget.src = product.hover}
          onMouseOut={(e) => e.currentTarget.src = product.img}
        />
      </div>
    ))}
  </div>
</section>



      {/* Section 2 – EADEM style */}
<section className="shoes-section">
  <div className="background-overlay"></div>
  <div className="content-wrapper">
    <div className="heading-container">
      <h1>Step into Style</h1>
      <p className="quote">"Walk with confidence, wherever you go."</p>
    </div>

    <div className="moving-text-container">
      <div className="moving-text">
        <span>Puma</span>
        <span>Nike</span>
        <span>Adidas</span>
        <span>Skechers</span>
        <span>HRX</span>
        <span>Polo</span>
        <span>Puma</span>
        <span>Nike</span>
        <span>Adidas</span>
        <span>Skechers</span>
        <span>HRX</span>
        <span>Polo</span>
        <span>Puma</span>
        <span>Nike</span>
        <span>Adidas</span>
        <span>Skechers</span>
        <span>HRX</span>
        <span>Polo</span>
        <span>Puma</span>
        <span>Nike</span>
        <span>Adidas</span>
        <span>Skechers</span>
        <span>HRX</span>
        <span>Polo</span>
      </div>
    </div>

    <div className="product-grid">
      <div className="product-card">
        <img src="/images/puma.avif" alt="Puma Shoes" />
        <h3>Puma</h3>
        <p>Sporty design for ultimate comfort.</p>
        
      </div>
      <div className="product-card">
        <img src="/images/nike.webp" alt="Nike Shoes" />
        <h3>Nike Air</h3>
        <p>Iconic style, legendary cushioning.</p>
        
      </div>
      <div className="product-card">
        <img src="/images/addidas.jpeg" alt="Adidas Ultraboost" />
        <h3>Adidas</h3>
        <p>Energy return with every stride.</p>
        
      </div>
      <div className="product-card">
        <img src="/images/skechers.jpeg" alt="Skechers Go Walk" />
        <h3>Skechers</h3>
        <p>Lightweight and responsive for everyday.</p>
        
      </div>
      <div className="product-card">
        <img src="/images/hrx.webp" alt="Skechers Go Walk" />
        <h3>HRX</h3>
        <p>Comfortable Sneakers</p>
        
      </div>
      <div className="product-card">
        <img src="/images/polo.jpg" alt="Skechers Go Walk" />
        <h3>Polo</h3>
        <p>.</p>
        {/* this is how i can add butoon to the product page also */}
        {/* <a href="#" className="shop-button">Shop Now</a> */}
      </div>
    </div>
  </div>
</section>




      {/* Section 4 – Product Cards */}
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
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
