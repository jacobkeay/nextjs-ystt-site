import Head from "next/head";
import Layout from "../components/Layout";
import AboutProfiles from "../components/AboutProfiles";

const About = () => (
  <Layout>
    <Head>
      <title>About | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex justify-content-center align-items-center rounded-circle bg-primary backdrop-cortado text-center">
          <img src="/logo-big-white.png" height="150" alt="logo here"></img>
        </div>
      </div>
      <h1 className="py-5 text-center">About Us</h1>
      <AboutProfiles />
    </div>
  </Layout>
);

export default About;
