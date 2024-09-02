import config from "../../config";
import { useEffect, useState } from "react";
import styles from "./List.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "../ProductModal/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { addToLove, removeFromLove } from "../../actions/loveAction";
const cx = classNames.bind(styles);

function List({ type = "men" }) {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loveStatus, setLoveStatus] = useState({});
  const dispatch = useDispatch();
  var loveProductList = useSelector((state) => state.loveReducer);
  var cartProductList = useSelector((state) => state.cartReducer);

  useEffect(() => {
    if (type === "love") {
      setData(loveProductList);
      setLoveStatus(
        loveProductList.reduce((acc, item) => {
          acc[item.id] = true;
          return acc;
        }, {})
      );
    } else if (type === "cart") {
      setData(cartProductList);
      setLoveStatus(
        loveProductList.reduce((acc, item) => {
          acc[item.id] = true;
          return acc;
        }, {})
      );
    } else {
      const apikey = `${config.apikey.api}/search?sex=${type}`;
      fetch(apikey)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoveStatus(
            data.reduce((acc, item) => {
              acc[item.id] = loveProductList.some(
                (loveItem) => loveItem.id === item.id
              );
              return acc;
            }, {})
          );
        })
        .catch((error) => console.error("Error fetching:", error));
    }
  }, [type, loveProductList, cartProductList, data]);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleLove = (item) => {
    if (loveStatus[item.id]) {
      dispatch(removeFromLove(item.id));
      setLoveStatus({ ...loveStatus, [item.id]: false });
    } else {
      dispatch(addToLove(item));
      setLoveStatus({ ...loveStatus, [item.id]: true });
    }
  };

  return (
    <>
      {data.length > 0 ? (
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
                  <button
                    style={{
                      color: loveStatus[item.id]
                        ? "var(--primary)"
                        : "var(--gray)",
                    }}
                    className={cx("list__action--love")}
                    onClick={() => handleLove(item)}
                  >
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
                        item.price -
                          (item.price * (item.discountPrice || 0)) / 100
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
      ) : (
        <p className={cx("list__no-product")}>No products.</p>
      )}
    </>
  );
}

export default List;
