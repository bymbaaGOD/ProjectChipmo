import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronRight, ArrowRight, Check, FileText } from 'lucide-react';
import { products, categories } from '../data/products';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const navigate = useNavigate();
  
  // Calculate product counts for each category
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    categories.forEach(category => {
      counts[category] = products.filter(product => product.category === category).length;
    });
    counts["All"] = products.length;
    return counts;
  }, []);

  // Filter products based on search term and selected categories
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.includes("All") || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      if (category === "All") {
        return ["All"];
      }
      const newCategories = prev.filter(c => c !== "All");
      if (prev.includes(category)) {
        return newCategories.filter(c => c !== category);
      }
      return [...newCategories, category];
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section - Split Layout */}
      <div className="flex w-full h-[500px]">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/3 bg-gray-800 text-white p-8 flex flex-col justify-center">
          <div className="max-w-sm mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Barcode / RFID / Biometric</h3>
            <h2 className="text-4xl font-bold">OUR PRODUCTS</h2>
            <p className="text-gray-400 leading-relaxed text-base">
              Chainway provides an extensive range of products and solutions including rugged mobile computers, handheld RFID readers, wearable RFID reader, fixed RFID readers, rugged tablet, biometric scanners, vehicle computer, printers, etc. to meet the needs of various industries.
            </p>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="w-full lg:w-2/3 relative">
          <img 
            src="/images/productsbanner.jpg" 
            alt="Chainway Products" 
            className="w-full h-full object-cover object-center"
          />
          {/* Optional: Keep a subtle gradient if needed */}
          {/* <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-blue-600" />
                Filters
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        selectedCategories.includes(category)
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-gray-300 group-hover:border-blue-600'
                      }`}>
                        {selectedCategories.includes(category) && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {categoryCounts[category]}
                    </span>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="relative w-full mb-8">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <div className="aspect-square relative bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* No Results Message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
