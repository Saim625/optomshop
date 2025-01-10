import React from 'react';
import PropTypes from 'prop-types';

const DropdownVariants = ({ variants, onSelectionChange, selectedValue }) => {
    return (
        <div className="mt-0 mb-4">
            <label className="block text-sm font-medium mb-2 text-customBlue">Select Lens Power</label>
            <select
                value={selectedValue}
                onChange={(e) => onSelectionChange(e.target.value)}
                className="w-40 p-2 border rounded"
            >
                <option value="" disabled>Select a power...</option>
                {variants.map((variant, index) => (
                    <option key={index} value={variant.power}>
                        {variant.power} 
                        {variant.price ? ` - £${variant.price}` : ''}
                    </option>
                ))}
            </select>
        </div>
    );
};

DropdownVariants.propTypes = {
    variants: PropTypes.arrayOf(
        PropTypes.shape({
            power: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        })
    ).isRequired,
    onSelectionChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default DropdownVariants;
