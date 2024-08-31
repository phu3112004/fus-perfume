import styles from "./ProductModal.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className={cx("modal-overlay")} onClick={onClose}>
      <div className={cx("modal")}>
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
          <p className={cx("modal__info--discount")}>
            {Math.floor(
              product.price -
                (product.price * (product.discountPrice || 0)) / 100
            )}
            $
          </p>
        </div>
        <button className={cx("modal__close")} onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
