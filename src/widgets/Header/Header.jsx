import s from "./Header.module.scss"
import shop from "../../image/Frame.svg"
import log from "../../image/Frame (1).svg"
import search from "../../image/Frame (2).svg"
import { useCategories } from "./Header.api"
import { Link, NavLink } from "react-router-dom"

const renderCategoriesLink = (name) => {
    const toCategory = `/category/${name}`;
    return (
    <NavLink key={name} to={toCategory}>
        {name}
    </NavLink>
    )
}

export const Header = () => {
    const {data: categories, isPending, isError, error} = useCategories();

  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <Link to="/" className={s.title}>
                SHOP.CO
            </Link>
        </div>
        <nav className={s.nav}>
            <ul className={s.list}>
                {categories?.map(renderCategoriesLink)}
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
