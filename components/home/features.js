import Image from "next/image";

import styles from "../../styles/home/features.module.css";

import Telemetry from "../../assets/images/telemetry.jpg";
import Payments from "../../assets/images/payments.jpg";
import NearYou from "../../assets/images/near-you.jpg";

import SemiCircle from "../../assets/patterns/circle.svg";
import LeftDownward from "../../assets/patterns/left-downward-arrow.svg";
import RightDownward from "../../assets/patterns/right-arrow.svg";

import useGsap from "../useGsap";

import Feature from "../feature";

const Features = () => {
  useGsap();

  return (
    <section className={styles["features"]}>
      <Feature
        h3Text="Easy to use riding telemetry"
        pText="The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app."
        imageSrc={Telemetry}
        imageAlt="Easy to use riding telemetry"
        arrow="left"
        imgSide="right"
        addButton={true}
        btnText="Learn More"
      />

      {/* <Feature
        h3Text="Coming to a city near you"
        pText="Scoot is available in 4 major cities so far. We’re expanding
        rapidly, so be sure to let us know if you want to see us in your
        hometown. We’re aiming to let our scooters loose on 23 cities over
        the coming year."
        imageSrc={NearYou}
        imageAlt="Coming to a city near you"
        arrow="right"
        imgSide="left"
        addButton={true}
        btnText="Learn More"
      /> */}

      <Feature
        h3Text="Coming to a city near you"
        pText="Scoot is available in 4 major cities so far. We’re expanding
        rapidly, so be sure to let us know if you want to see us in your
        hometown. We’re aiming to let our scooters loose on 23 cities over
        the coming year."
        imageSrc={NearYou}
        imageAlt="Coming to a city near you"
        arrow="right"
        imgSide="left"
        addButton={true}
        btnText="Learn More"
      />

      <Feature
        h3Text="Zero hassle payments"
        pText="Our payment is as easy as one two three. We accept most credit cards
        and debit cards. You can also link your PayPal account inside the
        app. Need to pay later? No worries! You can defer payment for up to
        a month."
        imageSrc={Payments}
        imageAlt="Zero hassle payments"
        arrow="left"
        imgSide="right"
        last={true}
        addButton={true}
        btnText="Learn More"
      />
    </section>
  );
};

export default Features;
