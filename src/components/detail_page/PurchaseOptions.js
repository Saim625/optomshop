import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PurchaseOptions = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].type);

     useEffect(() => {
        const defaultOption = options.find(option => option.type === 'set');
        if (defaultOption) {
            setSelectedOption(defaultOption.type);
        }
    }, [options]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="mt-0 mb-4">
            <h3 className="text-lg text-customBlue font-semibold mb-2">Purchase Options</h3>
            <div className="flex flex-col">
                {options.map((option, index) => (
                    <label key={index} className="mb-2">
                        <input
                            type="radio"
                            value={option.type}
                            checked={selectedOption === option.type}
                            onChange={handleOptionChange}
                            className="mr-2"
                        />
                        {option.type === 'set'
                            ? `Set (${option.setSize})`
                            : `Individual`} - £{option.price} 
                        <span className={`ml-2 ${option.inStock ? 'text-green-600' : 'text-red-600'}`}>
                            {option.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </label>
                ))}
            </div>

            {selectedOption === 'individual' && (
                <div className="p-2 bg-gray-100 border rounded mt-4">
                    <h4 className="font-semibold mb-1">Individual Lens Information:</h4>
                    <p className="text-sm text-gray-700">Most powers available, in stock.</p>
                    <p className="text-sm text-gray-700">During checkout, please state which powers are required or email us.</p>
                </div>
            )}
        </div>
    );
};

PurchaseOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            inStock: PropTypes.bool.isRequired,
            setSize: PropTypes.string,
        })
    ).isRequired,
};

export default PurchaseOptions;
