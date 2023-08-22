import React from "react";
import style from "./SectionButtons.module.css";

import Facebook from "../../Accets/secsionsbutton.img/Facebook.png";
import email from "../../Accets/secsionsbutton.img/email.png";
import instagram from "../../Accets/secsionsbutton.img/instagram.png";
import Container from "../container/Container";

function SectionButtons() {
  const buttonsData = [
    { icon: "🧬", text: "DNA", count: 104 },
    { icon: "📖", text: "Guides", count: 33 },
    { icon: "🥼", text: "Health", count: 166 },
    { icon: "🎉", text: "DNA", count: 133 },
    { icon: "🧫", text: "Guides", count: 78 },
    { icon: "📰", text: "Health", count: 5 },
    { icon: "🥑", text: "DNA", count: 163 },
    { icon: "🔬 ", text: "Guides", count: 45 },
    { icon: "🥗", text: "Health", count: 67 },
    { icon: "❤️ ", text: "Health", count: 24 },
  ];

  return (
    <div>
      <section className={style.buttons}>
        <Container>
          <div className={style.buttons__top}>
            <ul>
              {buttonsData.map((data, index) => (
                <SectionButton key={index} {...data} />
              ))}
            </ul>
          </div>
        </Container>
        <div className={style.buttons__social}>
          <div className={style.buttons__social__facebook}>
            <img src={Facebook} alt="Facebook" />
          </div>
          <div className={style.buttons__social__instagram}>
            <img src={instagram} alt="instagram" />
          </div>
          <div className={style.buttons__social__email}>
            <img src={email} alt="email" />
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionButton({ icon, text, count }) {
  return (
    <li>
      <button>
        <div className={style.buttons__top__images}>{icon}</div>
        <p>{text}</p>
        <span>{count}</span>
      </button>
    </li>
  );
}

export default SectionButtons;
