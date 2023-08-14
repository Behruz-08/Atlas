import React from "react";
import style from "./HeaderSearch.module.css";

import Logo from "../../Accets/headerSearch.images/Logo.png";
import Vector from "../../Accets/headerSearch.images/Vector.png";
import search from "../../Accets/headerSearch.images/searchtext.png";
import Ellipse from "../../Accets/headerSearch.images/Ellipse.png";
import PathElips from "../../Accets/headerSearch.images/PathElips.png";
import Pathclose1 from "../../Accets/headerSearch.images/Pathclose1.png";
import Pathclose2 from "../../Accets/headerSearch.images/Pathclose2 .png";

function HeaderSearch() {
  return (
    <div className={style.header__search}>
      <ul className={style.header__naw}>
        <li className={style.header__naw__logo}>
          <img src={Logo} alt="logo" />
        </li>
        <li className={style.header__naw__vector}>
          <img src={Vector} alt="vector" />
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
          <img src={Pathclose1} alt="Pathclose1" />
        </li>
        <li className={style.header__naw__closeright}>
          <img src={Pathclose2} alt="Pathclose2" />
        </li>
      </ul>
    </div>
  );
}

export default HeaderSearch;
