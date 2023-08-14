import React from "react";
import style from "./SectionFreeAtlas.module.css";

import card1 from "../../Accets/freeatlas/card1.png";
import card2 from "../../Accets/freeatlas/card2.png";
import card3 from "../../Accets/freeatlas/card3.png";
import card4 from "../../Accets/freeatlas/card4.png";
import book from "../../Accets/freeatlas/book.png";

function SectionFreeAtlas() {
  return (
    <div>
      <section className={style.freeatlas}>
        <h1 className={style.freeatlas__title}>
          <span className={style.freeatlas__title__free}>Free</span> Atlas
          courses
        </h1>

        <p className={style.freeatlas__title__info}>
          Collected the expertise of Atlas scientists and experts into short
          email tutorials. <br /> Subscribe to and find out how digestion works
          and where to start making dietary changes.
        </p>
        <button className={style.freeatlas__button}> All Courses</button>
        {/* <div className={style.freeatlas__book}> */}
        <img
          className={style.freeatlas__book}
          src={book}
          style={{ width: "247px", height: "213px" }}
          alt="book"
        />
        {/* </div> */}
        <div className={style.freeatlas__cards}>
          <img src={card1} alt="card1" />
          <img src={card2} alt="card2" />
          <img src={card3} alt="card3" />
          <img src={card4} alt="card4" />
        </div>
      </section>
    </div>
  );
}

export default SectionFreeAtlas;
