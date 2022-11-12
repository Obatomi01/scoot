import Head from "next/head";

// import HeaderNav from "../headerNav";
import PageHeader from "../../components/pageHeader";
import SayHello from "../../components/careers/sayHello";
import Footer from "../../components/footer";
import FooterNav from "../../components/footerNav";
import OurValues from "../../components/ourValues";
import Jobs from "../../components/careers/jobs";
import Header from "../../components/home/header";

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
