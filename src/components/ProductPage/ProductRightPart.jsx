import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

const ProductRightPart = ({ selectedCategory }) => {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const { addToCart, toggleWishlist } = useWishlist();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);

  const categoryMapping = {
    "Woman’s Fashion": ["tops", "womens-dresses", "womens-shoes", "womens-bags"],
    "Men’s Fashion": ["mens-shirts", "mens-shoes", "mens-watches"],
    Electronics: ["smartphones", "laptops", "tablets"],
    "Home & Lifestyle": ["furniture", "home-decoration", "lighting"],
    Medicine: ["skincare"],
    "Sports & Outdoor": ["sports-accessories", "motorcycle"],
    "Baby’s & Toys": ["toys", "sunglasses"],
    "Groceries & Pets": ["groceries"],
    "Health & Beauty": ["fragrances", "beauty"],
  };

  let filteredProducts =
    !selectedCategory || selectedCategory === "All Products"
      ? productData
      : productData.filter((p) =>
          categoryMapping[selectedCategory]?.includes(p.category)
        );

  if (filteredProducts.length === 0) filteredProducts = productData;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="mt-[60px]">
      <div className="flex flex-wrap">
        {currentProducts.map((item) => (
          <div key={item.id} className="w-1/3 p-4">
            <div className="w-full mt-10 group bg-white shadow rounded-lg p-4">

              {/* Product Image Section */}
              <div className="relative bg-secondary rounded flex items-center justify-center w-full h-[250px] overflow-hidden">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="max-h-full object-contain"
                  />
                </Link>

                {/* Sale badge */}
                {item.discountPercentage > 0 && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{Math.round(item.discountPercentage)}%
                  </span>
                )}

                {/* Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(item);
                    }}
                    className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center"
                  >
                    <CiHeart />
                  </button>
                  <div className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center">
                    <IoEyeOutline />
                  </div>
                </div>

                {/* Add to Cart button (hover only) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <Link to={`/product/${item.id}`}>
                  <p className="font-primary font-medium cursor-pointer">
                    {item.title}
                  </p>
                </Link>
                <p className="py-2 font-primary font-medium text-primary">
                  ${item.price}
                </p>

                {/* Rating */}
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(item.rating) ? "" : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-gray-500 text-sm ml-2">
                    ({item.rating})
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {currentProducts.length === 0 && (
          <p className="text-center text-gray-500 w-full mt-10">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductRightPart;
