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
          Free
          <span>Atlas courses</span>
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
          <div className={style.freeatlas__card1}>
            <h2>
              Mindful <br /> Course
            </h2>
            <img src={card1} alt="card1" />
            <span>8 lessons • 8 mails</span>
            <p>
              Discover how stress impacts your gut health, including its impact
              on microbiome diversity and digestion.
            </p>
          </div>
          <div className={style.freeatlas__card2}>
            <h2>
              Healthy <br /> Eating 101
            </h2>
            <img src={card2} alt="card2" />
            <span>10 lessons • 10 mails</span>
            <p>We are what we eat. Find out how to eat happily and healthily</p>
          </div>
          <div className={style.freeatlas__card3}>
            <h2>
              EATTHE <br />
              <span>RAINBOW</span>
            </h2>
            <img src={card3} alt="card3" />
            <span>10 lessons • 10 mails</span>
            <p>
              Put more colour in your diet to achieve a diverse microbial
              community in your gut.
            </p>
          </div>
          <div className={style.freeatlas__card4}>
            <h2>
              Thesecret
              <br />
              lifeofgut bacteria
            </h2>
            <img src={card4} alt="card4" />
            <span>PDF ebook</span>
            <p>
              Learn how to make your gut bacteria happier and how to take care
              of your microbiota.
            </p>
          </div>
        </div>
        {/* <div className={style.freeatlas__title__content}>
          <br />

          <br />

          <br />
        </div> */}
      </section>
    </div>
  );
}

export default SectionFreeAtlas;
