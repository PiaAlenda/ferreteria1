export default function SideBar() {
  const categories = [
    { name: "Herramientas Manuales", count: 45 },
    { name: "Herramientas Eléctricas", count: 32 },
    { name: "Tornillos y Fijaciones", count: 128 },
    { name: "Pinturas y Barnices", count: 67 },
    { name: "Materiales de Construcción", count: 89 },
    { name: "Plomería", count: 54 },
    { name: "Electricidad", count: 76 },
    { name: "Ferretería General", count: 93 },
  ]

  const brands = ["DeWalt", "Bosch", "Makita", "Stanley", "Black & Decker", "Truper", "Pretul", "Urrea"]

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Categorías</h3>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#">
                {category.name}
                <span className="count">({category.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <h3>Marcas</h3>
        <ul className="brand-list">
          {brands.map((brand, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" />
                <span>{brand}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <h3>Rango de Precio</h3>
        <div className="price-range">
          <input type="number" placeholder="Mín" />
          <span>-</span>
          <input type="number" placeholder="Máx" />
          <button>Filtrar</button>
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Disponibilidad</h3>
        <label>
          <input type="checkbox" />
          <span>En stock</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Agotado</span>
        </label>
      </div>
    </aside>
  )
}