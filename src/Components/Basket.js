import react, { useState, useContext } from "react";
import "./Basket.css";
import ProductImg from "../images/image-product-1-thumbnail.jpg";
import Delete from "../images/icon-delete.svg";
import { ProductContext } from "./ProductContext";

function Basket () {

  const {productCnxt, cartPrd, totalPrice} = useContext(ProductContext);
  const [products, setProducts] = productCnxt;
  const [cart, setCart] = cartPrd;
  const [total, setTotal] = totalPrice;

  return (
    <div className="Basket">
      <h4 className="title">Cart</h4>
      {cart !== 0 ?
      <frameElement>
        <ul className="products">
          <li className="product">
            <div className="image">
              <img src={ProductImg}/>
            </div>
            <p className="info">
                Fall Limited Edition Sneakers
                <br/>
                ${products[0].price} x {cart} <span className="result"> ${total} </span> 
            </p>
            <div className="delete" onClick={()=>setCart(0)}>
              <img src={Delete} />
            </div>
          </li>
        </ul>
        {console.log(cart)}
        <button className="checkout">Checkout</button> 
      </frameElement>
        : <p className="empty">Your cart is empty.</p> };
    </div>
  )
}

export default Basket;