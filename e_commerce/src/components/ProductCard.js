import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded shadow-sm">
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-gray-700">₹{product.price}</p>
    <Link to={`/product/${product._id}`} className="text-blue-600">View</Link>
  </div>
);
export default ProductCard;
