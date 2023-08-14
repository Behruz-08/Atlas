import React from "react";
import style from "./SectionArticle.module.css";

import card1 from "../../Accets/article/card1.png";
import card2 from "../../Accets/article/card2.png";
import card3 from "../../Accets/article/card3.png";
import card4 from "../../Accets/article/card4.png";
import card5 from "../../Accets/article/card5.png";
import card6 from "../../Accets/article/card6.png";
import card7 from "../../Accets/article/card7.png";
import card8 from "../../Accets/article/card8.png";
import card9 from "../../Accets/article/card9.png";
import card10 from "../../Accets/article/card10.png";

function SectionArticle() {
  return (
    <div>
      <section className={style.article}>
        <article className={style.article__cards}>
          <div className={style.card1}>
            <img src={card1} alt="card1" />
          </div>
          <div className={style.card2}>
            <img src={card2} alt="card2" />
          </div>

          <div className={style.card3}>
            <img src={card3} alt="card3" />
          </div>
          <div className={style.card10}>
            <img src={card10} alt="card10" />
          </div>

          <div className={style.card4}>
            <img src={card4} alt="card4" />
          </div>
          <div className={style.card5}>
            <img src={card5} alt="card5" />
          </div>
          <div className={style.card6}>
            <img src={card6} alt="card6" />
          </div>
          <div className={style.card7}>
            <img src={card7} alt="card7" />
          </div>
          <div className={style.card8}>
            <img src={card8} alt="card8" />
          </div>
          <div className={style.card9}>
            <img src={card9} alt="card9" />
          </div>
        </article>
      </section>
    </div>
  );
}

export default SectionArticle;
