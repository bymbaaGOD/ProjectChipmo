// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Chainway C66 UHF RFID Reader
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        The Ultimate Compact and Lightweight Handheld RFID Reader
      </p>
      <a
        href="#contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Get a Quote
      </a>
    </section>
  );
};

export default HeroSection;
