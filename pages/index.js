import Head from "next/head";
import Carousel from "../components/carousel";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная - Loft</title>
        <meta name="description" content="Главная" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Carousel />
      </Layout>
    </>
  );
}
