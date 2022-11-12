import Image from "next/image";

import AppStore from "../assets/icons/app-store.svg";
import PlayStore from "../assets/icons/google-play.svg";

import styles from "../styles/home/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={`${styles["footer-items"]} container`}>
        <h3 className={styles["footer-text"]}>Sign up and Scoot off today</h3>

        <div className={styles["footer-btns"]}>
          <Image src={AppStore} alt="app store" />
          <Image src={PlayStore} alt="google play store" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
