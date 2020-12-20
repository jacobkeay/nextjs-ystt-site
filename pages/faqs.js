import Head from "next/head";
import Layout from "../components/Layout";
import FaqsText from "../components/FaqsText";

const Faqs = () => (
  <Layout>
    <Head>
      <title>FAQs | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <h1 className="pt-5 text-center">FAQs</h1>
      <FaqsText />
    </div>
  </Layout>
);

export default Faqs;
