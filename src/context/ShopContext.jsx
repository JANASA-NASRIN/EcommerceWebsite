// src/context/ShopContext.jsx
import React, { createContext, useState, useContext } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState("home"); // for simple SPA navigation

  // Cart functions
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart(cart.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getCartSubtotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Wishlist functions
  const toggleWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const moveAllToCart = () => {
    const newItems = wishlist.filter(w => !cart.some(c => c.id === w.id));
    setCart([...cart, ...newItems.map(item => ({ ...item, quantity: 1 }))]);
    setWishlist([]);
  };

  return (
    <ShopContext.Provider value={{
      cart,
      wishlist,
      currentPage,
      setCurrentPage,
      addToCart,
      updateQuantity,
      removeFromCart,
      getCartSubtotal,
      toggleWishlist,
      moveAllToCart
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within a ShopProvider");
  return context;
};
