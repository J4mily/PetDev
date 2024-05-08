import React, { useState } from "react";
import styles from "./Quiz.module.css";

const NQuiz = ({ imageUrl, text1, text2, text3 }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleStartClick = (text3) => {
    if (text3 === "Betta") {
      window.location.href = "/Home/Quiz/QuizBetta";
    } else if (text3 === "Hamster") {
      window.location.href = "/Home/Quiz/QuizHamster";
    } else if (text3 === "Sagui") {
      window.location.href = "/Home/Quiz/QuizSagui";
    }
  };

  return (
    <div className={styles.nQuizContainer}>
      <div>
        <img
          className={`${styles.quizImg} ${hovered ? styles.hovered : ""}`}
          onClick={() => handleStartClick(text3)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={imageUrl}
          alt={`Imagem quiz ${text3}`}
        />
      </div>
      <div
        className={`${styles.text} ${hovered ? styles.hovered : ""}`}
        onClick={() => handleStartClick(text3)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>{text1}</h1>
        <p>{text2}</p>
        <button
          className={`${styles.button} ${hovered ? styles.hovered : ""}`}
          onClick={() => handleStartClick(text3)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          COMEÇAR
        </button>
      </div>
    </div>
  );
};

export default NQuiz;
