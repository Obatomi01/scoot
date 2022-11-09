// the values section in the about page
import styles from "../styles/values.module.css";
import Values from "./values";

const OurValues = (props) => {
  return (
    <section>
      <h3 className={styles.text}>{props.text}</h3>
      <Values />
    </section>
  );
};

export default OurValues;
