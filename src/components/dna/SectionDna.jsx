import React from "react";
import style from "./SectionDna.module.css";

import card1 from "../../Accets/dna.img/card1.png";
import card2 from "../../Accets/dna.img/card2.png";
import card3 from "../../Accets/dna.img/card3.png";
import card4 from "../../Accets/dna.img/card4.png";
import card5 from "../../Accets/dna.img/card5.png";
import card6 from "../../Accets/dna.img/card6.png";
import card7 from "../../Accets/dna.img/card7.png";
import card8 from "../../Accets/dna.img/card8.png";
import video from "../../Accets/dna.img/video.png";

function SectionDna() {
  return (
    <div>
      <section className={style.dna}>
        <h1 className={style.dna__title}>Your DNA should know it</h1>
        <div className={style.dna__container}>
          <div className={style.dna__card1}>
            <img src={card1} alt="card1" />
            <button>Питание</button>
            <p>
              Питание Ожирение ч. 2: риски, генетика, и лечение <br />
              <span> 9 апреля • 8 мин</span>
            </p>
          </div>
          <div className={style.dna__card2}>
            <img src={card2} alt="card2" />
            <button>Генетика</button>
            <p>
              Ожирение ч. 1: причины и степени заболевания <br />
              <span>19 марта • 15 мин</span>
            </p>
          </div>
          <div className={style.dna__card3}>
            <img src={card3} alt="card3" />
            <button>Генетика</button>
            <p>
              Генетика Топ-4 продуктов-афродизиаков 5 марта • 15 мин <br />
              <span>5 марта • 15 мин</span>
            </p>
          </div>
          <div className={style.dna__card4}>
            <img src={card4} alt="card4" />
            <button>Питание</button>
            <p>
              Питание Наследственные заболевания 5 марта • 15 мин <br />
              <span>5 марта • 15 мин</span>
            </p>
          </div>
          <div className={style.dna__card5}>
            <img src={card5} alt="card5" />
            <button>Питание</button>
            <p>
              Питание Фенилкетонурия или кому нельзя есть много <br />
              <br />
              <span>9 апреля • 8 мин</span>
            </p>
          </div>
          <div className={style.dna__card6}>
            <img src={card6} alt="card6" />
            <button>Питание</button>
            <p>
              Питание Наследственные заболевания <br />
              <span>5 марта • 15 мин</span>
            </p>
          </div>
          <div className={style.dna__card7}>
            <img src={card7} alt="card7" />
            <button>Питание</button>
            <p>
              Питание Ожирение ч. 2: риски, генетика, и лечение <br />
              <span> 9 апреля • 8 мин</span>
            </p>
          </div>
          <div className={style.dna__card8}>
            <img className={style.cardvideo} src={video} alt="video" />
            <img src={card8} alt="card8" />
            <button>Видео</button>
            <p>
              Видео Почему ДНК-тест сдают один раз в жизни
              <span>5 марта • 15 мин</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionDna;
