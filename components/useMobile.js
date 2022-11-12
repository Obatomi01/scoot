import { useEffect, useState } from "react";

const useMobile = () => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.screen.width);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.screen.width);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 500;

  return isMobile;
};

export default useMobile;
