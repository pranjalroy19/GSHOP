import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card border p-4 rounded shadow-sm">
    <img
      src={product.image}
      alt={product.name}
      className="product-image"
      style={{ width: '100%', height: '200px', objectFit: 'contain' }}
    />
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-gray-700">₹{product.price}</p>
    {product.description && (
      <p className="text-sm text-gray-600 mt-2">{product.description}</p>
    )}
    <Link to={`/product/${product.id}`} className="text-blue-600 hover:underline">
      View
    </Link>
  </div>
);

export default ProductCard;
