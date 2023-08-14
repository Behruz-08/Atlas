import React from "react";
import style from "./SectionFooter.module.css";

import card1 from "../../Accets/footer.img/card1.png";
import card2 from "../../Accets/footer.img/card2.png";
import card3 from "../../Accets/footer.img/card3.png";
import search from "../../Accets/footer.img/search.png";
import social from "../../Accets/footer.img/social media.png";
import footerbottom from "../../Accets/footer.img/footerbottom.png";
import footerbottom2 from "../../Accets/footer.img/footerbottom2.png";
import footerbottom3 from "../../Accets/footer.img/footerbottom3.png";

function SectionFooter() {
  return (
    <div>
      <section className={style.footer}>
        <div className={style.footer__cards}>
          <img src={card1} alt="card1" />
          <img src={card2} alt="card2" />
          <img src={card3} alt="card3" />
        </div>
        <div className={style.footer__search}>
          <img src={search} alt="" />
        </div>
        <div className={style.footer__bottoms}>
          <img src={footerbottom} alt="footerbottom" />
          <img
            style={{ width: "50px", height: "50px" }}
            src={social}
            alt="social"
          />
          <img src={footerbottom2} alt="footerbottom2" />
          <img src={footerbottom3} alt="footerbottom3" />
        </div>
      </section>
    </div>
  );
}

export default SectionFooter;
