import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const CategoryRow = ({ categoryName, products, isFirstRow }) => {
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    if (isFirstRow) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowMessage(true); // Show the message when the row enters the viewport
          }
        },
        { threshold: 0.5 }
      );

      if (rowRef.current) {
        observer.observe(rowRef.current);
      }

      return () => {
        if (rowRef.current) {
          observer.unobserve(rowRef.current);
        }
      };
    }
  }, [isFirstRow]);

  // Hide message after interaction or timeout
  useEffect(() => {
    const hideMessage = () => setShowMessage(false);
    const container = containerRef.current;

    if (isFirstRow && container) {
      container.addEventListener("scroll", hideMessage);
    }

    const timer = setTimeout(hideMessage, 10000); // Auto-hide after 10 seconds

    return () => {
      clearTimeout(timer);
      if (isFirstRow && container) {
        container.removeEventListener("scroll", hideMessage);
      }
    };
  }, [isFirstRow, showMessage]);

  // Responsive logic for products per page
  const calculateProductsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) return 4;
    if (screenWidth >= 1024) return 3;
    if (screenWidth >= 768) return 2;
    return 1;
  };

  const [productsPerPage, setProductsPerPage] = useState(calculateProductsPerPage);

  useEffect(() => {
    const updateProductsPerPage = () => setProductsPerPage(calculateProductsPerPage());
    window.addEventListener("resize", updateProductsPerPage);
    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  // Scroll to next set of products
  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll to previous set of products
  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-center mb-12" ref={rowRef}>
      <h2 className="my-10 font-bold text-3xl text-customBlue">{categoryName}</h2>

      <div className="relative bg-gray-100 py-6 px-6 rounded-lg shadow-lg">
        {/* Swipe to explore message */}
        {isFirstRow && showMessage && (
          <div className="absolute inset-x-0 top-0 text-center text-gray-600 bg-white bg-opacity-80 py-2 rounded-lg shadow-sm lg:hidden">
            <span className="font-medium text-sm">Swipe for more products</span>
          </div>
        )}

        {/* Arrows for navigation */}
        {products.length > productsPerPage && (
          <>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-customSeaGreen text-white opacity-90 hover:opacity-100 rounded-full p-3 shadow-md hover:scale-110 transition duration-300 hidden lg:block"
              onClick={handlePrev}
              style={{ zIndex: 10 }}
            >
              &lt;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-customSeaGreen text-white opacity-90 hover:opacity-100 rounded-full p-3 shadow-md hover:scale-110 transition duration-300 hidden lg:block"
              onClick={handleNext}
              style={{ zIndex: 10 }}
            >
              &gt;
            </button>
          </>
        )}

        {/* Product cards */}
        <div
          ref={containerRef}
          className={`flex overflow-x-scroll scroll-smooth ${
            products.length < productsPerPage ? "justify-center" : ""
          } no-scrollbar`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0"
              style={{
                width: `calc(100% / ${productsPerPage})`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CategoryRow.propTypes = {
  categoryName: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  isFirstRow: PropTypes.bool, // Add prop type for the new prop
};

export default CategoryRow;
