import React from "react";
import style from "./Header.module.css";
import { useState, useEffect } from "react";

import Sun from "../../Accets/header.img/Sun.png";

import Vectorclose1 from "../../Accets/header.img/Vectorclose1.png";
import Vectorclose2 from "../../Accets/header.img/Vectorclose2.png";
import Logo from "../../Accets/header.img/Logo.png";
import Group from "../../Accets/header.img/Group.png";

function Header() {
  const initialCloseValue = JSON.parse(localStorage.getItem("close")) || true;
  const [close, setClose] = useState(initialCloseValue);

  // Установить значение close в localStorage при изменении close
  useEffect(() => {
    localStorage.setItem("close", JSON.stringify(close));
  }, [close]);

  // Обработчик клика для изменения значения close
  const handleClick = () => {
    setClose(!close);
  };

  // Сохранение значения close в localStorage при закрытии страницы или обновлении
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("close", JSON.stringify(close));
    };

    const handleUnload = () => {
      localStorage.setItem("close", JSON.stringify(close));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
    };
  }, [close]);

  // Обработчик обновления страницы
  const handleBeforeReload = () => {
    localStorage.setItem("close", JSON.stringify(close));
  };

  // Добавляем обработчик для события обновления страницы
  window.onbeforeunload = handleBeforeReload;

  // Возвращаемся обратно после обработки события
  window.onbeforeunload = null;

  return (
    <div>
      <header className={style.header}>
        {close ? (
          <ul className={style.header__info}>
            <li>
              <img src={Sun} alt="Sun" />
            </li>
            <li>
              <h1>
                -40% OFF Sale
                <span> on Atlas tests with promo code 'atlas2023'</span>
              </h1>
            </li>
            <li>
              <button className={style.header__button}> Bye now</button>
            </li>
            <button onClick={handleClick}>
              <li className={style.header__closeleft}>
                <img src={Vectorclose1} alt="Vectorclose1" />
              </li>
              <li className={style.header__closeright}>
                <img src={Vectorclose2} alt="Vectorclose2" />
              </li>
            </button>
          </ul>
        ) : null}
      </header>
      <nav className={style.nawbar}>
        <ul className={style.nawbar__links}>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <a href="">
            <li>DNA</li>
          </a>
          <a href="">
            <li>Microbiome</li>
          </a>
          <a href="">
            <li>Partner with us</li>
          </a>
          <a href="">
            <li>About Atlas</li>
          </a>

          <a href="">
            <li>FAQ</li>
          </a>
          <a href="">
            <li>Upload</li>
          </a>
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
