import styles from "./ProductModal.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartAction";
import { useState, useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function ProductModal({ product, onClose }) {
  const [cartStatus, setCartStatus] = useState(false);
  const [notification, setNotification] = useState("");
  const dispatch = useDispatch();
  const cartProductList = useSelector((state) => state.cartReducer);
  const toggleRef = useRef();

  useEffect(() => {
    if (product) {
      setCartStatus(
        cartProductList.some((cartItem) => cartItem.id === product.id)
      );
    }
  }, [product, cartProductList]);

  if (!product) return null;
  const handleCart = (item) => {
    if (cartStatus) {
      dispatch(removeFromCart(item.id));
      setNotification("Removed from cart successfully!");
      setCartStatus(false);
      toggleRef.current.style.display = "block";
    } else {
      dispatch(addToCart(item));
      setNotification("Added to cart successfully!");
      setCartStatus(true);
      toggleRef.current.style.display = "block";
    }
  };

  return (
    <div className={cx("modal-overlay")} onClick={onClose}>
      <div className={cx("modal")} onClick={(e) => e.stopPropagation()}>
        <div className={cx("modal__image")}>
          <img
            className={cx("modal__image--img")}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className={cx("modal__info")}>
          <span className={cx("modal__info--tag", product.sex)}>
            {product.sex}
          </span>
          <h2 className={cx("modal__info--name")}>{product.name}</h2>
          <p className={cx("modal__info--brand")}>Brand: {product.brand}</p>
          <p className={cx("modal__info--origin")}>Origin: {product.origin}</p>
          <p className={cx("modal__info--price")}>{product.price}$</p>
          <p className={cx("modal__info--discount")}>
            {Math.floor(
              product.price -
                (product.price * (product.discountPrice || 0)) / 100
            )}
            $
          </p>
          <div className={cx("modal__buy")}>
            <button className={cx("modal__buy--btn")}>View Detail</button>
            <button
              className={cx("modal__buy--btn")}
              onClick={() => handleCart(product)}
            >
              {cartStatus ? "Remove From Cart" : "Add To Cart"}
            </button>
          </div>
        </div>
        <div ref={toggleRef} className={cx("modal__notification")}>
          {notification}
        </div>
        <button className={cx("modal__close")} onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
