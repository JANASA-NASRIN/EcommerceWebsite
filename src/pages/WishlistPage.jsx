import React, { useEffect, useState, useRef } from "react";
import { useWishlist } from "../context/WishlistContext";
import { FaTrash } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Header/Layout/Container";
const WishlistPage = () => {
  const {
    wishlist,
    moveToCart,
    removeFromWishlist,
    moveAllToCart,
    addToCart,
    toggleWishlist,
  } = useWishlist();

  const [justForYou, setJustForYou] = useState([]);
  const [clickedHeart, setClickedHeart] = useState(null);
  const navigate = useNavigate();

  const cardRefs = useRef([]); // refs to measure heights
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setJustForYou(data.products))
      .catch((err) => console.log(err));
  }, []);

  // Adjust all cards to same height
  useEffect(() => {
    if (cardRefs.current.length === 0) return;
    const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, [justForYou]);

  const handleHeartClick = (item) => {
    toggleWishlist(item);
    setClickedHeart(item.id);
    setTimeout(() => setClickedHeart(null), 300);
  };

  if (wishlist.length === 0) {
    return (
      <Container>
        <div className="text-center py-16">
          <h2 className="text-xl font-medium">Your wishlist is empty</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {/* Wishlist Header */}
      <div className="flex justify-between mb-6 mt-[80px]">
        <h1 className="text-xl font-medium">Wishlist ({wishlist.length})</h1>
        <button
          onClick={moveAllToCart}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border rounded p-4 bg-white shadow relative hover:shadow-lg transition"
          >
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-3 right-3 text-red-500"
            >
              <FaTrash />
            </button>

            {item.discountPercentage > 0 && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{Math.round(item.discountPercentage)}%
              </span>
            )}

            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-contain mb-3 rounded"
            />

            <h3 className="font-medium text-sm">{item.title}</h3>

            <div className="flex items-center gap-2 mt-1">
              <p className="text-red-500 font-bold">${item.price}</p>
              {item.oldPrice && (
                <p className="line-through text-gray-400">${item.oldPrice}</p>
              )}
            </div>

            <button
              onClick={() => moveToCart(item)}
              className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div className="mt-12">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">Just For You</h2>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            See All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {justForYou.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ minHeight: maxHeight }} // equal height
              className="group border rounded p-4 bg-white shadow hover:shadow-lg transition relative flex flex-col"
            >
              {/* Image */}
              <div className="relative bg-secondary rounded flex items-center justify-center w-full h-40 md:h-48 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />

                {/* Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  {/* Heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHeartClick(product);
                    }}
                    className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center transition-transform duration-300"
                  >
                    <CiHeart
                      className={`${
                        wishlist.find((p) => p.id === product.id)
                          ? "text-orange-500"
                          : "text-black"
                      } ${clickedHeart === product.id ? "scale-125" : "scale-100"}`}
                      size={20}
                    />
                  </button>

                  {/* Eye */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                    className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center"
                  >
                    <IoEyeOutline size={20} />
                  </button>
                </div>

                {/* Add to Cart hover */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <p className="mt-2 text-sm font-medium flex-1">{product.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-red-500 font-bold">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <p className="line-through text-gray-400 text-sm">
                    ${Math.round(
                      product.price +
                        (product.price * product.discountPercentage) / 100
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WishlistPage;
