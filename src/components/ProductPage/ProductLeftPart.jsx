import React from "react";

const ProductLeftPart = ({ onCategorySelect }) => {
  const categoriesData = [
    { name: "All Products" },
    { name: "Woman’s Fashion" },
    { name: "Men’s Fashion" },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby’s & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" },
  ];

  return (
    <div>
      <h2 className="font-bold text-[20px] font-primary text-[#262626]">
        Shop by Category
      </h2>
      <div className="mt-[15px]">
        {categoriesData.map((category, i) => (
          <p
            key={i}
            onClick={() => onCategorySelect(category.name)}
            className="font-primary mb-4 cursor-pointer hover:text-primary"
          >
            {category.name}
          </p>
        ))}
      </div>

      <h2 className="font-bold text-[20px] font-primary text-[#262626] mt-[40px]">
        Shop by Color
      </h2>

      <div className="mt-[15px] flex flex-col gap-y-4">
        <div className="flex items-center ">
          <div className="w-[11px] h-[11px] rounded-full bg-orange-500"></div>
          <span className="ml-[10px] font-primary">Color 1</span>
        </div>
        <div className="flex items-center ">
          <div className="w-[11px] h-[11px] rounded-full bg-green-500"></div>
          <span className="ml-[10px] font-primary">Color 2</span>
        </div>
        <div className="flex items-center ">
          <div className="w-[11px] h-[11px] rounded-full bg-blue-500"></div>
          <span className="ml-[10px] font-primary">Color 3</span>
        </div>
      </div>
    </div>
  );
};

export default ProductLeftPart;
