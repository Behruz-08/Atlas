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
import cardvideo from "../../Accets/article/cardvideo.png";
// import card10 from "../../Accets/article/card10.png";

function SectionArticle() {
  return (
    <div style={{ width: "100%" }}>
      <section className={style.article}>
        <article className={style.article__cards}>
          <div className={style.card1}>
            <img src={card1} alt="card1" />
            <button>Питание</button>
            <p>
              Питание Ожирение ч. 2: риски, генетика, и лечение <br />
              <span>9 апреля • 8 мин</span>
            </p>
          </div>
          <div className={style.card2}>
            <img src={card2} alt="card2" />
            <button>Генетика</button>
            <p>
              Генетика Ожирение ч. 1: причины и степени заболевания <br />
              <span>19 марта • 15 мин</span>
            </p>
          </div>

          <div className={style.card3}>
            <img src={card3} alt="card3" />
            <button>Питание</button>

            <p>
              Питание Наследственные заболевания <br />
              <span>5 марта • 15 мин</span>
            </p>
          </div>
          <div className={style.card10}>
            <h1>Top articles</h1>
            <hr />
            <ul>
              <li>
                01
                <span>
                  What is a <br /> Mediterranean diet and should you try it?
                </span>
                <hr />
              </li>
              <li>
                02
                <span>
                  Kombucha recipe for <br /> dummies: make it, don't buy it!
                </span>
                <hr />
              </li>
              <li>
                03
                <span>
                  Nailed it: Listen to your <br /> gut event
                </span>
                <hr />
              </li>
              <li>
                04
                <span>
                  What’s the difference <br /> between IBS and IBD?
                </span>
                <hr />
              </li>
              <li>
                05
                <span>
                  New guide to your <br /> microbiome test results
                </span>
              </li>
            </ul>
          </div>

          <div className={style.card4}>
            <img src={card4} alt="card4" />
            <button>Питание</button>

            <p>
              Питание Фенилкетонурия или кому нельзя есть много <br />
              <span>9 апреля • 8 мин</span>
            </p>
          </div>
          <div className={style.card5}>
            <img src={card5} alt="card5" />
            <button>Генетика</button>

            <p>
              Генетика Топ-4 продуктов-афродизиаков <br />
              <span>5 марта • 15 мин</span>
            </p>
          </div>
          <div className={style.card6}>
            <img className={style.cardvideo} src={cardvideo} alt="cardvideo" />
            <img src={card6} alt="card6" />
            <button>Видео</button>

            <p>
              Почему ДНК-тест сдают один раз в жизни <br />
              <span>5 марта • 15 мин</span>
            </p>
          </div>
          <div className={style.card7}>
            <img src={card7} alt="card7" />
            <button>Питание</button>

            <p>
              Питание Ожирение ч. 2: риски, генетика, и лечение <br />
              <span> 9 апреля • 8 мин</span>
            </p>
          </div>
          <div className={style.card8}>
            <img src={card8} alt="card8" />
            <button>Генетика</button>

            <p>
              Ожирение ч. 1: причины и степени заболевания <br />
              <span> 19 марта • 15 мин</span>
            </p>
          </div>
          <div className={style.card9}>
            <img src={card9} alt="card9" />
            <button>Питание</button>

            <p>
              Наследственные <br /> заболевания <br />
              <span>5 марта • 15 мин</span>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default SectionArticle;
