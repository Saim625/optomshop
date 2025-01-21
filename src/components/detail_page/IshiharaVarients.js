import React from "react";

const IshiharaVarients = ({ variants, onSelectionChange, selectedValue }) => {
  return (
    <div className="max-w-sm mb-4">
      <label
        htmlFor="variant"
        className="block mb-2 text-sm font-medium text-customBlue"
      >
        Select a variant
      </label>
      <select
        id="variant"
        className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={selectedValue && selectedValue.productCode}
        onChange={(e) => {
          const selectedVariant = variants.find(
            (variant) => variant.productCode === e.target.value
          );
          if (selectedVariant) {
            onSelectionChange(selectedVariant); // Pass the full object
          }
        }}
      >
        <option value="" disabled>
          -- Select a variant --
        </option>
        {variants.map((variant) => (
          <option
            key={variant.productCode}
            value={variant.productCode}
            disabled={!variant.inStock}
          >
            {variant.name} (£{variant.price}){" "}
            {variant.inStock ? "" : " - Out of Stock"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IshiharaVarients;
