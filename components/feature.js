// component responsible for each of the features in features.js and whatWeBring.js

import Image from "next/image";

import Circle from "../assets/patterns/circle.svg";
import LeftDownward from "../assets/patterns/left-downward-arrow.svg";
import RightDownward from "../assets/patterns/right-arrow.svg";
import LeftUpward from "../assets/patterns/left-upward-arrow.svg";

import styles from "../styles/home/features.module.css";

const Feature = (props) => {
  return (
    <div className={`container ${styles.feature} animate-container`}>
      <div className={styles["feature--description"]}>
        <h3 className={props.imgSide === "right" ? "h3" : "h3-right"}>
          {props.h3Text}
        </h3>
        <p className="pText">{props.pText}</p>
        {props.addButton && (
          <button type="button" className={styles["learn--more__btn"]}>
            {props.btnText}
          </button>
        )}
      </div>

      <span className="feature--image__container">
        <Image
          alt={props.imageAlt}
          src={props.imageSrc}
          className={`${styles["feature-img"]} img-animate`}
        />
      </span>
      <div className={styles["feature--icons"]}>
        {props.arrow === "left" ? (
          <span
            className={`${
              props.last
                ? styles["last-left--downward__arrow"]
                : styles["left--downward__arrow"]
            } ${props.arrowDirection ? styles["left--upward__arrow"] : ""}`}
          >
            <Image
              src={props.arrowDirection ? LeftUpward : LeftDownward}
              alt="left downward arrow"
            />
          </span>
        ) : (
          <span className={styles["right--downward__arrow"]}>
            <Image src={RightDownward} alt="right downward arrow" />
          </span>
        )}

        <span className={styles["circle"]}>
          <Image src={Circle} alt="circle icon" />
        </span>
      </div>
    </div>
  );
};

export default Feature;
