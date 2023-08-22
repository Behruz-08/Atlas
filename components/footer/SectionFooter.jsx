// import React from "react";
// import style from "./SectionFooter.module.css";

// import Frame from "../../Accets/footer.img/Frame .png";
// import mail1 from "../../Accets/footer.img/mail1.png";
// import facebook from "../../Accets/footer.img/facebook .png";
// import instagram from "../../Accets/footer.img/Instagram .png";
// import social from "../../Accets/footer.img/social.svg";
// import Container from "../container/Container";

// function SectionFooter() {
//   return (
//     <div>
//       <section className={style.footer}>
//         <Container>
//           <div className={style.footer__cards}>
//             <div className={style.footer__cards__card1}>
//               <h1>
//                 Join our <br />
//                 community
//               </h1>
//               <img src={mail1} alt="mail1" />
//               <p>
//                 Learn about how your genes, gut bacteria and lifestyle affect
//                 your health. Stay updated about our new articles, news and get
//                 weekly editor’s picks.
//               </p>
//               <button>Подписаться</button>
//               <input type="email" placeholder="E mail" />
//               <span>
//                 Нажимая на кнопку, я соглашаюсь с обработкой персональных данных
//               </span>
//             </div>
//             <div className={style.footer__cards__card2}>
//               <h1>
//                 Follow Atlas on <br /> Facebook
//               </h1>
//               <img src={facebook} alt="" />

//               <button>Follow</button>
//             </div>
//             <div className={style.footer__cards__card3}>
//               <h1>
//                 Folloe Atlas on <br /> <span> Instagram </span>
//               </h1>
//               <img src={instagram} alt="" />

//               <button> Follow</button>
//             </div>
//           </div>
//           <div className={style.footer__search}>
//             <p>
//               Got a question for the team or an idea for an article? Email{" "}
//               <a href="#"> blog@atlasbiomed.com</a>
//             </p>
//             <img src={Frame} alt="Frame" />

//             <hr />
//           </div>
//           <div className={style.footer__bottoms}>
//             <p>
//               Atlas Biomed Group Limited <br />
//               Interchange House, Office 1.58, 81-85 <br />
//               Station Road,Croydon, CR0 2AJ,
//               <br /> United Kingdom <br />
//               Customer Care <br /> Contact:hello@atlasbiomed.co.uk
//             </p>
//             <p>
//               <img src={social} alt="social" />
//             </p>
//             <p>
//               About Atlas <br /> Contacts <br />
//               FAQ <br /> Partner with us <br /> Educational hub <br />
//               Blog
//             </p>
//             <p>
//               Privacy Policy <br /> Terms and Conditions <br /> Cookie Policy{" "}
//               <br />
//               Healthy eating course <br /> Eat the rainbow
//             </p>
//           </div>
//           <div className={style.footer__bottoms__bottom}>
//             © 2023 Atlas Biomed Group Limited. <br />
//             All rights reserved.
//           </div>
//         </Container>
//       </section>
//     </div>
//   );
// }

// export default SectionFooter;

import React from "react";
import style from "./SectionFooter.module.css";

import Frame from "../../Accets/footer.img/Frame .png";
import mail1 from "../../Accets/footer.img/mail1.png";
import facebook from "../../Accets/footer.img/facebook .png";
import instagram from "../../Accets/footer.img/Instagram .png";
import social from "../../Accets/footer.img/social.svg";

function SectionFooter() {
  return (
    <div style={{ width: "100%" }}>
      <section className={style.footer}>
        <div className={style.footer__container}>
          <div className={style.footer__cards}>
            <div className={style.footer__cards__card1}>
              <h1>
                Join our <br />
                community
              </h1>
              <img src={mail1} alt="mail1" />
              <p>
                Learn about how your genes, gut bacteria and lifestyle affect
                your health. Stay updated about our new articles, news and get
                weekly editor’s picks.
              </p>
              <button>Подписаться</button>
              <input type="email" placeholder="E mail" />
              <span>
                Нажимая на кнопку, я соглашаюсь с обработкой персональных данных
              </span>
            </div>
            <div className={style.footer__cards__card2}>
              <h1>
                Follow Atlas on <br /> Facebook
              </h1>
              <img src={facebook} alt="" />

              <button>Follow</button>
            </div>
            <div className={style.footer__cards__card3}>
              <h1>
                Folloe Atlas on <br /> <span> Instagram </span>
              </h1>
              <img src={instagram} alt="" />

              <button> Follow</button>
            </div>
          </div>
          <div className={style.footer__search}>
            <p>
              Got a question for the team or an idea for an article? Email{" "}
              <a href="#"> blog@atlasbiomed.com</a>
            </p>
            <img src={Frame} alt="Frame" />

            <hr />
          </div>
          <div className={style.footer__bottoms}>
            <p>
              Atlas Biomed Group Limited <br />
              Interchange House, Office 1.58, 81-85 <br />
              Station Road,Croydon, CR0 2AJ,
              <br /> United Kingdom <br />
              Customer Care <br /> Contact:hello@atlasbiomed.co.uk
            </p>
            <p>
              <img src={social} alt="social" />
            </p>
            <p>
              About Atlas <br /> Contacts <br />
              FAQ <br /> Partner with us <br /> Educational hub <br />
              Blog
            </p>
            <p>
              Privacy Policy <br /> Terms and Conditions <br /> Cookie Policy{" "}
              <br />
              Healthy eating course <br /> Eat the rainbow
            </p>
          </div>
          <div className={style.footer__bottoms__bottom}>
            © 2023 Atlas Biomed Group Limited. <br />
            All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionFooter;
