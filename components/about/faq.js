import Image from "next/image";

import styles from "../../styles/about/faqs.module.css";

import Chevron from "../../assets/icons/chevron.svg";

import { HOWITWORKS } from "./faqs";

const Faq = (props) => {
  return (
    <li key={props.id}>
      <span
        className={`${styles.question} ${styles["question--heading"]}`}
        onClick={props.onShowAnswer.bind(null, props.id)}
      >
        <h5>{props.question}</h5>
        <a
          className={`${styles.icon} ${
            !props.showAnswer ? styles["rotate-down"] : styles["rotate-up"]
          }`}
        >
          <Image src={Chevron} />
        </a>
      </span>

      <p
        className={`faq--answer ${styles.answer} ${
          props.showAnswer ? "show--faq__answer" : "hide--faq__answer"
        }`}
      >
        {props.answer}
      </p>
    </li>
  );
};

export default Faq;
