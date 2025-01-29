import React, { useState } from "react";
import PropTypes from "prop-types";

const MagnifierPurchaseOptions = ({ options, onSelectionChange }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].label);

   const handleOptionChange = (event) => {
       const label = event.target.value;
       setSelectedOption(label);
       onSelectionChange(options.find(option => option.label === label))
   };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-customBlue">Select Purchase Option</label>
            <div>
                {options.map((option, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name="purchaseOption"
                            value={option.label}
                            checked={selectedOption === option.label}
                            onChange={handleOptionChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                            htmlFor={`option-${index}`}
                            className="ml-2 text-gray-700"
                        >
                            {option.label} (£{option.price})
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

MagnifierPurchaseOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            price: PropTypes.string.isRequired,
        })
    ).isRequired,
    onSelectionChange: PropTypes.func.isRequired,
};

export default MagnifierPurchaseOptions;
