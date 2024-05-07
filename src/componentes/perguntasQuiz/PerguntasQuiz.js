import styles from "./PerguntasQuiz.module.css"; // Importe os estilos
import React, { useState } from "react";

const RadioButton = ({ name, value, label }) => {
  return (
    <>
      <input
        className={styles.radioInput}
        type="radio"
        name={name}
        value={value}
      />
      <label>{label}</label>
      <br />
    </>
  );
};

const NQuiz = ({ imageUrl, text1, text2, questions }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className={styles.pagQuiz}>
      <div className={styles.titleQuiz}>
        <h1>{text1}</h1>
        <img src={imageUrl} alt={`Imagem quiz ${text2}`} />
      </div>
      <div className={styles.spaceQuestionsQuiz}>
        <div className={styles.questionsQuiz}>
          {questions &&
            questions.map((question, index) => (
              <div key={index}>
                <p>{question.questionText}</p>
                {question.options &&
                  question.options.map((option, optionIndex) => (
                    <RadioButton
                      key={optionIndex}
                      name={question.name}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
              </div>
            ))}
        </div>
        <button
          className={`${styles.button} ${hovered ? styles.hovered : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        > CONFIRMAR </button>
      </div>
    </div>
  );
};

export default NQuiz;
