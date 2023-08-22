import React from "react";
import style from "./SectionWeTrust.module.css";

import card1 from "../../Accets/wetrust/card1.png";
import card2 from "../../Accets/wetrust/card2.png";
import card3 from "../../Accets/wetrust/card3.png";
import Container from "../container/Container";

function SectionWeTrust() {
  return (
    <div>
      <section className={style.wetrust}>
        <Container>
          <h1 className={style.wetrust__title}>In gut we trust</h1>
          <div className={style.wetrust__cards}>
            <div className={style.wetrust__card1}>
              <button>Питание</button>
              <img src={card1} alt="card1" />
              <p>
                Питание Ожирение ч. 2: риски, генетика, и лечение <br />{" "}
                <span>9 апреля • 8 мин</span>
              </p>
            </div>
            <div className={style.wetrust__card2}>
              <button>Питание</button>
              <img src={card2} alt="card2" />
              <p>
                Питание Ожирение ч. 2: риски, генетика, и лечение <br />{" "}
                <span>9 апреля • 8 мин</span>
              </p>
            </div>
            <div className={style.wetrust__card__text}>
              <img src={card3} alt="card3" />
              <p className={style.wetrust__card__text__title}>
                What is a Mediterranean diet <br /> and should you try it?
                <hr />
                <p style={{ marginTop: "30px" }}>
                  Kombucha recipe for dummies: <br /> make it, don't buy it!
                </p>
                <hr />
                <p style={{ marginTop: "30px" }}>
                  Nailed it: Listen to your gut <br /> event
                </p>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SectionWeTrust;
