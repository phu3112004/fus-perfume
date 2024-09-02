import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import styles from "./Header.module.scss";
import Submenu from "../../../Component/Submenu/Submenu";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function Header() {
  var loveProductList = useSelector((state) => state.loveReducer);
  var cartProductList = useSelector((state) => state.cartReducer);
  useEffect(() => {
    const headerLink = document.querySelector(`.${cx("header__link")}`);
    const wrappers = document.querySelectorAll(
      `.${cx("header__link--wrapper")}`
    );

    if (headerLink) {
      const linkWidth = headerLink.offsetWidth;

      wrappers.forEach((wrapper) => {
        const submenu = wrapper.querySelector(
          `.${cx("header__link--submenu")}`
        );

        if (submenu) {
          submenu.style.width = `${linkWidth}px`;
          const wrapperLeft = wrapper.getBoundingClientRect().left;
          const linkLeft = headerLink.getBoundingClientRect().left;
          submenu.style.left = `${linkLeft - wrapperLeft}px`;
        }
      });
    }
  }, []);
  return (
    <div className={cx("header__container")}>
      <div className={cx("header__item")}>
        <Link to="/" className={cx("header__logo")}>
          <img
            className={cx("header__logo--img")}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQL7wT55TVYS29BUh_grPufdrICUqc02klow&s"
            alt="logo"
          />
        </Link>
        <div className={cx("header__search")}>
          <input
            type="text"
            placeholder="Search...."
            className={cx("header__search--input")}
          />
          <button className={cx("header__search--button")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={cx("header__action")}>
          <div className={cx("header__action--blog")}>Blog</div>
          <div className={cx("header__action--login")}>
            <FontAwesomeIcon icon={faUser} />
            <p>Login</p>
          </div>
          <Link to="/love" className={cx("header__action--icon")}>
            <FontAwesomeIcon icon={faHeart} />
            <div className={cx("count")}>
              {loveProductList.length > 99 ? "99+" : loveProductList.length}
            </div>
          </Link>
          <Link to="/cart" className={cx("header__action--icon")}>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className={cx("count")}>
              {cartProductList.length > 99 ? "99+" : cartProductList.length}
            </div>
          </Link>
        </div>
      </div>
      <div className={cx("header__link")}>
        <div className={cx("header__link--wrapper")}>
          <Link to="/men" className={cx("header__link--item")}>
            Perfume for Men
          </Link>
          <div className={cx("header__link--submenu")}>
            <Submenu type="men" />
          </div>
        </div>

        <div className={cx("header__link--wrapper")}>
          <Link to="/women" className={cx("header__link--item")}>
            Perfume for Women
          </Link>
          <div className={cx("header__link--submenu")}>
            <Submenu type="women" />
          </div>
        </div>

        <Link to="/all-brands" className={cx("header__link--item")}>
          Brands
        </Link>
        <Link to="/bodycare" className={cx("header__link--item")}>
          Bodycare & Homecare
        </Link>
        <Link to="/lipstick" className={cx("header__link--item")}>
          Lipstick
        </Link>
      </div>
    </div>
  );
}

export default Header;
