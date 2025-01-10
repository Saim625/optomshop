import { useState } from "react";

const VariantsSelector = ({ variants }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-customBlue">Variants</h3>
      <div className="flex space-x-4 mt-2">
        {variants.map((variant) => (
          <button
            key={variant.productCode}
            className={`py-2 px-4 rounded-lg border ${
              selectedVariant.productCode === variant.productCode
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleVariantChange(variant)}
          >
            {variant.name} - £{variant.price}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">Selected: {selectedVariant.name}</p>
      </div>
    </div>
  );
};

export default VariantsSelector;
