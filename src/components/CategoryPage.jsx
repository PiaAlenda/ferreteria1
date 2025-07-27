import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./data/products";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

const CategoryPage = () => {
  const { slug } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <section className="category-page container">
      <h2>Productos en categoría: {slug.replace(/-/g, " ")}</h2>

      {filteredProducts.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={setSelectedProduct}
            />
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default CategoryPage;
