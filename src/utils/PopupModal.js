import React from 'react';
import PropTypes from 'prop-types';

const PopupModal = ({ isOpen, title, message, onClose, onGoToDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-2 text-customBlue">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end space-x-2">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Close
          </button>
          {onGoToDetails && (
            <button 
              className="px-4 py-2 bg-customSeaGreen text-white rounded md:hover:bg-customBlue"
              onClick={onGoToDetails}
            >
              Go to Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

PopupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onGoToDetails: PropTypes.func,
};

export default PopupModal;
