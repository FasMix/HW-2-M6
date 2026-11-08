import { useParams } from "react-router-dom"
import { useCategoriesList } from "./Categories.api"
import { ProductCard } from "../ProductCard/ProductCard";

export const CategoriesList = () => {
  const { slug } = useParams();
  const { data: products, error, isError, isPending } = useCategoriesList(slug)


  if (isPending) {
    return <div className="load">Загрузка...</div>
  }

  if (isError) {
    return <div>Ошибка при получении данных: {error}</div>
  }

  return (
    <>
      <h2 className="title">{slug}</h2>
      <section className="list">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </>
  )
}
