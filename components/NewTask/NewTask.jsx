// import React, { useState } from "react";
// import style from "./NewTask.module.css";

// const NewTask = () => {
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   //   const [input3, setInput3] = useState("");
//   //   const [input4, setInput4] = useState("");
//   //   const [input5, setInput5] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const handleInput1Change = (e) => {
//     setInput1(e.target.value);
//   };

//   const handleInput2Change = (e) => {
//     setInput2(e.target.value);
//   };

//   //   const handleInput3Change = (e) => {
//   //     setInput3(e.target.value);
//   //   };

//   //   const handleInput4Change = (e) => {
//   //     setInput4(e.target.value);
//   //   };

//   //   const handleInput5Change = (e) => {
//   //     setInput5(e.target.value);
//   //   };

//   const handleConfirmClick = () => {
//     if (
//       input1 === "" ||
//       input2 === ""
//       //    input3 === "" ||
//       //    input4 === "" ||
//       //    input5 === ""
//     ) {
//       setIsValid(false);
//     } else {
//     }
//   };

//   return (
//     <div>
//       <div className={style.cards}>
//         <div className={style.cards__assaid}></div>

//         <div className={style.cards__main}>
//           <input
//             type="text"
//             value={input1}
//             onChange={handleInput1Change}
//             onBlur={() => setIsValid(true)}
//           />

//           <input
//             type="text"
//             value={input2}
//             onChange={handleInput2Change}
//             onBlur={() => setIsValid(true)}
//           />
//           {/* <input
//             type="text"
//             value={input3}
//             onChange={handleInput3Change}
//             onBlur={() => setIsValid(true)}
//           />
//           <input
//             type="number"
//             value={input4}
//             onChange={handleInput4Change}
//             onBlur={() => setIsValid(true)}
//           />

//           <input
//             type="number"
//             value={input5}
//             onChange={handleInput4Change}
//             onBlur={() => setIsValid(true)}
//           /> */}

//           <div className={style.cards__input}>
//             <input type="date" onBlur={() => setIsValid(true)} />
//             <input type="password" onBlur={() => setIsValid(true)} />
//           </div>

//           {isValid ? (
//             <button onClick={handleConfirmClick}>Confirm</button>
//           ) : (
//             <p>Please fill in all fields.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewTask;

import React, { useState } from "react";
import style from "./NewTask.module.css";
import Card1 from "../card1/Card1";
import Card2 from "../card2/Card2";

const NewTask = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  return (
    <div>
      <Card1 input1={input1} input2={input2} />
      <Card2 />
      <div className={style.cards}>
        <div className={style.cards__assaid}></div>

        <div className={style.cards__main}>
          <input type="text" value={input1} onChange={handleInput1Change} />

          <input type="number" value={input2} onChange={handleInput2Change} />

          <div className={style.cards__input}>
            <input type="date" />
            <input type="text" />
          </div>

          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
