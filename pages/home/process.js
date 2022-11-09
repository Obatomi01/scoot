import Image from "next/image";

import styles from "../../styles/home/process.module.css";

const Process = (props) => {
  return (
    <div className={styles.process}>
      <span className={styles["process--icon"]}>
        <Image src={props.imageSrc} alt={props.imageAlt} />
      </span>
      <div className={styles["process--text__container"]}>
        <h4>{props.imageAlt}</h4>
        <p>{props.pText}</p>
      </div>
    </div>
  );
};

export default Process;
