import React from "react";

export const ProductCard = ({ product, onDetailsClick }) => {
  return (
    <div className="bg-gray-900 p-6 w-90 rounded-2xl shadow-lg">
      <img src={product.img} alt={product.name} className="mb-4 w-40 h-40 rounded-xl" />
      <h2 className="text-2xl text-orange-400 font-bold mb-2">{product.name}</h2>
      <p className="mb-2">{product.desc}</p>
      <ul className="mb-4 list-disc list-inside text-sm text-gray-300">
        {product.specs.map((spec, i) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">{product.price}</span>
        <button
          onClick={() => onDetailsClick(product.id)}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Details
        </button>
      </div>
    </div>
  );
};
