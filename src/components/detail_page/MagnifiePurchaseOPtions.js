import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MagnifierPurchaseOptions = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].label);

    useEffect(() => {
       const defaultOption = options.find(option => option.label === 'Single unit');
       if (defaultOption) {
           setSelectedOption(defaultOption.label);
       }
   }, [options]);

   const handleOptionChange = (event) => {
       setSelectedOption(event.target.value);
   };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Select Purchase Option</label>
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
                            {option.label} ({option.price})
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
    onOptionSelect: PropTypes.func.isRequired,
};

export default MagnifierPurchaseOptions;
