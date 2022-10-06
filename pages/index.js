import Link from "next/link";
import Head from "next/head";

import Header from "./home/header";

export default function Home() {
  return (
    <div>
      {/* <h1>This is the home page</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/careers">careers</Link>
        </li>
        <li>
          <Link href="/locations">locations</Link>
        </li>
      </ul> */}
      <Head>
        <title>Scoot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
    </div>
  );
}
