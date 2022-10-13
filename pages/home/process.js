import { gsap } from "gsap";
import ScrollTrigger from "../../node_modules/gsap/src/ScrollTrigger";

import Image from "next/image";

import { useEffect } from "react";

import styles from "../../styles/home/process.module.css";
import Locate from "../../assets/icons/locate.svg";
import Scooter from "../../assets/icons/scooter.svg";
import Ride from "../../assets/icons/ride.svg";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      immediateRender: false,
      scrollTrigger: {
        trigger: ".animate",
        scrub: 5,
        start: "top bottom",
        end: "top top",
      },
    });

    tl.to(".animate", {
      scaleX: 0,
      transformOrigin: "left center",
      ease: "power1.out",
    });
  });

  return (
    <section className={styles["process-container"]}>
      <div className={`${styles.line} animate`}></div>
      <div className={`${styles.processes} container`}>
        <div className={styles.process}>
          <Image src={Locate} alt="locate with app" />
          <h4>Locate with app</h4>
          <p>
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>

        <div className={styles.process}>
          <Image src={Scooter} alt="pick your scooter" />
          <h4>Pick your scooter</h4>
          <p>
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </p>
        </div>

        <div className={styles.process}>
          <Image src={Ride} alt="enjoy the ride" />
          <h4>Enjoy the ride</h4>
          <p>
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
