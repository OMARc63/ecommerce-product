import react, { useState, useContext } from "react";
import Basket from "./Basket";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import Close from "../images/icon-close.svg";
import menu from "../images/icon-menu.svg";
import "./Navbar.css";
import { ProductContext } from "./ProductContext";

function Navbar () {

  const {productCnxt, cartPrd, totalPrice} = useContext(ProductContext);
  const [products, setProducts] = productCnxt;
  const [cart, setCart] = cartPrd;
  const [total, setTotal] = totalPrice;

  const [cartshow, setCartshow] = useState(false);

  const [links, setLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="container">
        <div className="menu" onClick={()=>{setLinks(true)}}>
          <img src={menu} />
        </div>
        <div className="logo">
          <img src={logo} />
        </div>
        <ul className={links ? "links active" : "links"}>
          <div className="close" onClick={()=>{setLinks(false)}}>
            <img src={Close} />
          </div>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={cart == 0 ? "basket" : "basket active"} onClick={()=>{setCartshow(!cartshow)}}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
          <span className="number">{cart}</span>
        </div>
        <div className="avatar">
          <img src={avatar} />
        </div>
        {cartshow?<Basket />: null} 
      </div>
      {links?<div className="overlay"></div>: null} 
      
    </div>
  )
}

export default Navbar;