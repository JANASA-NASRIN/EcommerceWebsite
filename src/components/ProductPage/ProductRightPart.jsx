import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

const ProductRightPart = ({ selectedCategory }) => {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clickedHeart, setClickedHeart] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 
  const productsPerPage = 9;

  const { addToCart, toggleWishlist, wishlist } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProductData(data.products))
      .catch((err) => console.log(err));
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

  // ---------- Robust filtering ----------
  let filteredProducts = productData;

  // Filter by category if selectedCategory has matching products
  if (selectedCategory && selectedCategory !== "All Products") {
    const mappedCategories = categoryMapping[selectedCategory] || [];
    const categoryFiltered = productData.filter((p) =>
      mappedCategories.includes(p.category)
    );

    // Only replace filteredProducts if categoryFiltered has items
    if (categoryFiltered.length > 0) {
      filteredProducts = categoryFiltered;
    }
  }

  // Filter by search term
  if (searchTerm.trim() !== "") {
    const searchFiltered = filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Only replace filteredProducts if searchFiltered has items
    if (searchFiltered.length > 0) {
      filteredProducts = searchFiltered;
    }
  }

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleHeartClick = (item) => {
    toggleWishlist(item);
    setClickedHeart(item.id);
    setTimeout(() => setClickedHeart(null), 300);
  };

  return (
    <div className="mt-[5px]">
      {/* Search bar */}
      <div className="flex justify-end mb-4 items-center">
        <p className="mr-2">Filter:</p>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); 
          }}
          className="w-[200px] h-[32px] rounded-md border border-gray-300 pl-3 outline-none"
        />
      </div>

      <div className="flex flex-wrap">
        {currentProducts.length > 0 ? (
          currentProducts.map((item) => (
            <div key={item.id} className="w-1/3 p-4">
              <div className="w-full mt-10 group bg-white shadow rounded-lg p-4 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
                {/* Product Image */}
                <div className="relative bg-secondary rounded flex items-center justify-center w-full h-[250px] overflow-hidden">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="max-h-full object-contain"
                    />
                  </Link>

                  {/* Discount badge */}
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
                        handleHeartClick(item);
                      }}
                      className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center transition-transform duration-300 transform hover:scale-110"
                    >
                      <CiHeart
                        className={`${
                          wishlist.find((p) => p.id === item.id)
                            ? "text-orange-500"
                            : "text-black"
                        } ${clickedHeart === item.id ? "scale-125" : "scale-100"}`}
                        size={20}
                      />
                    </button>

                    <button
                      onClick={() => navigate(`/product/${item.id}`)}
                      className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center cursor-pointer transition-transform duration-300 transform hover:scale-110"
                    >
                      <IoEyeOutline size={20} />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item);
                    }}
                    className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
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
          ))
        ) : (
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
