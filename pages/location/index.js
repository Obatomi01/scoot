// import HeaderNav from "../headerNav";
import PageHeader from "../../components/pageHeader";
import Map from "../../components/location/map";
import City from "../../components/location/city";
import Footer from "../../components/footer";
import FooterNav from "../../components/footerNav";
import Header from "../../components/home/header";

import useMobile from "../../components/useMobile";
import MobileMap from "../../components/location/mobileMap";

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
