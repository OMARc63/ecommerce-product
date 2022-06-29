import react, { Component, useContext, useState } from "react";
import Lightbox from "./Lightbox";
import "./MainProduct.css";
import image from "../images/image-product-1.jpg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

import { ProductContext } from "./ProductContext";

function MainProduct() {

  // context states
  const {productCnxt, activeImage, countQty, cartPrd, showImg, decrementQty, incrementQty, prevImg, nextImg} = useContext(ProductContext);
  const [products, setProducts] = productCnxt;
  const [activeImg, setActiveImg] = activeImage;
  const [count, setCount] = countQty;
  const [cart, setCart] = cartPrd;
  
  // local states
	const [lightbox, setLightbox] = useState(false);


  // local functions
  
  

	return (
		<div className="MainProduct">
			<div className="container">
				<Lightbox className={lightbox?"Lightbox active": "Lightbox"}
          close={()=>setLightbox(false)}
        />
				<div className="preview">
					<div className="image" onClick={() => setLightbox(true)}>
						<img src={showImg()} />
						<div className="switch">
							<div className="previous" onClick={()=>prevImg()}>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
							</div>
							<div className="next" onClick={()=>nextImg()}>
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
							</div>
						</div>
					</div>
					<ul className="thumbnails">
            {products.map(product =>
              <li className={product.id === activeImg ? "active" : ""} onClick={()=>setActiveImg(product.id)}>
                <img src={product.thumb} />
              </li>
            )}
					</ul>
				</div>
				<div className="information">
					<div className="company">Sneaker Company</div>
					<h1 className="title">Fall Limited Edition Sneakers</h1>
					<p className="desc">
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they’ll withstand everything the
						weather can offer.
					</p>
					<div className="price">
						<span className="total"> ${products[0].price} </span>
						<span className="reduction"> {products[0].reduc}% </span>
						<span className="prev"> ${products[0].price/products[0].reduc*100} </span>
					</div>
					<div className="checkout">
						<div className="edit">
							<span className="minus" onClick={()=>decrementQty()}>
								<img src={minus} />
							</span>
							<span className="number">{count}</span>
							<span className="plus" onClick={()=>incrementQty()}>
								<img src={plus} />
							</span>
						</div>
						<button className="add" onClick={()=>setCart(count)}>
							<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
									fill="#69707D"
									fill-rule="nonzero"
								/>
							</svg>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainProduct;
