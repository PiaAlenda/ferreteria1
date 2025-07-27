import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "./data/products";
import SideBar from "./CategorySidebar";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

export default function SearchResultPage() {
  const { termino } = useParams();
  const location = useLocation();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const termLower = termino.toLowerCase().trim();

  const isCategoryRoute = location.pathname.startsWith("/categoria/");

  const filteredProducts = products.filter((product) => {
    if (isCategoryRoute) {
      return product.category.toLowerCase() === termLower;
    } else {
      return product.name.toLowerCase().includes(termLower);
    }
  });

  return (
    <div className="search-page-layout">
  <SideBar />
  <div className="products">
    {filteredProducts.length === 0 ? (
      <div className="noresults">
        <h1>No se encontraron productos para <strong>"{termino}"</strong>.</h1>
        <ul className="search-suggestions">
          <li>Utiliza términos más generales o menos específicos.</li>
          <li>Comprueba la ortografía.</li>
          <li>
            Vuelve a <a href="/" className="link">la página principal</a> para seguir buscando.
          </li>
        </ul>
      </div>
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
  </div>

  {selectedProduct && (
    <ProductDetail
      product={selectedProduct}
      onClose={() => setSelectedProduct(null)}
    />
  )}
</div>
  );
}
