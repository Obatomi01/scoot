// homepage

import Head from "next/head";

import Header from "./home/header";
import Process from "./home/process";
import Features from "./home/features";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scoot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Process />
      <Features />
    </div>
  );
}
