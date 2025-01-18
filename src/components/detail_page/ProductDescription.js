import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] mt-10">
    <h2 className="text-2xl md:text-3xl font-bold text-customBlue text-center mb-10">
      Product Description
    </h2>
    <div className="flex flex-col items-center space-y-6">
      {description.map((desc, index) => (
        <div key={index} className="flex items-start space-x-3 w-full max-w-3xl">
          {/* Bullet before the description */}
          <div className="w-2 h-2 bg-customBlue rounded-full flex-shrink-0 mt-1.5"></div>
          {/* Description Text */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductDescription;
