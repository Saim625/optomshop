import React, { createContext, useState, useEffect } from "react";

// Create the CartContext
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem("cartItems");
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      return [];
    }
  });

  // Sync cartItems with localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items to localStorage:", error);
    }
  }, [cartItems]);

    // Sync cart across tabs
    useEffect(() => {
      const syncCart = () => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        } else {
          setCartItems([]);
        }
      };
  
      // Poll localStorage every 500ms for changes
      const interval = setInterval(syncCart, 500);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
  

  // Add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const { id, userSelections } = product;
      const uniqueKey = `${id}-${JSON.stringify(userSelections)}`;
      const existingItem = prevItems.find((item) => item.uniqueKey === uniqueKey);

      if (existingItem) {
        return prevItems.map((item) =>
          item.uniqueKey === uniqueKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
          uniqueKey,
        },
      ];
    });
  };

  // Remove an item from the cart
  const removeFromCart = (uniqueKey) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.uniqueKey !== uniqueKey)
    );
  };

  // Update item quantity
  const updateCartItemQuantity = (uniqueKey, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.uniqueKey === uniqueKey
          ? { ...item, quantity: Math.max(newQuantity, 1) }
          : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => setCartItems([]);

  // Calculate total items and unique items
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const uniqueCartItemCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        cartItemCount,
        uniqueCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
