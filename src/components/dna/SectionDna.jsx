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

function SectionDna() {
  return (
    <div>
      <section className={style.dna}>
        <h1 className={style.dna__title}>Your DNA should know it</h1>
        <div className={style.dna__container}>
          <div>
            <img src={card1} alt="card1" />
          </div>
          <div>
            <img src={card2} alt="card2" />
          </div>
          <div>
            <img src={card3} alt="card3" />
          </div>
          <div>
            <img src={card4} alt="card4" />
          </div>
          <div>
            <img src={card5} alt="card5" />
          </div>
          <div>
            <img src={card6} alt="card6" />
          </div>
          <div>
            <img src={card7} alt="card7" />
          </div>
          <div>
            <img src={card8} alt="card8" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionDna;
