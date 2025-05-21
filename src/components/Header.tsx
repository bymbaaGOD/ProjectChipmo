import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products, categories } from '../data/products';

const Header: React.FC = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState("All");
  const navigate = useNavigate();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsProductsDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 100); // 100ms delay
  };

  const handleProductClick = (productId?: number) => {
    closeDropdown(); // Close dropdown on click
    if (productId) {
      navigate(`/products/${productId}`);
    } else {
      navigate('/products');
    }
  };

  const handleCategoryHover = (category: string) => {
    setHoveredCategory(category);
  };

  const filteredProducts = hoveredCategory === "All"
    ? products
    : products.filter(product => product.category === hoveredCategory);

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/images/chipmo.png" 
              alt="Chipmo Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-yellow-500 transition-colors">НҮҮР</Link>
          <Link to="/rfid-about" className="hover:text-gray-300 transition-colors">RFID ТУХАЙ</Link>
          <Link to="/system" className="hover:text-gray-300 transition-colors">СИСТЕМ</Link>
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button onClick={() => handleProductClick()} className="hover:text-gray-300 transition-colors">БҮТЭЭГДЭХҮҮН</button>
            {isProductsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md flex z-10">
                {/* Categories List */}
                <div className="flex flex-col p-4 border-r border-gray-200">
                  {categories.map(category => (
                    <button 
                      key={category}
                      onMouseEnter={() => handleCategoryHover(category)}
                      onClick={() => navigate(`/products?category=${category}`)}
                      className={`text-left px-4 py-2 rounded-md ${hoveredCategory === category ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Products List (Vertical, full height) */}
                <div className="p-4 flex flex-col gap-2 w-96">
                  {[...filteredProducts].reverse().map(product => (
                    <button 
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
                    >
                       {product.image && (
                          <img src={product.image} alt={product.name} className="h-8 w-8 object-cover rounded" />
                        )}
                      <span className="text-sm text-left whitespace-nowrap">{product.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/calculator" className="hover:text-gray-300 transition-colors">ТООЦООЛУУР</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">ХОЛБОГДОХ</Link>
          <Link to="/quote" className="text-blue-500 hover:text-blue-400 transition-colors">ҮНИЙН САНАЛ</Link>
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center">
          <span className="text-sm text-gray-300">MN/EN</span>
        </div>

        {/* Mobile Menu Button (optional - can be added later) */}
        {/* <div className="md:hidden">
          <button>
            <Menu className="h-6 w-6" />
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header; 