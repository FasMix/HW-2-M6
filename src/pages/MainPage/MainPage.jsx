import { ProductCard } from "../../components/ProductCard";
import { Banner } from "../../widgets/Banner";
import { useProducts } from "./MainPage.api";

export const MainPage = () => {
  const { data: products, error, isError, isPending } = useProducts();

  if (isPending) {
    return (
      <>
        <Banner />
        <div className="load">Загрузка...</div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Banner />
        <div>Ошибка при получении товаров: {error.message}</div>
      </>
    );
  }

  return (
    <>
      <Banner />
      <section className="container">
        <h1 className="title">Все товары</h1>
        <div className="list">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
};
