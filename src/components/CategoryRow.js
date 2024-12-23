import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const CategoryRow = ({ categoryName, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [visibleDots, setVisibleDots] = useState([]);
  const containerRef = useRef(null);

  const calculateProductsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) return 4;
    if (screenWidth >= 1024) return 3;
    if (screenWidth >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const updateProductsPerPage = () => setProductsPerPage(calculateProductsPerPage());
    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);
    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const updateVisibleDots = (newIndex) => {
    const maxVisibleDots = 6;
    const start = Math.floor(newIndex / maxVisibleDots) * maxVisibleDots;
    const end = Math.min(start + maxVisibleDots, totalPages);
    setVisibleDots([...Array(end - start).keys()].map((i) => i + start));
  };

  useEffect(() => {
    updateVisibleDots(currentIndex);
  }, [currentIndex, totalPages]);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollOffset = currentIndex * container.offsetWidth;
      container.scrollTo({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
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
  }, [currentIndex]);

  return (
    <div className="text-center mb-12">
      <h2 className="my-10 font-bold text-3xl text-customBlue">{categoryName}</h2>

      <div className="relative bg-gray-100 py-6 px-6 rounded-lg shadow-lg">
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

      {/* Dynamic Dots */}
      <div className="mt-4 flex justify-center items-center space-x-2 lg:hidden">
        {visibleDots.map((dot) => (
          <span
            key={dot}
            onClick={() => setCurrentIndex(dot)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === dot ? "bg-customSeaGreen" : "bg-gray-400"
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
