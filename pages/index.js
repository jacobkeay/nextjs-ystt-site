import Head from "next/head";
import Layout from "../components/Layout";
import HomeCards from "../components/HomeCards";
import HomeText from "../components/HomeText";

const Index = () => (
  <Layout>
    <Head>
      <title>Home | YSTT</title>
    </Head>
    <div className="pt-5 mt-3 text-white text-center">
      <img
        src="/ystt-main-hall.jpeg"
        alt="York University"
        className="img-fluid img-responsive"
      />
    </div>
    <div className="container my-5">
      <HomeCards />
      <HomeText />
    </div>
  </Layout>
);

export default Index;
