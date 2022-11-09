import Image from "next/image";

import styles from "../styles/values.module.css";

const Value = (props) => {
  return (
    <div className={styles.value}>
      <div className={styles["img--number__container"]}>
        <span className={styles["img--container"]}>
          <Image
            src={props.imageSrc}
            alt={props.imageAlt}
            className={styles["value--img"]}
          />
        </span>
        <span className={styles.number}>
          <h4>{props.number}</h4>
        </span>
      </div>
      <h4>{props.textHeading}</h4>
      <p className="pText">{props.textContent}</p>
    </div>
  );
};

export default Value;
