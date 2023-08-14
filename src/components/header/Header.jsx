import React from "react";
import style from "./Header.module.css";

import Sun from "../../Accets/header.img/Sun.png";
import wrapper from "../../Accets/header.img/wrapper.png";
import Vectorclose1 from "../../Accets/header.img/Vectorclose1.png";
import Vectorclose2 from "../../Accets/header.img/Vectorclose2.png";
import Logo from "../../Accets/header.img/Logo.png";
import Group from "../../Accets/header.img/Group.png";

function Header() {
  return (
    <div>
      <header className={style.header}>
        <ul className={style.header__info}>
          <li>
            <img src={Sun} alt="Sun" />
          </li>
          <li>
            <img src={wrapper} alt="wrapper" />
          </li>
          <li>
            <button className={style.header__button}> Bye now</button>
          </li>
          <li className={style.header__closeleft}>
            <img src={Vectorclose1} alt="Vectorclose1" />
          </li>
          <li className={style.header__closeright}>
            <img src={Vectorclose2} alt="Vectorclose2" />
          </li>
        </ul>
      </header>
      <nav className={style.nawbar}>
        <ul className={style.nawbar__links}>
          <li>
            <img src={Logo} alt="Logo" />
          </li>

          <span>DNA</span>
          <span>Microbiome</span>
          <span>Partner with us</span>
          <span>About Atlas</span>
          <span>FAQ</span>
          <span>Upload</span>
        </ul>

        <h1 className={style.nawbar__title}>
          More <span className={style.nawbar__texttop}>answers</span> to your
          <span className={style.nawbar__textbottom}>
            <br /> questions
          </span>{" "}
          in our blog
        </h1>
        <p className={style.nawbar__lowertext}>
          Sharing knowledge on how genes, gut bacteria <br /> and lifestyle
          affect your health
        </p>

        <img className={style.nawbar__image} src={Group} alt="Group" />
      </nav>
    </div>
  );
}

export default Header;
