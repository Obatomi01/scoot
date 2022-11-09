import MobileCity from "./mobileCity";

const MobileMap = () => {
  return (
    <div className="container">
      <MobileCity city="New York" />
      <MobileCity city="London" />
      <MobileCity city="Jakarta" />
      <MobileCity city="Yokohama" />
    </div>
  );
};

export default MobileMap;
