import React from "react";
export default function ProductCard({ product }) {
  return (
    <div className="ProductCard">
      <img src={product.thumbnail} alt={product.title} />
      {product.title}
    </div>
  );
}
