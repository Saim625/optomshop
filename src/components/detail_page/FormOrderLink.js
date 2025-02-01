import React from 'react';
import PropTypes from 'prop-types';

const FormOrderLink = ({ instructions, orderFormLink }) => {
    return (
        <div>
            <p className="text-gray-700 bg-gray-200 p-1 rounded-md">{instructions}</p>
            <a
                href={orderFormLink}
                className="inline-block my-2 px-4 py-2 bg-customSeaGreen md:hover:bg-customBlue text-white rounded"
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
