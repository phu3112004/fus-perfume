import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
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
          <div className={cx("header__action--icon")}>
            <FontAwesomeIcon icon={faHeart} />
            <div className={cx("count")}>0</div>
          </div>
          <div className={cx("header__action--icon")}>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className={cx("count")}>0</div>
          </div>
        </div>
      </div>
      <div className={cx("header__link")}>
        <Link to="/" className={cx("header__link--item")}>
          Perfume for Men
        </Link>
        <Link to="/" className={cx("header__link--item")}>
          Perfume for Women
        </Link>
        <Link to="/" className={cx("header__link--item")}>
          Brands
        </Link>
        <Link to="/" className={cx("header__link--item")}>
          Bodycare & Homecare
        </Link>
        <Link to="/" className={cx("header__link--item")}>
          Lipstick
        </Link>
      </div>
    </div>
  );
}

export default Header;
