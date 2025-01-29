import React from "react";

const ProductSpecificationList = ({ specifications }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8 border">
      <h2 className="text-lg font-medium text-customBlue mb-4 border-b pb-2">Specifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specifications.map((spec, index) => (
          <div key={index} className="flex items-baseline space-y-2"> {/* Used items-baseline for alignment */}
            
            {/* Adjusted circle for proper alignment */}
            <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-customSeaGreen mr-2 flex-shrink-0">
              <span className="text-white text-xs font-bold leading-tight">&#10003;</span>
            </div>
            
            <p className="text-sm text-gray-700 leading-relaxed">{spec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecificationList;

