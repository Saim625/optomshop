import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../utils/CartContext";
import { FiChevronDown } from "react-icons/fi";
import { PRODUCTS } from "../utils/productdata";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileCategoryDropdownOpen, setIsMobileCategoryDropdownOpen] =
    useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const allProducts = Object.values(PRODUCTS).flat();
  const { uniqueCartItemCount } = useContext(CartContext);

  const searchRef = useRef(null);
  const inputRef = useRef(null); // Ref for the input field

  const scrollToCategory = (categoryId) => {
    if (location.pathname !== "/") {
      // Navigate to the homepage with scrollTo state
      navigate("/", { state: { scrollTo: categoryId } });
      setIsMobileMenuOpen(false);
    } else {
      // If already on the homepage, trigger scrolling
      const targetElement = document.getElementById(categoryId.toLowerCase());
      if (targetElement) {
        const headerHeight = window.innerWidth <= 768 ? 400 : 74;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
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

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
        setSearchQuery("");
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus input when the search bar becomes visible
  useEffect(() => {
    if (isSearchVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/favicon.jpeg"}
              alt="logo"
              className="h-16 w-16 object-contain"
            />
          </Link>{" "}
        </div>

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
                  onClick={() => scrollToCategory("refraction-products")}
                >
                  Refraction Products
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => scrollToCategory("test-room-products")}
                >
                  Test Room Products
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => scrollToCategory("laboratory-products")}
                >
                  Laboratory Products
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => scrollToCategory("miscellaneous-products")}
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
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchVisible((prev) => !prev)}
              className="text-customBlue"
              aria-label="Toggle search bar"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/search_icon.png"}
                alt="Search"
                className="w-6 h-6"
              />
            </button>
            {/* Search Input */}
            {isSearchVisible && (
              <div className="relative">
                <input
                  ref={inputRef} // Attach ref for focusing
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="absolute top-10 right-0 text-customBlue bg-white border border-gray-300 rounded-md p-2 shadow-md w-44 xs:w-56 sm:w-72"
                  aria-expanded={isSearchVisible}
                  aria-haspopup="listbox"
                />
                {searchQuery && (
                  <div
                    className="absolute top-20 right-0 text-customBlue bg-white border border-gray-300 rounded-md shadow-md mt-1 w-44 xs:w-56 sm:w-72 max-h-56 overflow-auto"
                    role="listbox"
                  >
                    {suggestions.length > 0 ? (
                      <ul>
                        {suggestions.map((product) => (
                          <li
                            key={product.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              navigate(`/product/${product.id}`);
                              setIsSearchVisible(false);
                              setSearchQuery("");
                              setSuggestions([]);
                            }}
                            role="option"
                            aria-selected="false"
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

          {/* Cart I  con */}
          <NavLink to="/cart" className="relative text-customBlue">
            <img
              src={process.env.PUBLIC_URL + "/images/cart.png"}
              alt="Cart"
              className="w-8 h-8"
            />
            {uniqueCartItemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full px-2 py-0 text-xs font-bold shadow-lg">
                {uniqueCartItemCount}
              </span>
            )}
          </NavLink>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden hover:text-customBlue"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/menu_icon.png"}
              alt="Menu"
              className="w-6 h-6"
            />
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
          <ul className="space-y-4 py-4 px-6 text-customBlue">
            <li className="font-semibold">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
            {/* Mobile Category Dropdown */}
            <li>
              <button
                className="flex items-center w-full text-left font-semibold"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the event from propagating
                  setIsMobileCategoryDropdownOpen((prev) => !prev); // Toggle dropdown state
                }}
              >
                Categories
                <FiChevronDown
                  className={`ml-1 text-lg transform transition-transform ${
                    isMobileCategoryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileCategoryDropdownOpen && (
                <ul
                  className="pl-4 space-y-2 "
                  onClick={(e) => e.stopPropagation()} // Prevent dropdown click from closing
                >
                  <li>
                    <button
                      onClick={() => {
                        scrollToCategory("refraction-products");
                        setIsMobileCategoryDropdownOpen(false); // Close dropdown
                      }}
                      className="text-left w-full hover:bg-gray-100 px-2 py-1"
                    >
                      Refraction Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        scrollToCategory("test-room-products");
                        setIsMobileCategoryDropdownOpen(false); // Close dropdown
                      }}
                      className="text-left w-full hover:bg-gray-100 px-2 py-1"
                    >
                      Test Room Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        scrollToCategory("laboratory-products");
                        setIsMobileCategoryDropdownOpen(false); // Close dropdown
                      }}
                      className="text-left w-full hover:bg-gray-100 px-2 py-1"
                    >
                      Laboratory Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        scrollToCategory("miscellaneous-products");
                        setIsMobileCategoryDropdownOpen(false); // Close dropdown
                      }}
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
