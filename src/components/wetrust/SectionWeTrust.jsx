import React from "react";
import style from "./SectionWeTrust.module.css";

import card1 from "../../Accets/wetrust/card1.png";
import card2 from "../../Accets/wetrust/card2.png";
import card3 from "../../Accets/wetrust/card3.png";

function SectionWeTrust() {
  return (
    <div>
      <section className={style.wetrust}>
        <h1 className={style.wetrust__title}>In gut we trust</h1>
        <div className={style.wetrust__cards}>
          <img src={card1} alt="card1" />
          <img src={card2} alt="card2" />
          <div className={style.wetrust__card__text}>
            <img src={card3} alt="card3" />
            <p className={style.wetrust__card__text__title}>
              What is a Mediterranean diet <br /> and should you try it?
              <p style={{ marginTop: "30px" }}>
                Kombucha recipe for dummies: <br /> make it, don't buy it!
              </p>
              <p style={{ marginTop: "30px" }}>
                Nailed it: Listen to your gut <br /> event
              </p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionWeTrust;
