import Head from "next/head";
import Layout from "../components/Layout";
import ResearchItems from "../components/ResearchItems";

const Research = () => (
  <Layout>
    <Head>
      <title>Research | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <h1 className="pt-5 text-center">Our Research</h1>
      <ResearchItems />
    </div>
  </Layout>
);

export default Research;
