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
      <h1 className="pt-5 text-center">About Us</h1>
      <p className="pt-4">
        York Student Think Tank was founded in 2012. It is a hub of people
        committed to fact-based debate and the effectiveness of evidence-based
        policy-making as a means to improve society. It focuses on introducing
        students to the complexities and relevant issues of the world of policy
        by involving them in projects and ongoing discussions.
      </p>
      <p className="pt-2">
        {" "}
        We have, for example, hosted speaker events on the independence of
        Catalonia featuring Prof. Sir John Elliott, and on the regulation of new
        and digital technologies with Vass Bednar. We also offer opportunities
        write for our weekly journal, one of our policy papers, or getting
        involved in weekly "Socrates Cafe" discussions.
      </p>
      <p className="pt-2">
        The society is a chance to find out whether policy-making is for you.
        Join the conversation and have your say!
      </p>
      <AboutProfiles display={false} />
    </div>
  </Layout>
);

export default About;
