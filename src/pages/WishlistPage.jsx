import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const WishlistPage = () => {
  const { wishlist, moveToCart, removeFromCart, moveAllToCart } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-16">
        <FaShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-xl font-medium">Your wishlist is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with Move All to Cart */}
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-medium">Wishlist ({wishlist.length})</h1>
        <button
          onClick={moveAllToCart}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Move All To Cart
        </button>
      </div>

      {/* Wishlist items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="border p-4 rounded relative bg-white shadow hover:shadow-lg">
            {/* Remove button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="absolute top-2 right-2 text-red-500"
            >
              <FaTrash />
            </button>

            {/* Product image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover mb-2 rounded"
            />

            {/* Product info */}
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-red-500 font-medium">${item.price}</p>

            {/* Add to Cart */}
            <button
              onClick={() => moveToCart(item)}
              className="mt-2 w-full bg-black text-white py-1 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
