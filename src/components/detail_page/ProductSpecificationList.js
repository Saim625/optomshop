import React from "react";

const ProductSpecificationList = ({ specifications }) => {
  return (
    <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] mt-10">
    <h2 className="text-2xl md:text-3xl font-bold text-customBlue text-center mb-10">
      Product Specification
    </h2>
    <div className="flex flex-col items-center space-y-6">
      {specifications.map((spec, index) => (
        <div key={index} className="flex items-center space-x-4 w-full max-w-3xl">
          {/* Center-Aligned Dot */}
          <div className="w-2 h-2 bg-customBlue rounded-full shadow-md flex-shrink-0"></div>

          {/* Specification Text */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {spec}
          </p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductSpecificationList;
