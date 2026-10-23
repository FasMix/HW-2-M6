import s from "./Footer.module.scss"
import social from "../../image/Social.svg"
import apps from "../../image/Frame 53.svg"

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.flex}>
        <div className={s.wrapper1}>
          <h1>SHOP.CO</h1>
          <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <img src={social} alt="" />
        </div>
        <div className={s.wrapper}>
          <h3>COMPANY</h3>
          <p>About</p>
          <p>Features</p>
          <p>Works</p>
          <p>Career</p>
        </div>
        <div className={s.wrapper}>
          <h3>HELP</h3>
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className={s.wrapper}>
          <h3>FAQ</h3>
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payments</p>
        </div>
        <div className={s.wrapper}>
          <h3>RESOURCES</h3>
          <p>Free eBooks</p>
          <p>Development Tutorial</p>
          <p>How to - Blog</p>
          <p>Youtube Playlist</p>
        </div>
        <div className={s.line}></div>
      </div>
      <div className={s.flex2}>
      <p className={s.info}>Shop.co © 2000-2023, All Rights Reserved</p>
      <img src={apps} alt="" />
      </div>
    </footer>
  )
}
