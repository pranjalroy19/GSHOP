import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-20 text-lg animate-pulse">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10 animate-fade-in">
      <div className="flex-1 flex justify-center">
        <img
          src={product.image || '/placeholder.jpg'}
          alt={product.name}
          className="w-full max-w-md object-contain rounded-xl shadow-md border"
        />
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
        <p className="text-3xl font-semibold text-green-600">₹{product.price}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>

        <button
          onClick={() => alert('Add to cart functionality here')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
