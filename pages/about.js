import Head from "next/head";
import Layout from "../components/Layout";
import AboutProfiles from "../components/AboutProfiles";

const About = () => (
  <Layout>
    <Head>
      <title>About | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <h1 className="pt-5 text-center">About Us</h1>
      <AboutProfiles />
    </div>
  </Layout>
);

export default About;
