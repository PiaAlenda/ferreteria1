export default function ProductCard({ product, onSelectProduct }) {
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en el producto: ${product.name}`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const tieneDescuento = product.discount && product.discount > 0;
  const precioOriginal = product.price;
  const precioDescontado = tieneDescuento
    ? (precioOriginal * (1 - product.discount)).toFixed(2)
    : null;

  return (
    <div
      className={`product-card ${product.stock === 0 ? "out-of-stock" : ""}`}
      onClick={() => onSelectProduct(product)}
    >
      <div className="product-image">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
        />
        {tieneDescuento && (
          <div className="offer-badge">-{product.discount * 100}%</div>
        )}
        {product.stock === 0 && <div className="stock-badge">Agotado</div>}
      </div>

      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>

        <div className="product-price">
          <span className="current-price">
            ${tieneDescuento ? precioDescontado : precioOriginal.toFixed(2)}
          </span>
          {tieneDescuento && (
            <span className="original-price">
              ${precioOriginal.toFixed(2)}
            </span>
          )}
        </div>

        <div className="product-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-product"
            onClick={(e) => e.stopPropagation()}
          >
            Comprar
          </a>
          <button
            className="btn-secondaryy"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
          >
            👁
          </button>
        </div>
      </div>
    </div>
  );
}
