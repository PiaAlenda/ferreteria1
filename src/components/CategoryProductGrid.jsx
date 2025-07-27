export default function CategoryProductGrid() {
  const products = [
    {
      id: 1,
      name: "Taladro Inalámbrico DeWalt 20V",
      price: 2850.0,
      originalPrice: 3200.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Herramientas Eléctricas",
      inStock: true,
      isOffer: true,
    },
    {
      id: 2,
      name: "Juego de Destornilladores Stanley 12 pzs",
      price: 450.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Herramientas Manuales",
      inStock: true,
      isOffer: false,
    },
    {
      id: 3,
      name: "Pintura Látex Blanco 4L Comex",
      price: 680.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Pinturas",
      inStock: true,
      isOffer: false,
    },
    {
      id: 4,
      name: 'Tornillos Autorroscantes 1" x100 pzs',
      price: 85.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Tornillos",
      inStock: false,
      isOffer: false,
    },
    {
      id: 5,
      name: 'Sierra Circular Bosch 7 1/4"',
      price: 3200.0,
      originalPrice: 3600.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Herramientas Eléctricas",
      inStock: true,
      isOffer: true,
    },
    {
      id: 6,
      name: "Martillo de Garra Truper 16 oz",
      price: 320.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Herramientas Manuales",
      inStock: true,
      isOffer: false,
    },
    {
      id: 7,
      name: "Cable Eléctrico THW 12 AWG x100m",
      price: 1850.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Electricidad",
      inStock: true,
      isOffer: false,
    },
    {
      id: 8,
      name: 'Llave Inglesa Ajustable 12" Urrea',
      price: 280.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Herramientas Manuales",
      inStock: true,
      isOffer: false,
    },
    {
      id: 9,
      name: 'Tubo PVC 4" x 6m Hidráulico',
      price: 420.0,
      image: "/placeholder.svg?height=250&width=250",
      category: "Plomería",
      inStock: true,
      isOffer: false,
    },
  ]

  return (
    <div className="product-grid-container">
      <div className="grid-header">
        <div className="breadcrumb">
          <span>Inicio</span> / <span>Productos</span> / <span className="current">Ferretería General</span>
        </div>

        <div className="grid-controls">
          <div className="results-count">Mostrando {products.length} productos</div>

          <div className="sort-controls">
            <label>Ordenar por:</label>
            <select>
              <option>Más relevantes</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Nombre A-Z</option>
              <option>Nombre Z-A</option>
            </select>
          </div>

          <div className="view-controls">
            <button className="view-btn active">⊞</button>
            <button className="view-btn">☰</button>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className={`product-card ${!product.inStock ? "out-of-stock" : ""}`}>
            {product.isOffer && <div className="offer-badge">OFERTA</div>}
            {!product.inStock && <div className="stock-badge">AGOTADO</div>}

            <div className="product-image">
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
              <div className="product-overlay">
                <button className="quick-view">Vista rápida</button>
                <button className="add-to-cart" disabled={!product.inStock}>
                  {product.inStock ? "Agregar al carrito" : "Sin stock"}
                </button>
              </div>
            </div>

            <div className="product-info">
              <div className="product-category">{product.category}</div>
              <h3 className="product-name">{product.name}</h3>

              <div className="product-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.originalPrice && <span className="original-price">${product.originalPrice.toFixed(2)}</span>}
              </div>

              <div className="product-actions">
                <button className="btn-primary" disabled={!product.inStock}>
                  {product.inStock ? "Comprar ahora" : "Sin stock"}
                </button>
                <button className="btn-secondary">♡</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn" disabled>
          ‹ Anterior
        </button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">Siguiente ›</button>
      </div>
    </div>
  )
}
