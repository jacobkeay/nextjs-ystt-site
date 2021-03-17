import Head from "next/head";
import Layout from "../components/Layout";
import AboutProfiles from "../components/AboutProfiles";

const Elections = () => (
  <Layout>
    <Head>
      <title>Elections | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex justify-content-center align-items-center rounded-circle bg-primary backdrop-cortado text-center">
          <img src="/logo-big-white.png" height="150" alt="logo here"></img>
        </div>
      </div>
      <h1 className="pt-5 text-center">Elections 2021</h1>
      <p className="pt-4">
        Committee elections for 2021 are on! Have a look at who's running and
        check out their manifestos below.
      </p>
      <div className="text-center">
        <h4 className="text-primary mt-5 pt-3">Chair</h4>
        <div className="row ">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <video className="d-block mb-2" width="200" controls>
              <source src="/viktoriia.mov" type="video/mp4" />
            </video>
            <a
              className="btn btn-outline-dark mb-4"
              href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/viktoriia_chair.pdf?alt=media"
              target="_blank"
            >
              <i className="far fa-sticky-note"></i> Viktoriia Udaltsova
            </a>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <video className="d-block mb-2" width="200" controls>
              <source src="/luke.mp4" type="video/mp4" />
            </video>
            <a
              className="btn btn-outline-dark mb-4"
              href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/luke_chair.pdf?alt=media"
              target="_blank"
            >
              <i className="far fa-sticky-note"></i> Luke Jones
            </a>
          </div>
        </div>
        <h4 className="text-primary mt-2 pt-3">Secretary</h4>
        <a
          className="btn btn-outline-dark"
          href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/joe_secretary.pdf?alt=media"
          target="_blank"
        >
          <i className="far fa-sticky-note"></i> Joe Mawer
        </a>
        <h4 className="text-primary mt-4 pt-3">Treasurer</h4>
        <a
          className="btn btn-outline-dark"
          href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/sophie_treasurer.pdf?alt=media"
          target="_blank"
        >
          <i className="far fa-sticky-note"></i> Sophie Moseley
        </a>
        <h4 className="text-primary mt-4 pt-3">Editor-in-Chief</h4>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <video className="d-block mb-2" width="200" controls>
            <source src="/harry.mp4" type="video/mp4" />
          </video>
          <a
            className="btn btn-outline-dark"
            href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/harry_editor.pdf?alt=media"
            target="_blank"
          >
            <i className="far fa-sticky-note"></i> Harry Padoan
          </a>
        </div>
        <h4 className="text-primary mt-4 pt-3">Director of Communications</h4>
        <a
          className="btn btn-outline-dark mx-2"
          href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/alameen_communications.pdf?alt=media"
          target="_blank"
        >
          <i className="far fa-sticky-note"></i> Alameen Kudehinbu
        </a>
        <a
          className="btn btn-outline-dark mx-2"
          href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/frank_communications.pdf?alt=media"
          target="_blank"
        >
          <i className="far fa-sticky-note"></i> Frank Roberts
        </a>
        <h4 className="text-primary mt-4 pt-3">Director of Publicity</h4>
        <a
          className="btn btn-outline-dark"
          href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/lefteris_publicity.pdf?alt=media"
          target="_blank"
        >
          <i className="far fa-sticky-note"></i> Lefteris Anagnostou
        </a>
        <h4 className="text-primary mt-4 pt-3">Director of Cortado</h4>
        <a
          className="btn btn-outline-dark"
          href="https://firebasestorage.googleapis.com/v0/b/ystt-api.appspot.com/o/owen_cortado.pdf?alt=media"
          target="_blank"
        >
          <i className="far fa-sticky-note"></i> Owen Buchan
        </a>
      </div>
    </div>
  </Layout>
);

export default Elections;
