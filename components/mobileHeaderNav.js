import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/mobileNav.module.css";

import Hamburger from "../assets/icons/hamburger.svg";
import Close from "../assets/icons/close.svg";
import CompanyLogo from "../assets/logo.svg";

const MobileHeaderNav = (props) => {
  const router = useRouter();

  return (
    <section className={`${styles["mobile--header--nav"]} container`}>
      <button
        className={`${styles["mobile--nav__btn"]} ${
          props.mobileState ? styles["close--nav__btn"] : ""
        }`}
        type="button"
        onClick={props.onShowMobileNav}
      >
        <Image src={!props.mobileState ? Hamburger : Close} />
      </button>
      <Link href="/">
        <a className={router.pathname === "/" ? "active--link__button" : ""}>
          <Image
            src={CompanyLogo}
            alt="Company's logo"
            className={`logo ${
              props.footerClass ? styles["footer--logo"] : ""
            }`}
          />
        </a>
      </Link>
    </section>
  );
};

export default MobileHeaderNav;
