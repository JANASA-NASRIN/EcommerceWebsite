
import React, { useState } from "react";
import Container from "../components/Header/Layout/Container";
import ProductLeftPart from "../components/ProductPage/ProductLeftPart";
import ProductRightPart from "../components/ProductPage/ProductRightPart";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // default = show all products

  return (
    <Container>
      <div className="py-30 flex">
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