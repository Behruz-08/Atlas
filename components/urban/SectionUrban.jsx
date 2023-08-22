import React from "react";

import style from "./Urban.module.css";

import Group9 from "../../Accets/urban.img/Group 9.png";
import Container from "../container/Container";
function SectionUrban() {
  return (
    <div style={{ width: "100%" }}>
      <section className={style.urban}>
        <Container>
          <div className={style.urban__image}>
            <img src={Group9} alt="Group9" />
          </div>
          <h1 className={style.urban__title}>
            Urban biome project takes us <br /> around Europe <br />
            <span className={style.urban__title__timedate}>
              5 June • 15 min read
            </span>
          </h1>
        </Container>
      </section>
    </div>
  );
}

export default SectionUrban;
