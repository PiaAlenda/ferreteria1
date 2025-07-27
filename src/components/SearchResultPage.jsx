import { useParams } from "react-router-dom"
import products from "./data/products"
import CategoryHeader from "./CategoryHeader"
import CategorySidebar from "./CategorySidebar"
import ProductCard from "./ProductCard"


const normalize = (str) =>
  str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

const SearchResultPage = () => {
  const { termino } = useParams()
  const terminoNormalizado = termino.toLowerCase().trim()

  const resultados = products.filter((producto) =>
    producto.name.toLowerCase().includes(terminoNormalizado)
  )

  return (
    <div>
      <CategoryHeader />
      <div className="flex">
        <CategorySidebar />
        <main className="p-4 flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resultados.length > 0 ? (
            resultados.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))
          ) : (
            <p className="col-span-full">No se encontraron productos para "{termino}".</p>
          )}
        </main>
      </div>
      <CategoryFooter />
    </div>
  )
}

export default SearchResultPage

