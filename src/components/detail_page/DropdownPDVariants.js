import React from 'react';
import PropTypes from 'prop-types';

const DropdownPDVariants = ({ variants, onSelectionChange, selectedValue }) => {
    return (
        <div className="mt-0 mb-4">
            <label className="block text-sm font-medium mb-2 text-customBlue">Select PD (Pupillary Distance)</label>
            <select
                value={selectedValue}
                onChange={(e) => onSelectionChange(e.target.value)}
                className="w-40 p-2 border rounded"
            >
                <option value="" disabled>Select a PD...</option>
                {variants.map((variant, index) => (
                    <option key={index} value={variant.PD} disabled={!variant.inStock}>
                        {variant.PD} mm {variant.price && `- £${variant.price}`} {variant.inStock ? '' : '(Out of Stock)'}
                    </option>
                ))}
            </select>
        </div>
    );
};

DropdownPDVariants.propTypes = {
    variants: PropTypes.arrayOf(
        PropTypes.shape({
            PD: PropTypes.string.isRequired,
            price: PropTypes.string,
            inStock: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onSelectionChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default DropdownPDVariants;
