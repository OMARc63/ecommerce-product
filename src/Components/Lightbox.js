import react, {useContext} from "react";
import { ProductContext } from "./ProductContext";
import "./Lightbox.css";
import image from "../images/image-product-1.jpg";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import Close from "../images/icon-close.svg";

function Lightbox(props) {
  const {productCnxt, activeImage, showImg, prevImg, nextImg} = useContext(ProductContext);
  const [products, setProducts] = productCnxt;
  const [activeImg, setActiveImg] = activeImage;

  // functions

  

	return (
		<div className={props.className}>
			<div className="preview">
				<div className="close">
					<svg
						onClick={props.close}
						width="14"
						height="15"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
							fill="#69707D"
							fill-rule="evenodd"
						/>
					</svg>
				</div>
				<div className="image">
						<img src={showImg()} />
					<div className="switch">
						<div className="previous" onClick={()=>prevImg()}>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></div>
						<div className="next"  onClick={()=>nextImg()}>
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
		</div>
	);
}

export default Lightbox;
