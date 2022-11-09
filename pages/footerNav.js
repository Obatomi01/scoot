import Image from "next/image";

import styles from "../styles/Home.module.css";
import Nav from "./nav";

import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";

const FooterNav = () => {
  return (
    <nav className={`${styles["footer--nav"]} `}>
      <div className={`${styles.nav} container nav-container`}>
        <Nav footerClass="true" />

        <span className={styles["footer--icons"]}>
          <Image src={Facebook} alt="facebook icon" />
          <Image src={Twitter} alt="twitter icon" />
          <Image src={Instagram} alt="instagram icon" />
        </span>
      </div>
    </nav>
  );
};

export default FooterNav;
