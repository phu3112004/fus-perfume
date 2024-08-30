import React from "react";
import classNames from "classnames/bind";
import styles from "./Submenu.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Submenu(props) {
  const { type } = props;
  console.log(type);
  const womenImage = [
    "https://theme.hstatic.net/1000340570/1000964732/14/menu_hover_nu_3.jpg?v=6078",
    "https://theme.hstatic.net/1000340570/1000964732/14/menu_hover_nu_1.jpg?v=6078",
    "https://theme.hstatic.net/1000340570/1000964732/14/menu_hover_nu_2.jpg?v=6078",
  ];
  const menImage = [
    "https://theme.hstatic.net/1000340570/1000964732/14/menu_hover_nam_1.jpg?v=6078",
    "https://theme.hstatic.net/1000340570/1000964732/14/menu_hover_nam_2.jpg?v=6078",
    "https://theme.hstatic.net/1000340570/1000964732/14/menu_hover_nam_3.jpg?v=6078",
  ];

  return (
    <div className={cx("submenu")}>
      <div className={cx("submenu__content")}>
        <div className={cx("submenu__brands")}>
          <h3>Brands</h3>
          <ul>
            <li>
              <Link to={"/brand/gucci/" + type}>GUCCI</Link>
            </li>
            <li>
              <Link to={"/brand/narciso-rodriguez/" + type}>
                NARCISO RODRIGUEZ
              </Link>
            </li>
            <li>
              <Link to={"/brand/burbery/" + type}>BURBERRY</Link>
            </li>
            <li>
              <Link to={"/brand/versace/" + type}>VERSACE</Link>
            </li>
            <li>
              <Link to={"/brand/jo-malone/" + type}>JO MALONE</Link>
            </li>
            <li>
              <Link to={"/brand/valentno/" + type}>VALENTINO</Link>
            </li>
            <li>
              <Link to={"/brand/carolina-herrera/" + type}>
                CAROLINA HERRERA
              </Link>
            </li>
            <li>
              <Link to={"/brand/yves-saint-laurent/" + type}>
                YVES SAINT LAURENT
              </Link>
            </li>
            <li>
              <Link to={"/brand/calvin-klein/" + type}>CALVIN KLEIN</Link>
            </li>
            <li>
              <Link to={"/brand/chanel/" + type}>CHANEL</Link>
            </li>
            <li>
              <Link to={"/brand/bvlgari/" + type}>BVLGARI</Link>
            </li>
            <li>
              <Link to={"/brand/hemes/" + type}>HERMES</Link>
            </li>
            <li>
              <Link to={"/brand/christian-dior/" + type}>CHRISTIAN DIOR</Link>
            </li>
            <li>
              <Link to={"/brand/hugo-boss/" + type}>HUGO BOSS</Link>
            </li>
            <li>
              <Link to={"/brand/jean-paul-gaultier/" + type}>
                JEAN PAUL GAULTIER
              </Link>
            </li>
            <li>
              <Link to={"/" + type}>{`See all perfumes for ${type}`}</Link>
            </li>
          </ul>
        </div>
        <div className={cx("submenu__images")}>
          <img
            src={type === "men" ? menImage[0] : womenImage[0]}
            alt="Giorgio Armani"
          />
          <img src={type === "men" ? menImage[1] : womenImage[1]} alt="Prada" />
          <img
            src={type === "men" ? menImage[2] : womenImage[2]}
            alt="Le Male Elixir"
          />
        </div>
      </div>
    </div>
  );
}

export default Submenu;
