import React from "react";
import { GiBinoculars } from "react-icons/gi";
import { FaSearchPlus, FaMoneyBillAlt, FaShippingFast } from "react-icons/fa";

const HeroBanner = () => {

  const scrollToCategory = (categoryId) => {
    const targetElement = document.getElementById(categoryId.toLowerCase());
    if (targetElement) {
      const headerHeight = window.innerWidth <= 768 ? 400 : 74;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
  return (
  <div className="relative h-[50vh] xl:h-[70vh] bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 lg:px-24">
      {/* Left Content */}
      <div className="relative z-10 w-full sm:w-1/2 text-center my-auto sm:text-left">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-customBlue leading-tight">
          Welcome to <span className="text-customSeaGreen">Optom Shop</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700 max-w-md mx-auto sm:mx-0">
          Explore our wide range of optometry and optical equipment, designed
          for professionals. Reliable, affordable, and ready for your needs.
        </p>
        <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-customSeaGreen text-white font-medium text-sm sm:text-lg rounded-lg hover:bg-customBlue transition-all"
        onClick={() => scrollToCategory("laboratory-products")}>
          Explore Products
        </button>
      </div>

      {/* Right Section with Icons */}
      <div className="relative w-full sm:w-1/2 h-full hidden sm:flex items-center justify-center">
        {/* Icon Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {/* Icon 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-customSeaGreen text-white p-4 lg:p-6 rounded-full shadow-lg hover:scale-110 transition-transform">
              <GiBinoculars size={40} className="lg:size-50" />
            </div>
            <p className="mt-2 ml-4 sm:mt-4 text-base w-24 xl:w-full xl:text-lg text-gray-600 font-medium">
              Wide Range of Products
            </p>
          </div>
          {/* Icon 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-customSeaGreen text-white p-4 lg:p-6 rounded-full shadow-lg hover:scale-110 transition-transform">
              <FaSearchPlus size={40} className="lg:size-50" />
            </div>
            <p className="mt-2 sm:mt-4 text-base xl:text-lg text-gray-600 font-medium">
              High-Quality Optics
            </p>
          </div>
          {/* Icon 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-customSeaGreen text-white p-4 lg:p-6 rounded-full shadow-lg hover:scale-110 transition-transform">
              <FaShippingFast size={40} className="lg:size-50" />
            </div>
            <p className="mt-2 sm:mt-4 text-base xl:text-lg text-gray-600 font-medium">
              Free Shipping
            </p>
          </div>
          {/* Icon 4 */}
          <div className="flex flex-col items-center">
            <div className="bg-customSeaGreen text-white p-4 lg:p-6 rounded-full shadow-lg hover:scale-110 transition-transform">
              <FaMoneyBillAlt size={40} className="lg:size-50" />
            </div>
            <p className="mt-2 sm:mt-4 text-base xl:text-lg text-gray-600 font-medium">
              Affordable Pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
