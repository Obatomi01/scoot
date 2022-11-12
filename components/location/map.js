import styles from "../../styles/location/map.module.css";

import Place from "./place";

const Map = () => {
  return (
    <section className={`${styles.map} container`}>
      <Place cityName="New York" />
      <Place cityName="London" />
      <Place cityName="Yokohama" />
      <Place cityName="Jakarta" />
    </section>
  );
};

export default Map;
