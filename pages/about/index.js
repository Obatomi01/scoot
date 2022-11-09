import HeaderNav from "../headerNav";
import PageHeader from "../pageHeader";
import WhatWeBring from "./whatWeBring";
import FooterNav from "../footerNav";
import OurValues from "../ourValues";
import Footer from "../footer";
import Faqs from "./faqs";
import Header from "../home/header";

const About = () => {
  return (
    <header>
      <Header />
      <PageHeader pageStyle="about--page__header" pageTitle="About" />
      <WhatWeBring />
      <OurValues text="Our Values" />
      <Faqs />
      <Footer />
      <FooterNav />
    </header>
  );
};

export default About;
