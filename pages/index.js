import Head from "next/head";
import Layout from "../components/Layout";
import HomeCards from "../components/HomeCards";
import HomeText from "../components/HomeText";

const Index = () => (
  <Layout>
    <Head>
      <title>Home | YSTT</title>
    </Head>
    <div className="pt-5 mt-3 text-white text-center overlay-background">
      <img
        src="/york-hall-wide-reduced.jpg"
        alt="York University"
        className="img-fluid img-responsive overlay-img"
      />
    </div>
    <div className="container my-5">
      <HomeCards />
      <HomeText />
    </div>
  </Layout>
);

export default Index;