import Head from "next/head";
import Layout from "../components/Layout";
import MailForm from "../components/contact/MailForm";
import GuideText from "../components/contact/GuideText";
import MediaLinks from "../components/contact/MediaLinks";

const Contact = () => (
  <Layout>
    <Head>
      <title>Contact | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <h1 className="pt-5 text-center">Get Involved!</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MailForm />
          </div>
          <div className="col-md-6">
            <GuideText />
            <MediaLinks />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
