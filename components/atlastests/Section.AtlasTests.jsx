import React from "react";
import style from "./Section.AtlasTests.module.css";

// import frame1 from "../../Accets/atlastests.img/frame1.png";
import frame2a from "../../Accets/atlastests.img/frame2a.png";
import frame2b from "../../Accets/atlastests.img/frame2b.png";
import frame3a from "../../Accets/atlastests.img/frame3a.png";
import frame3b from "../../Accets/atlastests.img/frame3b.png";
import Container from "../container/Container";

function SectionAtlasTests() {
  return (
    <div>
      <section className={style.atlas}>
        <Container>
          <h1 className={style.atlas__title}>
            Manage your health{" "}
            <span className={style.atlas__title__text}> with Atlas </span> tests
          </h1>
          <div className={style.atlas__cards}>
            <div className={style.atlas__cards__card1}>
              <h2>
                DNA <br />
                <span>test</span>
              </h2>
              <p>
                £165 <span>-35%</span>
              </p>
              <h3>£99</h3>

              <button>Read more</button>
            </div>
            <div className={style.atlas__cards__card2}>
              <h2>
                Microbiome <br /> test
              </h2>
              <p>
                £199 <span>-26%</span>
              </p>
              <h3>£139</h3>
              <div className={style.atlas__cards__card2__frame2a}>
                <img src={frame2a} alt="frame2a" />
              </div>
              <div className={style.atlas__cards__card2__frame2b}>
                <img src={frame2b} alt="frame2b" />
              </div>

              <button>Read more</button>
            </div>
            <div className={style.atlas__cards__card3}>
              <h2>
                Unleash <br />
                the potential of your <br />
                <span>DNA</span>
              </h2>
              <p>
                от 8 900 ₽ <span>-35%</span>
              </p>
              <h3>5 000 ₽</h3>
              <img
                className={style.atlas__cards__card3__frame3a}
                src={frame3a}
                alt="frame3a"
              />
              <img
                className={style.atlas__cards__card3__frame3b}
                src={frame3b}
                alt="frame3b"
              />
              <button>Read more</button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SectionAtlasTests;
