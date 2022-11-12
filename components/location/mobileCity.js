import styles from "../../styles/location/map.module.css";

const MobileCity = (props) => {
  return (
    <div className={styles["mobile--city"]}>
      <h4>{props.city}</h4>
    </div>
  );
};

export default MobileCity;
