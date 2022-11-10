import { useState } from "react";

import Faq from "./faq";

import styles from "../../styles/about/faqs.module.css";

const QuestionSection = (props) => {
  // SOLVED✅ i used the array QA as the initial state for the Q&A. I added a key "showAnswer" which will be changed periodically once the particular item with the corresponding id is clicked.

  const [qa, setQA] = useState(props.questionArr);

  const showAnswerHowItWorksHandler = (id = null) => {
    // SOLVED✅ this function accepts a parameter id. And a new Array is formed from the initial "showAnswerHowItWorks" so that the id of the item of the initial "showAnswerHowItWorks" that matches with the id of the item clicked is checked and the "showAnswer" value is then changed

    const newQA = qa.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          showAnswer: !el.showAnswer,
        };
      }

      return el;
    });
    setQA(newQA);
  };

  return (
    <div className={styles.faq}>
      <h4>{props.heading}</h4>

      <ul className={styles.questions}>
        {qa.map((el) => {
          return (
            <Faq
              key={el.id}
              question={el.question}
              onShowAnswer={showAnswerHowItWorksHandler}
              id={el.id}
              showAnswer={el.showAnswer}
              answer={el.answer}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionSection;
