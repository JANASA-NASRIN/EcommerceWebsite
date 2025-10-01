import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/Header/Layout/Container";
import ProductLeftPart from "../components/ProductPage/ProductLeftPart";
import ProductRightPart from "../components/ProductPage/ProductRightPart";

const Product = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // If navigated from BannerLeft, update category
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  return (
    <Container>

      {/* Breadcrumb */}
        <div className="flex py-[96px] font-primary">
          <p className="text-[14px] leading-[21px]">Home</p>
          <p className="px-3">/</p>
          <p className="text-[14px] leading-[21px]">Product</p>
        </div>
      <div className="py-5 flex">
        {/* Left side - Categories */}
        <div className="w-[30%]">
          <ProductLeftPart onCategorySelect={setSelectedCategory} />
        </div>

        {/* Right side - Products */}
        <div className="w-[70%]">
          <ProductRightPart selectedCategory={selectedCategory} />
        </div>
      </div>
    </Container>
  );
};

export default Product;
