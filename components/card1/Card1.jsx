import React from "react";
import style from "./Card1.module.css";

function Card1({ input1, input2 }) {
  return (
    <div>
      <div className={style.card1}>
        <p>{input1}</p>
        <p>{input2}</p>
      </div>
    </div>
  );
}

export default Card1;
