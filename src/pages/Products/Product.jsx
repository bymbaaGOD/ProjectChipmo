import React, { useState, useEffect } from "react";
import {ProductCard} from "./ProductCard";
import {ProductDetailModal} from "./ProductDetailModal";

export const Product = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "MC50 Enterprise",
      desc: "Industrial-grade UHF RFID Reader with Android 12",
      price: "$1,299",
      img: "./mc50.png",
      specs: ["Android 12", "5G Connectivity", "IP65 Rating"],
    },
    {
      id: 2,
      name: "R420 Fixed",
      desc: "High-Performance Fixed RFID Reader for Enterprise",
      price: "$2,499",
      img: "./r420.png",
      specs: ["4-Port Reader", "Enterprise Grade", "PoE Support"],
    },
    {
      id: 3,
      name: "RT700i",
      desc: "Industrial RFID Printer/Encoder System",
      price: "$3,199",
      img: "/rt700.png",
      specs: ["300 DPI", "Metal Build", "6 IPS Speed"],
    },
    {
      id: 4,
      name: "MR60 Mobile",
      desc: "Professional Mobile RFID Reader Solution",
      price: "$1,899",
      img: "/mr60.png",
      specs: ["Handheld", "Long Range", "Battery 12h"],
    },
    {
      id: 5,
      name: "Chainway C72",
      desc: "Commercial RFID Label Printer & Encoder",
      price: "$2,799",
      img: "/c72.png",
      specs: ["Label Printing", "RFID Encoding", "Network Ready"],
    },
    {
      id: 6,
      name: "Zebra MC3330xR",
      desc: "High-Speed RFID Portal Scanner System",
      price: "$4,299",
      img: "/mc3330.png",
      specs: ["Portal Scanner", "Multi-Tag Read", "Auto-Track"],
    },
  ];

  const handleDetailsClick = (productId) => {
    setActiveProduct(productId);
  };

  const handleCloseModal = () => {
    setActiveProduct(null);
  };

  const selectedProduct = products.find((p) => p.id === activeProduct);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Rubik&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center px-6 py-20 w-screen text-white bg-black min-h-screen">
        <div className="w-full max-w-[1400px]">
          <h1 className="mb-16 text-7xl text-center text-orange-500 font-bold">
            RFID PRODUCTS
          </h1>
          <section className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDetailsClick={handleDetailsClick}
              />
            ))}
          </section>
        </div>
      </main>

      {activeProduct !== null && selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Product;
