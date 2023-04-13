import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Summary from "@/components/summary/Summary";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={"Home"}>
        <Summary />
      </Layout>
    </>
  );
}
