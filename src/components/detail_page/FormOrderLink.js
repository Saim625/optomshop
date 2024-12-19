// FormOrderLink.jsx
import React from 'react';
import PropTypes from 'prop-types';

const FormOrderLink = ({ instructions, orderFormLink }) => {
    return (
        <div>
            <p className="text-gray-700">{instructions}</p>
            <a
                href={orderFormLink}
                className="inline-block my-2 px-4 py-2 bg-customSeaGreen hover:bg-customBlue text-white rounded"
                download
            >
                Download Order Form
            </a>
        </div>
    );
};

FormOrderLink.propTypes = {
    instructions: PropTypes.string.isRequired,
    orderFormLink: PropTypes.string.isRequired,
};

export default FormOrderLink;
