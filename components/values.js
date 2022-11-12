import Tech from "../assets/images/our-tech.jpg";
import Integrity from "../assets/images/our-integrity.jpg";
import Community from "../assets/images/our-community.jpg";
import styles from "../styles/values.module.css";
import Value from "./value";

const Values = () => {
  return (
    <section className={`${styles["values"]} container`}>
      <Value
        imageSrc={Tech}
        imageAlt="our tech"
        textHeading="Our tech"
        textContent="We’re using cutting edge technology to drive accessible urban
        transportation forward. Our fully electric scooters are a joy to ride!"
        number="01"
      />

      <Value
        imageSrc={Integrity}
        imageAlt="our integrity"
        textHeading="Our integrity"
        textContent="We are fully committed to deliver a great yet safe, sustainable
      micro-mobility experience in every city we serve."
        number="02"
      />

      <Value
        imageSrc={Community}
        imageAlt="our community"
        textHeading="Our community"
        textContent="We support every community we serve. All workers are paid a living
        wage based on their location and are Scoot employees."
        number="03"
      />
    </section>
  );
};

export default Values;
