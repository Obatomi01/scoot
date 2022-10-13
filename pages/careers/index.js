import Head from "next/head";

import Nav from "../nav";
import PageHeader from "../pageHeader";

const Careers = () => {
  return (
    <header>
      <Head>
        <title>Scoot | Careers</title>
      </Head>
      <Nav />
      <PageHeader pageStyle="careers--page__header" pageTitle="Careers" />
    </header>
  );
};

export default Careers;
