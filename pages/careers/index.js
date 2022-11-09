import Head from "next/head";

import HeaderNav from "../headerNav";
import PageHeader from "../pageHeader";
import SayHello from "./sayHello";
import Footer from "../footer";
import FooterNav from "../footerNav";
import OurValues from "../ourValues";
import Jobs from "./jobs";
import Header from "../home/header";

const Careers = () => {
  return (
    <header>
      <Head>
        <title>Scoot | Careers</title>
      </Head>
      <Header />
      <PageHeader pageStyle="careers--page__header" pageTitle="Careers" />
      <SayHello />
      <OurValues text="Why join us?" />
      <Jobs />
      <Footer />
      <FooterNav />
    </header>
  );
};

export default Careers;
