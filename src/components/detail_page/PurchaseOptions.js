import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PurchaseOptions = ({ variants, onSelectionChange, selectedValue }) => {
  return (
    <div className="mt-0 mb-4">
      <h3 className="text-lg text-customBlue font-semibold mb-2">
        Purchase Options
      </h3>
      <div className="flex flex-col">
        {variants.map((variant, index) => (
          <label key={index} className="mb-2">
            <input
              type="radio"
              value={variant.type}
              checked={selectedValue?.type === variant.type}
              onChange={(e) =>
                onSelectionChange(
                  variants.find((v) => v.type === e.target.value)
                )
              }
              className="mr-2"
              disabled={!variant.inStock}
            />
            {variant.type === "set" ? `Set (${variant.setSize})` : `Individual lens`}{" "}
            - £{variant.price}
            <span
              className={`ml-2 ${
                variant.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {variant.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </label>
        ))}
      </div>

      {selectedValue?.type === 'individual lens' && (
        <div className="p-2 bg-gray-100 border rounded mt-4">
          <h4 className="font-semibold mb-1">Individual Lens Information:</h4>
          <p className="text-sm text-gray-700">
            Most powers available, in stock.
          </p>
          <p className="text-sm text-gray-700">
            Please state which powers are required through email.
          </p>
        </div>
      )}
    </div>
  );
};

PurchaseOptions.propTypes = {
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        inStock: PropTypes.bool.isRequired,
        setSize: PropTypes.string,
      })
    ).isRequired,
    selectedValue: PropTypes.shape({
      type: PropTypes.string,
      price: PropTypes.string,
      inStock: PropTypes.bool,
      setSize: PropTypes.string,
    }),
    onSelectionChange: PropTypes.func.isRequired,
  };

export default PurchaseOptions;
