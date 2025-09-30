import React, { useState, useEffect } from "react";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { FiTruck, FiRotateCcw } from "react-icons/fi";
import { useWishlist } from "../../context/WishlistContext";

const SingleProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart, toggleWishlist, wishlist } = useWishlist();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${product.category}`
        );
        const data = await response.json();
        setRelatedProducts(
          data.products.filter((p) => p.id !== product.id).slice(0, 4)
        );
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [product.category, product.id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Image Gallery */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={product.title}
                className={`w-20 h-20 object-contain border rounded cursor-pointer ${
                  selectedImage === img ? "border-primary" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-[400px] h-[400px] object-contain border rounded"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-2 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(product.rating)
                    ? "text-[#FFAD33]"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-500">(150 Reviews)</span>
            <span className="ml-2 text-green-500">In Stock</span>
          </div>

          <p className="text-2xl font-semibold mt-3">${product.price}</p>
          <p className="text-gray-600 mt-3">{product.description}</p>

          <hr className="border-t-2 border-gray-600 w-full mt-6" />

          {/* Colours */}
          <div className="mt-4 flex flex-row items-center gap-4">
            <p className="font-medium mb-2">Colours:</p>
            <div className="flex gap-2">
              <span className="w-6 h-6 rounded-full bg-primary cursor-pointer border"></span>
              <span className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer border"></span>
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-4">
            <p className="font-medium mb-2">Size:</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border rounded px-3 py-1 hover:bg-primary hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded px-3 py-1">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart({ ...product, quantity })}
              className="bg-primary text-white px-6 py-2 rounded"
            >
              Buy Now
            </button>

            {/* Wishlist */}
            <button
              className="border rounded p-2"
              onClick={() => toggleWishlist(product)}
            >
              {isWishlisted ? (
                <FaHeart className="text-xl text-red-500" />
              ) : (
                <FaRegHeart className="text-xl" />
              )}
            </button>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 border rounded p-4 text-sm space-y-4 w-[400px]">
            <div className="flex items-center gap-3">
              <FiTruck className="text-xl text-gray" />
              <div className="flex flex-col">
                <span className="font-bold">Free Delivery</span>
                <a href="#" className="text-blue-600 underline">
                  Enter your postal code for Delivery Availability
                </a>
              </div>
            </div>

            <hr className="border border-gray-500 w-full" />

            <div className="flex items-center gap-3">
              <FiRotateCcw className="text-xl text-gray" />
              <div className="flex flex-col">
                <span>Return Delivery within 30 days</span>
                <a href="#" className="text-blue-600 underline">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Related Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded p-3 flex flex-col items-center"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-32 h-32 object-contain"
              />
              <p className="mt-2 text-sm font-medium">{item.title}</p>
              <p className="text-primary font-semibold">${item.price}</p>
              <button
                onClick={() => addToCart({ ...item, quantity: 1 })}
                className="mt-2 bg-primary text-white px-3 py-1 rounded text-sm"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
