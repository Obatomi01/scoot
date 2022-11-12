import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import CompanyLogo from "../assets/logo.svg";
import styles from "../styles/Home.module.css";

const Nav = (props) => {
  const router = useRouter();

  return (
    <div>
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
    </div>
  );
};

export default Nav;
