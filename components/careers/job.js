import styles from "../../styles/careers/jobs.module.css";

const Job = (props) => {
  return (
    <li className={styles.job}>
      <div>
        <h5>{props.title}</h5>
        <p>{props.location}</p>
      </div>
      <button
        type="button"
        className={styles["apply--btn"]}
        onClick={props.onButtonClick}
        disabled={props.btnDisabled}
      >
        Apply
      </button>
    </li>
  );
};

export default Job;
