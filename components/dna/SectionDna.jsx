import React from "react";
import style from "./SectionDna.module.css";

import video from "../../Accets/dna.img/video.png";
import Container from "../container/Container";

function SectionDna() {
  return (
    <div>
      <section className={style.dna}>
        <Container>
          <h1 className={style.dna__title}>Your DNA should know it</h1>
          <div className={style.dna__container}>
            <div className={style.dna__card1}>
              <button>Питание</button>
              <p>
                Питание Ожирение ч. 2: риски, генетика, и лечение <br />
                <span> 9 апреля • 8 мин</span>
              </p>
            </div>
            <div className={style.dna__card2}>
              <button>Генетика</button>
              <p>
                Ожирение ч. 1: причины и степени заболевания <br />
                <span>19 марта • 15 мин</span>
              </p>
            </div>
            <div className={style.dna__card3}>
              <button>Генетика</button>
              <p>
                Генетика Топ-4 продуктов-афродизиаков <br />
                <span>5 марта • 15 мин</span>
              </p>
            </div>
            <div className={style.dna__card4}>
              <button>Питание</button>
              <p>
                Наследственные <br /> заболевания
                <br />
                <span>5 марта • 15 мин</span>
              </p>
            </div>
            <div className={style.dna__card5}>
              <button>Питание</button>
              <p>
                Питание Фенилкетонурия или <br /> кому нельзя есть много
                <br />
                <span>9 апреля • 8 мин</span>
              </p>
            </div>
            <div className={style.dna__card6}>
              <button>Питание</button>
              <p>
                Наследственные <br />
                заболевания <br />
                <span>5 марта • 15 мин</span>
              </p>
            </div>
            <div className={style.dna__card7}>
              <button>Питание</button>
              <p>
                Питание Ожирение ч. 2: риски, генетика, и лечение <br />
                <span> 9 апреля • 8 мин</span>
              </p>
            </div>
            <div className={style.dna__card8}>
              <button>Видео</button>
              <div className={style.cardvideo}>
                <img src={video} alt="video" />
              </div>
              <div className={style.dna__text}>
                <p>
                  Видео Почему ДНК-тест сдают <br /> один раз в жизни
                  <span>5 марта • 15 мин</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SectionDna;
