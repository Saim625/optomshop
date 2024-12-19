import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const CategoryRow = ({ categoryName, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // Detect mobile
  const containerRef = useRef(null);

  const productsPerPage = 4; // Number of products visible at a time (desktop)
  const desktopTotalPages = Math.ceil(products.length / productsPerPage);
  const mobileTotalPages = products.length;

  const totalPages = isMobile ? mobileTotalPages : desktopTotalPages; // Dynamic dots
  const productWidth = 300; // Width of a single product card (adjust to match styles)

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640); // Update mobile state on window resize
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (!isMobile && currentIndex < desktopTotalPages - 1) {
      setCurrentIndex(currentIndex + 1); // Desktop: Scroll by pages
    } else if (isMobile && currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1); // Mobile: Scroll by individual products
    }
  };

  const handlePrev = () => {
    if (!isMobile && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Desktop: Scroll by pages
    } else if (isMobile && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Mobile: Scroll by individual products
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollOffset = isMobile
        ? currentIndex * productWidth // Mobile: scroll by individual product width
        : currentIndex * container.offsetWidth; // Desktop: scroll by page width
      container.scrollTo({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  }, [currentIndex, isMobile]);

  // Listen to scroll events for syncing dots on mobile
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || !isMobile) return;

    const newIndex = Math.round(container.scrollLeft / productWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentIndex, isMobile]);

  const scrollToPage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="text-center mb-12">
      {/* Category Name */}
      <h2 className="my-10 font-bold text-3xl text-customBlue">{categoryName}</h2>

      {/* Product Row Container */}
      <div className="relative bg-gray-100 py-6 px-6 rounded-lg shadow-lg">
        {/* Arrows */}
        {products.length > productsPerPage && (
          <>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-customSeaGreen text-white opacity-90 hover:opacity-100 rounded-full p-3 shadow-md hover:scale-110 transition duration-300 hidden sm:block"
              onClick={handlePrev}
              style={{ zIndex: 10 }}
            >
              &lt;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-customSeaGreen text-white opacity-90 hover:opacity-100 rounded-full p-3 shadow-md hover:scale-110 transition duration-300 hidden sm:block"
              onClick={handleNext}
              style={{ zIndex: 10 }}
            >
              &gt;
            </button>
          </>
        )}

        {/* Product Cards */}
        <div
          ref={containerRef}
          className={`flex overflow-x-scroll scroll-smooth ${
            products.length < 4 ? "justify-start sm:justify-center" : ""
          } no-scrollbar`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex-shrink-0 ${
                products.length <= 2
                  ? "w-full sm:w-1/3"
                  : products.length === 3
                  ? "w-full sm:w-1/4"
                  : "w-full sm:w-1/4"
              }`}
              style={{ width: productWidth }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center items-center space-x-2 sm:hidden">
        {Array(totalPages)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              onClick={() => scrollToPage(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentIndex === index
                  ? "bg-customSeaGreen"
                  : "bg-gray-400"
              } transition-colors duration-300`}
            ></span>
          ))}
      </div>
    </div>
  );
};

CategoryRow.propTypes = {
  categoryName: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default CategoryRow;
