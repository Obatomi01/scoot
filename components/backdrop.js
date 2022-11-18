const Backdrop = (props) => {
  return (
    <div
      className={`backdrop ${
        props.curMobileState
          ? "show--backdrop__container"
          : "hide--backdrop__container"
      }`}
      onClick={props.onHideBackdrop}
    ></div>
  );
};

export default Backdrop;
