import React from "react";

import style from "./SectionButtons.module.css";

import Group1 from "../../Accets/secsionsbutton.img/Group1.png";
import Group2 from "../../Accets/secsionsbutton.img/Group2.png";
import Group3 from "../../Accets/secsionsbutton.img/Group3.png";
import Group4 from "../../Accets/secsionsbutton.img/Group4.png";
import Group5 from "../../Accets/secsionsbutton.img/Group5.png";
import Group6 from "../../Accets/secsionsbutton.img/Group6.png";
import Group7 from "../../Accets/secsionsbutton.img/Group7.png";
import Group8 from "../../Accets/secsionsbutton.img/Group8.png";
import Group9 from "../../Accets/secsionsbutton.img/Group9.png";
import Group10 from "../../Accets/secsionsbutton.img/Group10.png";

function SecsionButtons() {


  
  return (
    <div>
      <section className={style.buttons}>
        <ul className={style.buttons__top}>
          <li>
            <img src={Group1} alt="Group1" />
          </li>
          <li>
            <img src={Group2} alt="Group2" />
          </li>
          <li>
            <img src={Group3} alt="Group3" />
          </li>
          <li>
            <img src={Group4} alt="Group4" />
          </li>
          <li>
            <img src={Group5} alt="Group5" />
          </li>
          <li>
            <img src={Group6} alt="Group6" />
          </li>
          <li>
            <img src={Group7} alt="Group7" />
          </li>
        </ul>
        <ul className={style.buttons__bottom}>
          <li>
            <img src={Group8} alt="Group8" />
          </li>
          <li>
            <img src={Group9} alt="Group9" />
          </li>
          <li>
            <img src={Group10} alt="Group10" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SecsionButtons;
