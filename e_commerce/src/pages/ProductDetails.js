import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const addToCart = () => {
    axios
      .post("/cart", { productId: product._id, quantity })
      .then(() => alert("Added to cart"))
      .catch((err) => console.error(err));
  };

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img
          src={product.image || "/.jpg"}
          alt={product.name}
          className="w-full rounded-xl shadow-md object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-green-600 mb-4">
          ₹{product.price}
        </p>

        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-1 font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded"
          />
        </div>

        <button
          onClick={addToCart}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add to Cart
        </button>

        <p className="mt-4 text-sm text-gray-500">
          {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
