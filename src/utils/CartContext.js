import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  /**
   * Helper function to calculate the price based on the selected options.
   * It ensures the correct price is applied for the given product configuration.
   */
  const calculatePrice = (product) => {
    const {
      price: basePrice = 0,
      userSelections = {},
      variants = [],
      pdVariants = [],
      ishiharaVariants = [],
    } = product; // Default values for missing fields

    let finalPrice = basePrice;

    // Check `variants` for selected option and price
    if (userSelections.variants && variants.length > 0) {
      const selectedVariant = variants.find(
        (variant) => variant.power === userSelections.variants
      );
      if (selectedVariant?.price) {
        finalPrice = selectedVariant.price;
      }
    }

    // Check `pdVariants` for selected option and price
    if (userSelections.pdVariants && pdVariants.length > 0) {
      const selectedPDVariant = pdVariants.find(
        (pdVariant) => pdVariant.PD === userSelections.pdVariants
      );
      if (selectedPDVariant?.price) {
        finalPrice = selectedPDVariant.price;
      }
    }

    // Check `ishiharaVariants` for selected option and price
    if (userSelections.ishiharaVariants && ishiharaVariants.length > 0) {
      const selectedIshiharaVariant = ishiharaVariants.find(
        (ishiharaVariant) =>
          ishiharaVariant.name === userSelections.ishiharaVariants
      );
      if (selectedIshiharaVariant?.price) {
        finalPrice = selectedIshiharaVariant.price;
      }
    }

    return Number(finalPrice); // Ensure price is a number
  };

  /**
   * Adds a product to the cart. It generates a unique identifier for each product
   * based on its ID and user selections to differentiate between different variants.
   */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const { id, userSelections } = product;

      // Generate a unique key based on product ID and user selections
      const uniqueKey = `${id}-${JSON.stringify(userSelections)}`;

      // Check if the same product with the same selections exists
      const existingItem = prevItems.find((item) => item.uniqueKey === uniqueKey);

      if (existingItem) {
        // If the exact product with the same selections exists, increase its quantity
        return prevItems.map((item) =>
          item.uniqueKey === uniqueKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add a new cart item if no match is found
      return [
        ...prevItems,
        {
          ...product,
          quantity: 1, // Start with quantity 1
          price: calculatePrice(product), // Dynamically calculate price
          image: product.imageURL, // Ensure the image is included
          uniqueKey, // Add the unique key for differentiation
        },
      ];
    });
  };

  /**
   * Removes a product from the cart based on its unique key.
   * This ensures that only the selected variant is removed.
   */
  const removeFromCart = (uniqueKey) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.uniqueKey !== uniqueKey)
    );
  };

  /**
   * Updates the quantity of a specific cart item identified by its unique key.
   */
  const updateCartItemQuantity = (uniqueKey, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.uniqueKey === uniqueKey
          ? { ...item, quantity: Math.max(newQuantity, 1) } // Ensure minimum quantity is 1
          : item
      )
    );
  };

  /**
   * Clears all items from the cart.
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Calculates the total number of items in the cart by summing up the quantities.
   */
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
