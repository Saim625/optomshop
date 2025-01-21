import React from 'react';
import PayPalButton  from "../components/PaypalCheckout.js";

const CheckoutModal = ({ totalPrice, onClose, checkoutItems }) => {

    const formatPrice = (price) => `£${Number(price || 0).toFixed(2)}`;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Paying {formatPrice(totalPrice)}</h3>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-800"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                </div>
                
                {/* Content Area - Scrollable Section */}
                <div className="overflow-y-auto max-h-[60vh]">
                <div className="mt-4 p-5">
                    <PayPalButton totalPrice={totalPrice} checkoutItems={checkoutItems} />
                </div>
                </div>
            </div>
        </div>
      );
};

export default CheckoutModal;
