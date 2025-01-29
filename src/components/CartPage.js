import React, { useContext, useState } from "react";
import { CartContext } from "../utils/CartContext";
import CheckoutModal  from "../utils/CheckoutModal";

const CartPage = () => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const { cartItems, removeFromCart, updateCartItemQuantity, cartItemCount } =
    useContext(CartContext);

    const checkoutItems = cartItems.map((item) => {
      const { variants, pdVariants, ishiharaVariants, purchaseOptions, options, addOns } = item.userSelections || {}; // Destructure user selections
    
      // Default description and price
      let description = variants ? `Variant: ${variants}` : "";
      let price = item.price;
    
      // Update description and price based on available selections
      if (ishiharaVariants) {
        description = `Ishihara: ${ishiharaVariants.name || "N/A"}`;
        price = ishiharaVariants.price || price; // Fallback to default price if not available
      } else if (pdVariants) {
        description = `PD: ${pdVariants.PD || "N/A"}`;
        price = pdVariants.price || price;
      } else if (purchaseOptions) {
        description = `Option: ${purchaseOptions.label || "N/A"}`;
        price = purchaseOptions.price || price;
      } else if (options) {
        description = `type: ${options.type || "N/A"}`;
        price = options.price || price;
      } else if (addOns && addOns.length > 0) {
        description += "\nAdd-Ons: ";
        addOns.forEach((addOn, index) => {
          description += `${index + 1}. ${addOn.name || "N/A"}`;
          if (index < addOns.length - 1) {
            description += ", "; // Add a comma between add-ons, except for the last one
          }
          price += addOn.price || 0;
        });
      }
    
      return {
        id: item.uniqueKey,
        name: item.name || "Unnamed Product", // Fallback to default name
        description: description,
        price: price,
        quantity: item.quantity || 1, // Ensure default quantity is 1
        image: item.imageURL  || "", // Fallback if no image is available
      };
    });

  // Calculate total price of items in the cart
  let totalPrice = checkoutItems.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0
  );
  

  // Helper function to format price for display
  const formatPrice = (price) => `£${Number(price || 0).toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Your Cart</h2>
      {checkoutItems.length === 0 ? (
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
    {checkoutItems.map((item) => (
      <li
        key={item.id}
        className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
      >
        {/* Left Section: Item Info */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img
            src={item.image || "/placeholder-image.png"}
            alt={item.name}
            className="w-16 h-16 rounded-lg object-contain"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-600">{formatPrice(item.price)}</p>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Quantity Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="px-4 text-gray-800">{item.quantity}</span>
            <button
              onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Remove
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

          <div className="bg-white p-6 shadow-lg rounded-lg h-60">
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
            { checkoutModalOpen && <CheckoutModal totalPrice={totalPrice} checkoutItems={checkoutItems} onClose={ () => setCheckoutModalOpen(false)} /> }
            <button
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded text-center font-semibold"
              onClick={() => setCheckoutModalOpen(true)}
              disabled={checkoutItems.length === 0}
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
