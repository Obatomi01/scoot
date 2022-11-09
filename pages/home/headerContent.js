// header SECTION of the home page
import { useState } from "react";

import Image from "next/image";

import HeaderNav from "../headerNav";
import styles from "../../styles/Home.module.css";
import Line from "../../assets/patterns/line.svg";
import ArrowDown from "../../assets/patterns/right-arrow.svg";
import WhiteCircle from "../../assets/patterns/white-circles.svg";

import Backdrop from "../backdrop";

const HeaderContent = () => {
  //   const [showMobileNav, setShowMobileNav] = useState(false);

  //   const showMobileNavHandler = () => {
  //     setShowMobileNav(!showMobileNav);
  //   };

  //   const hideMobileNavHandler = () => {
  //     console.log("backdrop clicked");
  //     setShowMobileNav(false);
  //   };

  return (
    <section className={styles.hero}>
      <div className={`container`}>
        <h1>Scooter sharing made simple</h1>
      </div>

      <div className={styles["hero-description"]}>
        <span className={styles.line}>
          <Image src={Line} />
        </span>

        <div className={styles["description-text"]}>
          <p>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>

          <button type="button">Get Scootin</button>
        </div>

        <div className={styles["arrow--circle__container"]}>
          <span className={styles["arrow-down"]}>
            <Image src={ArrowDown} />
          </span>
          <span className={styles["icon-circle"]}>
            <Image src={WhiteCircle} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeaderContent;
