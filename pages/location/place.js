import { Fragment } from "react";

import styles from "../../styles/location/map.module.css";

const Place = (props) => {
  return (
    <Fragment>
      <p className={styles.locator}>{props.cityName}</p>
      <span className={styles["locator-down"]}></span>
    </Fragment>
  );
};

export default Place;
