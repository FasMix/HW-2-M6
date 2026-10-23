import s from "./Banner.module.scss"
import star from "../../image/Vector.svg"

export const Banner = () => {
  return (
    <div className={s.banner}>
        <div className={s.wrapper}>
          <h1 className={s.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className={s.text}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className={s.btn}>Shop Now</button>
        <div className={s.num}>
          <div className="n">
            <h2 className={s.price}>200+</h2>
            <p className={s.des}>International Brands</p>
          </div>
          <hr />
          <div className="n">
            <h2 className={s.price}>2,000+</h2>
            <p className={s.des}>High-Quality Products</p>
          </div>
          <hr />
          <div className="n">
            <h2 className={s.price}>30,000+</h2>
            <p className={s.des}>Happy Customers</p>
          </div>
        </div>
        </div>
        <div className={s.wrapper}>
          <img className={s.mini} src={star} alt="" />
          <img className={s.max} src={star} alt="" />
        </div>
    </div>
  )
}
