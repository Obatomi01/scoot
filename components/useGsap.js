// custom hook responsible for the animations

import { gsap } from "gsap";
import ScrollTrigger from "../node_modules/gsap/src/ScrollTrigger";

import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useGsap = () => {
  useEffect(() => {
    gsap.utils.toArray(".h3").forEach((el) => {
      gsap.to(el, {
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },

        x: "70rem",
      });
    });

    gsap.to(".h3-right", {
      immediateRender: false,
      scrollTrigger: {
        trigger: ".h3-right",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },

      x: "-70rem",
    });

    // performing the same animation on the images
    gsap.utils.toArray(".feature--image__container").forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "bottom 95%",
          end: "bottom top",
        },
        scale: 1,
        duration: 5,
        ease: "power2.out",
      });
    });
  });
};

export default useGsap;
