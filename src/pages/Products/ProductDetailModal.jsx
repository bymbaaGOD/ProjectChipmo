import React from "react";

export const ProductDetailModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4">
      <div className="bg-white text-black max-w-lg w-full rounded-2xl shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <img src={product.img} alt={product.name} className="w-full rounded-lg mb-4" />
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="mb-4">{product.desc}</p>
        <ul className="mb-4 list-disc list-inside text-gray-700">
          {product.specs.map((spec, i) => (
            <li key={i}>{spec}</li>
          ))}
        </ul>
        <div className="text-right text-xl font-semibold">{product.price}</div>
      </div>
    </div>
  );
};
