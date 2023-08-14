import React from "react";
import style from "./Section.AtlasTests.module.css";

import frame1 from "../../Accets/atlastests.img/Frame1.png";
import frame2 from "../../Accets/atlastests.img/Frame2.png";
import frame3 from "../../Accets/atlastests.img/Frame3.png";

function SectionAtlasTests() {
  return (
    <div>
      <section className={style.atlas}>
        <h1 className={style.atlas__title}>
          Manage your health{" "}
          <span className={style.atlas__title__text}> with Atlas </span> tests
        </h1>
        <div className={style.atlas__cards}>
          <img src={frame1} alt="frame1" />
          <img src={frame2} alt="frame2" />
          <img src={frame3} alt="frame3" />
        </div>
      </section>
    </div>
  );
}

export default SectionAtlasTests;
