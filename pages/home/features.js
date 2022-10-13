import { gsap } from "gsap";
import ScrollTrigger from "../../node_modules/gsap/src/ScrollTrigger";

import { useEffect, useRef } from "react";

import Image from "next/image";

import styles from "../../styles/home/features.module.css";

import Telemetry from "../../assets/images/telemetry.jpg";
import Payments from "../../assets/images/payments.jpg";
import NearYou from "../../assets/images/near-you.jpg";

import SemiCircle from "../../assets/patterns/circle.svg";
import LeftDownward from "../../assets/patterns/left-downward-arrow.svg";
import RightDownward from "../../assets/patterns/right-arrow.svg";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    gsap.utils.toArray(".h3").forEach((el) => {
      gsap.to(el, {
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          markers: true,
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },

        x: "70rem",
      });
    });

    // performing the same animation on the images
    gsap.utils.toArray(".feature--image__container").forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          markers: true,
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        scale: 1,
        duration: 5,
        ease: "power2.out",
      });
    });
  });

  return (
    <section>
      <div className={`container ${styles.feature} animate-container`}>
        <div className={styles["feature--description"]}>
          <h3 className="h3">Easy to use riding telemetry</h3>
          <p>
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </p>
        </div>

        <div className="feature--image__container">
          <Image
            alt="Easy to use riding telemetry"
            src={Telemetry}
            className={`${styles["feature-img"]} img-animate`}
          />
        </div>
        <div className={styles["feature--icons"]}>
          <span className={styles["left--downward__arrow"]}>
            <Image src={LeftDownward} alt="left downward arrow" />
          </span>
          <span className={styles["circle"]}>
            <Image src={SemiCircle} alt="semi-circle icon" />
          </span>
        </div>
      </div>

      <div className={`container ${styles.feature}`}>
        <div className={styles["feature--description"]}>
          <h3 className="h3">Coming to a city near you</h3>
          <p>
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </p>
        </div>

        <div className="feature--image__container">
          <Image
            alt="Coming to a city near you"
            src={NearYou}
            className={styles["feature-img"]}
          />
        </div>
        <div className={styles["feature--icons"]}>
          <span className={styles["right--downward__arrow"]}>
            <Image src={RightDownward} alt="right downward arrow" />
          </span>
          <span className={styles["circle"]}>
            <Image src={SemiCircle} alt="semi-circle icon" />
          </span>
        </div>
      </div>

      <div className={`container ${styles.feature}`}>
        <div className={styles["feature--description"]}>
          <h3>Zero hassle payments</h3>
          <p>
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </p>
        </div>

        <div className="feature--image__container">
          <Image
            alt="Zero hassle payments"
            src={Payments}
            className={styles["feature-img"]}
          />
        </div>
        <div className={styles["feature--icons"]}>
          <span className={styles["last-left--downward__arrow"]}>
            <Image src={LeftDownward} alt="left downward arrow" />
          </span>
          <span className={styles["circle"]}>
            <Image src={SemiCircle} alt="semi-circle icon" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Features;
