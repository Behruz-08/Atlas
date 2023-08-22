import React from "react";
import style from "./SectionArticle.module.css";

import cardvideo from "../../Accets/article/cardvideo.png";
import Container from "../container/Container";

function SectionArticle() {
  return (
    <div>
      <section className={style.article}>
        <Container>
          <article className={style.article__cards}>
            <div className={style.card1}>
              <button>Питание</button>
              <p>
                Питание Ожирение ч. 2: риски, генетика, и лечение <br />
                <span>9 апреля • 8 мин</span>
              </p>
            </div>
            <div className={style.card2}>
              <button>Генетика</button>
              <p>
                Ожирение ч. 1: причины <br /> и степени заболевания <br />
                <span>19 марта • 15 мин</span>
              </p>
            </div>

            <div className={style.card3}>
              <button>Питание</button>

              <p>
                Наследственные <br /> заболевания <br />
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
              <button>Питание</button>

              <p>
                Фенилкетонурия или <br />
                кому нельзя есть много <br />
                <span>9 апреля • 8 мин</span>
              </p>
            </div>
            <div className={style.card5}>
              <button>Генетика</button>

              <p>
                Топ-4 продуктов- <br /> афродизиаков <br />
                <span>5 марта • 15 мин</span>
              </p>
            </div>
            <div className={style.card6}>
              <button>Видео</button>
              <div className={style.card6__cardvideo}>
                <img src={cardvideo} alt="cardvideo" />
              </div>
            </div>
            <div style={{ marginTop: "-140px", marginLeft: "-300px" }}>
              <p>
                Почему ДНК-тест сдают <br />
                один раз в жизни <br />
                <span>5 марта • 15 мин</span>
              </p>
            </div>

            <div className={style.card7}>
              <button>Питание</button>

              <p>
                Питание Ожирение ч. 2: риски, генетика, и лечение <br />
                <span> 9 апреля • 8 мин</span>
              </p>
            </div>
            <div className={style.card8}>
              <button>Генетика</button>

              <p>
                Ожирение ч. 1: причины и степени заболевания <br />
                <span> 19 марта • 15 мин</span>
              </p>
            </div>
            <div className={style.card9}>
              <div>
                <button>Питание</button>
              </div>

              <p>
                Наследственные <br /> заболевания <br />
                <span>5 марта • 15 мин</span>
              </p>
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
}

export default SectionArticle;
