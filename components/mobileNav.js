import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/mobileNav.module.css";

const MobileNav = (props) => {
  const router = useRouter();

  return (
    <section
      className={`${styles["mobile--nav__container"]} 
      ${
        props.mobileState
          ? "show--mobile--nav__animation"
          : "hide--mobile--nav__animation"
      }`}
    >
      <Link href="/about">
        <a
          className={router.pathname === "/about" ? "active--link__button" : ""}
        >
          About
        </a>
      </Link>

      <Link href="/careers">
        <a
          className={
            router.pathname === "/careers" ? "active--link__button" : ""
          }
        >
          Careers
        </a>
      </Link>

      <Link href="/location">
        <a
          className={
            router.pathname === "/location" ? "active--link__button" : ""
          }
        >
          Location
        </a>
      </Link>
    </section>
  );
};

export default MobileNav;
