import { gsap } from "gsap";
import ScrollTrigger from "../../node_modules/gsap/ScrollTrigger";

import { useEffect } from "react";

import styles from "../../styles/home/process.module.css";
import Locate from "../../assets/icons/locate.svg";
import Scooter from "../../assets/icons/scooter.svg";
import Ride from "../../assets/icons/ride.svg";

import Process from "./process";

gsap.registerPlugin(ScrollTrigger);

const Processes = () => {
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
        <Process
          imageSrc={Locate}
          imageAlt="Locate with app"
          pText="Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away."
        />
        <Process
          imageSrc={Scooter}
          imageAlt="Pick your scooter"
          pText="We show the most important info for the scooters closest to you. So
          you know how much charge they have left and can see roughly how much
          it will cost."
        />
        <Process
          imageSrc={Ride}
          imageAlt="Enjoy the ride"
          pText="Scan the QR code and the bike will unlock. Retract the cable lock,
          put on a helmet, and you’re off! Always lock bikes away from
          walkways and accessibility ramps."
        />
      </div>
    </section>
  );
};

export default Processes;
