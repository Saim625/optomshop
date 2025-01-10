import React from "react";

const IshiharaVarients = ({ variants, onVariantSelect, selectedValue }) => {
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
        value={selectedValue}
        onChange={(e) => onVariantSelect(e.target.value)}
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
