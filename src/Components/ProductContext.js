import React, { createContext, useState } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import product1thumb from "../images/image-product-1-thumbnail.jpg";
import product2thumb from "../images/image-product-2-thumbnail.jpg";
import product3thumb from "../images/image-product-3-thumbnail.jpg";
import product4thumb from "../images/image-product-4-thumbnail.jpg";

export const ProductContext = createContext();

export const ProductProvider = props => {
  
  // states
  const [activeImg, setActiveImg] = useState(1);
  const [products, setProducts] = useState([
    {
      id: 1,
      image: product1,
      thumb: product1thumb,
      price: 125,
      qty: 1,
      reduc: 50
    },
    {
      id: 2,
      image: product2,
      thumb: product2thumb,
      price: 200,
      qty: 1,
      reduc: 0
    },
    {
      id: 3,
      image: product3,
      thumb: product3thumb,
      price: 170,
      qty: 1,
      reduc: 0
    },
    {
      id: 4,
      image: product4,
      thumb: product4thumb,
      price: 300,
      qty: 1,
      reduc: 0
    },
  ]);
  const [count, setCount] = useState(products[0].qty);
  const [total, setTotal] = useState(products[0].qty*products[0].price);
  const [cart, setCart] = useState(0);

  // functions
  const showImg = () => {
    for(let i=0; i<products.length; i++) {
      if(activeImg == products[i].id) {
        return products[i].image
      }
    }
  }
  const prevImg = () => {
    if (activeImg === 1) {
      return false;
    } else {
      setActiveImg(activeImg-1);
    }
  };
  const nextImg = () => {
    if (activeImg === products.length) {
      return false;
    } else {
      setActiveImg(activeImg+1);
    }
  };
  const decrementQty = () => {
    // check if it not impty
    if (products[0].qty === 0) {
      return false;
    } else {
      products[0].qty--;
      setCount(count-1);
      setTotal(products[0].qty*products[0].price);
    }
  }
  const incrementQty = () => {
    products[0].qty++;
    setCount(count+1)
    setTotal(products[0].qty*products[0].price);
  }

  return (
    <ProductContext.Provider 
    value={{
      productCnxt: [products, setProducts],
      activeImage: [activeImg, setActiveImg],
      countQty: [count, setCount],
      totalPrice: [total, setTotal],
      cartPrd: [cart, setCart],
      showImg: showImg,
      prevImg: prevImg, 
      nextImg: nextImg,
      decrementQty: decrementQty,
      incrementQty: incrementQty
      }}>
      {props.children}
    </ProductContext.Provider>
  )
}
