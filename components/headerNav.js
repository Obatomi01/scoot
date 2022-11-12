import { useState, Fragment } from "react";

import styles from "../styles/Home.module.css";
import Nav from "./nav";

import MobileHeaderNav from "./mobileHeaderNav";
import useMobile from "./useMobile";
import MobileNav from "./mobileNav";

const HeaderNav = (props) => {
  const isMobile = useMobile();

  return isMobile ? (
    <Fragment>
      <MobileHeaderNav
        onShowMobileNav={props.onShowMobileNav}
        mobileState={props.onShowMobile}
      />
      <MobileNav mobileState={props.onShowMobile} />
    </Fragment>
  ) : (
    <nav className={`${styles.nav} container nav-container`}>
      <Nav />

      <button type="button">Get Scootin</button>
    </nav>
  );
};

export default HeaderNav;
