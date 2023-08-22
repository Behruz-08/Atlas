import React from "react";
import style from "./HeaderSearch.module.css";
import Container from "../container/Container";

import Logo from "../../Accets/headerSearch.images/Logo.png";

import search from "../../Accets/headerSearch.images/searchtext.png";
import Ellipse from "../../Accets/headerSearch.images/Ellipse.png";
import PathElips from "../../Accets/headerSearch.images/PathElips.png";
import close1 from "../../Accets/headerSearch.images/close1.png";
function HeaderSearch() {
  return (
    <div>
      <div className={style.header__search}>
        <Container>
          <ul className={style.header__naw}>
            <li className={style.header__naw__logo}>
              <img src={Logo} alt="logo" />
            </li>
            <li className={style.header__naw__vector}>
              <input type="search" />
            </li>
            <li className={style.header__naw__searchtext}>
              <img src={search} alt="searchtext" />
            </li>
            <li className={style.header__naw__ellipse}>
              <img src={Ellipse} alt="Ellipse" />
            </li>

            <li className={style.header__naw__pathelips}>
              <img src={PathElips} alt="ParthElips" />
            </li>
            <li className={style.header__naw__closeleft}>
              <img src={close1} alt="close" />
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
}

export default HeaderSearch;
