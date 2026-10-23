import s from "./Header.module.scss"
import shop from "../../image/Frame.svg"
import log from "../../image/Frame (1).svg"
import search from "../../image/Frame (2).svg"

export const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <h2 className={s.title}>SHOP.CO</h2>
        </div>
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>Shop</li>
                <li className={s.item}>On Sale</li>
                <li className={s.item}>New Arrivals</li>
                <li className={s.item}>Brands</li>
            </ul>
        </nav>
        <div className={s.search}>
            <img src={search} alt="" />
            <input
                className={s.input}
                placeholder="Search for products..."
            />
        </div>
        <div className={s.wrapper}>
            <img className={s.icNav} src={shop} alt="" />
            <img className={s.icNav} src={log} alt="" />
        </div>
    </header>
  )
}
