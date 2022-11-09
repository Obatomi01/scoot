import styles from "../../styles/location/city.module.css";

const City = () => {
  return (
    <section className={`container ${styles["message--container"]}`}>
      <h3 className={styles["message--heading"]}>Your city not listed?</h3>
      <p className={styles["message--content"]}>
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the link or messaging us on social.
      </p>
      <button type="button" className={styles["message-btn"]}>
        Message us
      </button>
    </section>
  );
};

export default City;
