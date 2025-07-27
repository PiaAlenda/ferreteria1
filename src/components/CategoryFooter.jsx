export default function CategoryFooter() {
  return (
    <footer className="CategoryFooter">
      <div className="CategoryContainer">
        <div className="CategoryFooter-content">
          <div className="CategoryFooter-section">
            <h4>Ferretería El Martillo</h4>
            <p>Tu ferretería de confianza desde 1985. Calidad y servicio garantizado.</p>
            <div className="contact-info">
              <p>📍 Av. Construcción 123, Ciudad</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@elmartillo.com</p>
            </div>
          </div>

          <div className="CategoryFooter-section">
            <h4>Categorías</h4>
            <ul>
              <li>
                <a href="#">Herramientas</a>
              </li>
              <li>
                <a href="#">Construcción</a>
              </li>
              <li>
                <a href="#">Plomería</a>
              </li>
              <li>
                <a href="#">Electricidad</a>
              </li>
              <li>
                <a href="#">Pinturas</a>
              </li>
            </ul>
          </div>

          <div className="CategoryFooter-section">
            <h4>Servicios</h4>
            <ul>
              <li>
                <a href="#">Entrega a domicilio</a>
              </li>
              <li>
                <a href="#">Asesoría técnica</a>
              </li>
              <li>
                <a href="#">Instalación</a>
              </li>
              <li>
                <a href="#">Garantías</a>
              </li>
              <li>
                <a href="#">Devoluciones</a>
              </li>
            </ul>
          </div>

          <div className="CategoryFooter-section">
            <h4>Síguenos</h4>
            <div className="CategorySocial-links">
              <a href="#">📘 Facebook</a>
              <a href="#">📷 Instagram</a>
              <a href="#">🐦 Twitter</a>
              <a href="#">📺 YouTube</a>
            </div>
          </div>
        </div>

        <div className="CategoryFooter-bottom">
          <p>&copy; 2024 Ferretería El Martillo. Todos los derechos reservados.</p>
          <div className="payment-methods">
            <span>Aceptamos:</span>
            <span>💳 Visa</span>
            <span>💳 MasterCard</span>
            <span>💰 Efectivo</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
