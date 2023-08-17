import React from "react";
import style from "./SectionButtons.module.css";

import Facebook from "../../Accets/secsionsbutton.img/Facebook.png";
import email from "../../Accets/secsionsbutton.img/email.png";
import instagram from "../../Accets/secsionsbutton.img/instagram.png";

function SecsionButtons() {
  return (
    <div>
      <section className={style.buttons}>
        <div className={style.buttons__top}>
          <ul>
            <li>
              <button>
                <div className={style.buttons__top__images}>🧬</div>
                <p>DNA</p>
                <span>104</span>
              </button>
            </li>

            <li>
              <button>
                <div className={style.buttons__top__image}>📖 </div>
                <p> Guides </p>
                <span>33</span>
              </button>
            </li>

            <li>
              <button>
                <div className={style.buttons__top__images}>🥼 </div>
                <p>Health</p>
                <span>166</span>
              </button>
            </li>
            <li>
              <button>
                <div className={style.buttons__top__images}>🎉 </div>
                <p>Lifestyle</p>
                <span>33</span>
              </button>
            </li>
            <li>
              <button>
                <div className={style.buttons__top__images}>🧫 </div>
                <p>Microbiome</p>
                <span> 79</span>
              </button>
            </li>
            <li>
              <button>
                <div className={style.buttons__top__images}>📰 </div>
                <p> News</p>
                <span>5</span>
              </button>
            </li>
            <li>
              <button>
                <div className={style.buttons__top__img}>🥑</div>
                <p>Nutrition</p>
                <span> 166</span>
              </button>
            </li>
          </ul>
        </div>

        <div className={style.buttons__bottom}>
          <ul>
            <li>
              <button>
                <div className={style.buttons__bottom__img}>🔬 </div>
                <p> Oncology</p>
                <span>104</span>
              </button>
            </li>
            <li>
              <button>
                <div className={style.buttons__bottom__img}>🥗 </div>
                <p>Receipts</p>
                <span>5</span>
              </button>
            </li>
            <li>
              <button>
                <div className={style.buttons__bottom__img}>❤️ </div>
                <p> Reviews</p>
                <span>24</span>
              </button>
            </li>
          </ul>
        </div>
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

export default SecsionButtons;
