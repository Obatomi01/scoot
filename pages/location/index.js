import HeaderNav from "../headerNav";
import PageHeader from "../pageHeader";
import Map from "./map";
import City from "./city";
import Footer from "../footer";
import FooterNav from "../footerNav";
import Header from "../home/header";

import useMobile from "../useMobile";
import MobileMap from "./mobileMap";

const Locations = () => {
  const isMobile = useMobile();
  return (
    <header>
      <Header />
      <PageHeader pageStyle="locations--page__header" pageTitle="Locations" />
      <Map />
      {isMobile ? <MobileMap /> : ""}
      <City />
      <Footer />
      <FooterNav />
    </header>
  );
};

export default Locations;
