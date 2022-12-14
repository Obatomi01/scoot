// homepage
import { useEffect, useState } from "react";

import Head from "next/head";

import Header from "../components/home/header";
import Processes from "../components/home/processes";
import Features from "../components/home/features";
import Footer from "../components/footer";
import FooterNav from "../components/footerNav";

// For mobile view
// import MobileNav from "./mobileNav";
// import MobileHeaderNav from "./mobileHeaderNav";
// import useMobile from "../components/useMobile";
import HeaderContent from "../components/home/headerContent";

export default function Home() {
  // const [windowDimension, setWindowDimension] = useState(null);

  // useEffect(() => {
  //   setWindowDimension(window.screen.width);
  // }, []);

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimension(window.screen.width);
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const isMobile = windowDimension <= 500;
  // console.log(windowDimension);
  // const { isMobile } = useMobile();
  // console.log(isMobile);

  return (
    <div>
      {/* {isMobile ? <MobileHeaderNav /> : ""} */}
      <Head>
        <title>Scoot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <HeaderContent />
      <Processes />
      <Features />
      <Footer />
      <FooterNav />
    </div>
  );
}
