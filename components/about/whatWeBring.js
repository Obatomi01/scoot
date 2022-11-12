import styles from "../../styles/home/features.module.css";

import DigitalEra from "../../assets/images/digital-era.jpg";
import BetterLiving from "../../assets/images/better-living.jpg";

import useGsap from "../useGsap";

import Feature from "../feature";

const WhatWeBring = () => {
  useGsap();

  return (
    <section className={styles["features"]}>
      <Feature
        h3Text="Mobility for the digital era"
        pText="Getting around should be simple (and even fun!) for everyone. We
        embrace technology to provide low cost, smart access to scooters at
        your fingertips."
        imageSrc={DigitalEra}
        imageAlt="Mobility for the digital era"
        arrow="left"
        imgSide="right"
        arrowDirection="upward"
      />

      <Feature
        h3Text="Better urban living"
        pText="We’re helping connect cities and bring people closer together. Our
        scooters are also fully-electric and we offset the minimal carbon
        footprint for each ride."
        imageSrc={BetterLiving}
        imageAlt="Better urban living"
        arrow="right"
        imgSide="left"
      />
    </section>
  );
};

export default WhatWeBring;
