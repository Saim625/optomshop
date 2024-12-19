import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../utils/CartContext";
import { FiChevronDown } from "react-icons/fi";
import { PRODUCTS } from "../utils/productdata";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileCategoryDropdownOpen, setIsMobileCategoryDropdownOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const allProducts = Object.values(PRODUCTS).flat();
  const { cartItemCount } = useContext(CartContext);

  const searchRef = useRef(null);
  const categoryRef = useRef(null);

  const handleScrollToCategory = (categoryId) => {
    const targetElement = document.getElementById(categoryId.toLowerCase());
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
        setIsCategoryDropdownOpen(false); // Close dropdown after scrolling
        setIsMobileMenuOpen(false); // Close the mobile menu (if applicable)
    }
  };

  // Search Logic
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filteredSuggestions = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : []);
    } else {
      setSuggestions([]);
    }
  };

  // Close search and dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
        setSearchQuery("");
        setSuggestions([]);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsMobileCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold text-customBlue">LOGO</div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex space-x-10 text-customBlue items-center">
          <NavLink to="/" className="font-medium">
            Home
          </NavLink>
          <NavLink to="/about" className="font-medium">
            About Us
          </NavLink>
          <NavLink to="/contact" className="font-medium">
            Contact Us
          </NavLink>
          <div
  className="relative group"
  onMouseEnter={() => setIsCategoryDropdownOpen(true)}
  onMouseLeave={() => setIsCategoryDropdownOpen(false)}
>
  <button className="text-customBlue font-medium flex items-center">
    Categories
    <FiChevronDown className="ml-1 text-lg" />
  </button>
  {isCategoryDropdownOpen && (
    <div className="absolute top-full mt-0 left-0 text-customBlue bg-white border shadow-lg rounded-lg w-56">
      {/* Scroll Logic for Category Links */}
      <button
        className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
        onClick={() => handleScrollToCategory("laboratory-products")}>
        Laboratory Products
      </button>
      <button
        className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
        onClick={() => handleScrollToCategory("refraction-products")}
      >
        Refraction Products
      </button>
      <button
        className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
        onClick={() => handleScrollToCategory("test-room-products")}
      >
        Test Room Products
      </button>
      <button
        className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
        onClick={() => handleScrollToCategory("miscellaneous-products")}
      >
        Miscellaneous Products
      </button>
    </div>
  )}
</div>

        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <div ref={searchRef} className="relative flex">
            <button onClick={() => setIsSearchVisible((prev) => !prev)} className="text-customBlue">
              <img
                src="/images/search_icon.png"
                alt="Search"
                className="w-6 h-6"
              />
            </button>
            {isSearchVisible && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="absolute top-10 right-0 bg-white border border-gray-300 rounded-md p-2 shadow-md w-56 sm:w-72"
                />
                {searchQuery && (
                  <div className="absolute top-20 right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 w-56 sm:w-72 max-h-56 overflow-auto">
                    {suggestions.length > 0 ? (
                      <ul>
                        {suggestions.map((product) => (
                          <li
                            key={product.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            {product.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="p-2 text-gray-500">No result found</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative text-customBlue">
            <img src="/images/cart.png" alt="Cart" className="w-8 h-8" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full px-2 py-0 text-xs font-bold shadow-lg">
                {cartItemCount}
              </span>
            )}
          </NavLink>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden hover:text-customBlue"
          >
            <img src="/images/menu_icon.png" alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="bg-white shadow-md">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
            <li className="relative group">
              <button
                className="flex items-center w-full text-left"
                onClick={() =>
                  setIsMobileCategoryDropdownOpen((prev) => !prev)
                }
              >
                Categories <FiChevronDown className="ml-1 text-lg" />
              </button>
              {isMobileCategoryDropdownOpen && (
                <ul className="pl-4 space-y-2" ref={categoryRef}>
                  <li>
                    <button
                      onClick={() => handleScrollToCategory("laboratory-products")}
                      className="text-left w-full hover:bg-gray-100 px-2 py-1"
                    >
                      Laboratory Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToCategory("refraction-products")}
                      className="text-left w-full hover:bg-gray-100 px-2 py-1"
                    >
                      Refraction Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToCategory("test-room-products")}
                      className="text-left w-full hover:bg-gray-100 px-2 py-1"
                    >
                      Test Room Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToCategory("miscellaneous-products")}
                      className="text-left w-full hover:bg-gray-100 px-2 py-1"
                    >
                      Miscellaneous Products
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;