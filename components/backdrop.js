const Backdrop = (props) => {
  return (
    <div
      className={`backdrop ${
        props.curMobileState
          ? "show--backdrop__container"
          : "hide--backdrop__container"
      }`}
      onClick={props.onHideBackdrop}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
