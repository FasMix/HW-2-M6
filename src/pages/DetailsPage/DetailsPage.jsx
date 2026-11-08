import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api";
import s from './DetailsPage.module.scss'
import { useState } from "react";

export const DetailsPage = () => {
  const { id } = useParams();

  const { data: product, isPending, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await $api.get(`/products/${id}`);
      return response.data;
    },
    enabled: Boolean(id),
  });

  if (isPending) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка: {error.message}</p>;

  const QuantityStepper = ({ i = 1, min = 1, max = 99 }) => {
    const [count, setCount] = useState(i);

    const minuse = () => {
      if (count > min) {
        setCount((prev) => prev - 1);
      }
    };

    const pluse = () => {
      if (count < max) {
        setCount((prev) => prev + 1);
      }
    };

    return (
      <div className={s.con_btn}>
        <button className={s.btn} onClick={minuse}>-</button>
        <span className={s.value}>{count}</span>
        <button className={s.btn} onClick={pluse}>+</button>
      </div>
    );
  };

  return (
    <div className={s.card}>
      <div className={s.card_image}>
        <img
          className={s.card_img}
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>{product.title}</h1>
        <p className={s.price}>${product.price}</p>
        <div className={s.wrap}>
          <QuantityStepper />
          <button className={s.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};