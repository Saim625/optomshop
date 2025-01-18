import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../utils/CartContext";
import CheckoutModal  from "../utils/CheckoutModal";

const CartPage = () => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const { cartItems, removeFromCart, updateCartItemQuantity, cartItemCount } =
    useContext(CartContext);

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0
  );

  // Helper function to format price for display
  const formatPrice = (price) => `£${Number(price || 0).toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        // Display message if the cart is empty
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        // Display cart items and summary if cart is not empty
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Items in Cart</h3>
            <ul className="space-y-4">
              {cartItems.map((item) => {
                
                const { variants = "", pdVariants = "", ishiharaVariants = "" } =
                  item.userSelections || {}; // Destructure user selections

                  let price = item.price;

                  if(ishiharaVariants){
                    price = ishiharaVariants.price
                  }

                return (
                  <li
                    key={item.uniqueKey} // Use uniqueKey to identify variants
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image || "/placeholder-image.png"} // Fallback for missing image
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-contain"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        {variants && <p className="text-sm text-gray-600">Variant: {variants}</p>}
                        {pdVariants && <p className="text-sm text-gray-600">PD: {pdVariants}</p>}
                        {ishiharaVariants && (
                          <p className="text-sm text-gray-600">Ishihara: {ishiharaVariants.name}</p>
                        )}
                        <p className="text-sm text-gray-600">{formatPrice(price)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateCartItemQuantity(item.uniqueKey, item.quantity - 1)
                          } // Update quantity for the specific uniqueKey
                          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
                          disabled={item.quantity <= 1} // Disable if quantity is 1
                        >
                          -
                        </button>
                        <span className="px-4 text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateCartItemQuantity(item.uniqueKey, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.uniqueKey)} // Remove item by uniqueKey
                        className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Total Items:</span>
                <span>{cartItemCount}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Total Price:</span>
                <span className="font-semibold text-gray-800">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            { checkoutModalOpen && <CheckoutModal totalPrice={totalPrice} onClose={ () => setCheckoutModalOpen(false)} /> }
            <button
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded text-center font-semibold"
              onClick={() => setCheckoutModalOpen(true)}
              disabled={cartItems.length === 0}
            >
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
