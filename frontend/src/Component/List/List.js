import config from "../../config";
import { useEffect, useState } from "react";
import styles from "./List.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "../ProductModal/ProductModal";
const cx = classNames.bind(styles);

function List({ sex = "men" }) {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const apikey = `${config.apikey.api}/search?sex=${sex}`;
    fetch(apikey)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching:", error));
  }, [sex]);
  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <ul className={cx("list")}>
        {data.map((item, index) => (
          <li key={index} className={cx("list__item")}>
            <div className={cx("list__action")}>
              <img
                className={cx("list__action--img")}
                src={item.image}
                alt="perfume"
              />
              <button className={cx("list__action--love")}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button
                className={cx("list__action--view")}
                onClick={() => handleQuickView(item)}
              >
                Quick view
              </button>
            </div>
            <div className={cx("list__info")}>
              <div>
                <h2 className={cx("list__info--brand")}>{item.brand}</h2>
                <p className={cx("list__info--name")}>{item.name}</p>
              </div>
              <div>
                <p className={cx("list__info--price")}>{item.price}$</p>
                <p className={cx("list__info--discount")}>
                  {Math.floor(
                    item.price - (item.price * (item.discountPrice || 0)) / 100
                  )}
                  $
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </>
  );
}

export default List;
