// AddOns.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddOns = ({ addOns }) => {
    const [selectedAddOns, setSelectedAddOns] = useState([]);

    const handleCheckboxChange = (event, addOn) => {
        if (event.target.checked) {
            setSelectedAddOns([...selectedAddOns, addOn]);
        } else {
            setSelectedAddOns(selectedAddOns.filter(item => item.name !== addOn.name));
        }
    };

    return (
        <div className="my-4">
            <h3 className="text-lg font-semibold mb-2 text-customBlue">Choose Add-Ons</h3>
            <div className="border p-2 rounded-md">
                {addOns.map((addOn, index) => (
                    <label key={index} className="block mb-2">
                        <input
                            type="checkbox"
                            className="mr-2"
                            onChange={(event) => handleCheckboxChange(event, addOn)}
                        />
                        {addOn.name} - £{addOn.price}
                        {addOn.description && <span className="text-gray-600"> ({addOn.description})</span>}
                    </label>
                ))}
            </div>
            <div className="mt-4">
                <h4 className="text-md font-medium text-customBlue">Selected Add-Ons:</h4>
                {selectedAddOns.length > 0 ? (
                    <ul className="list-disc list-inside">
                        {selectedAddOns.map((item, index) => (
                            <li key={index}>{item.name} - £{item.price}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-600 text-customBlue">No add-ons selected.</p>
                )}
            </div>
        </div>
    );
};

AddOns.propTypes = {
    addOns: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            description: PropTypes.string,
        })
    ).isRequired,
};

export default AddOns;
