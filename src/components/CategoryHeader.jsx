export default function Header() {
  return (
    <header className="CategoryHeader">
      <div className="CategoryContainer">
        <div className="CategoryHeader-content">
          <div className="logo">
            <h1>Ferretería El Martillo</h1>
            <span className="tagline">Todo para tu construcción</span>
          </div>

          <nav className="main-nav">
            <ul>
              <li>
                <a href="#" className="active">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#">Productos</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>

          <div className="CategoryHeader-actions">
            <div className="CategorySearch-box">
              <input type="text" placeholder="Buscar productos..." />
              <button type="submit">🔍</button>
            </div>
            <div className="cart">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
