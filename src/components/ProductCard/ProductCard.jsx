import { Link } from "react-router-dom";
import s from "./ProductCard.module.scss";

export const ProductCard = (props) => {
  const { title, price, image } = props;

  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <Link to={`/product/${props.id}`}>
          <img className={s.image} src={image} alt={title} />
        </Link>
      </div>
      <h3 className={s.title}>{title}</h3>
      <span className={s.price}>${price}</span>
    </div>
  );
};