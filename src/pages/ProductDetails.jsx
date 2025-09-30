import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductDetail from "../components/SingleProductDetail/SingleProductDetail";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return <SingleProductDetail product={product} />;
};

export default ProductDetails;
