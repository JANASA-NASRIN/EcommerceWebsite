import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { wishlist, toggleWishlist, addToCart } = useWishlist();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="border rounded-lg p-4 shadow relative bg-white hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="font-semibold mt-2 text-gray-800">{product.title}</h2>
      <p className="text-red-600 font-bold">${product.price}</p>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-black text-white py-2 mt-2 rounded hover:bg-gray-800"
      >
        Add To Cart
      </button>

      {/* Wishlist Heart */}
      <button
        className="absolute top-2 right-2 text-xl text-red-500"
        onClick={() => toggleWishlist(product)}
      >
        {isWishlisted ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default ProductCard;
