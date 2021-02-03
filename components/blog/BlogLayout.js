import Head from "next/head";
import BlogNavbar from "./BlogNavbar";
import Footer from "../Footer";

const Layout = props => (
  <div>
    <Head>
      <meta
        name="description"
        content="Student-run think tank at the University of York."
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossOrigin="anonymous"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
    </Head>
    <BlogNavbar />
    {props.children}
    <div className="m-3 p-3"></div>
    <Footer year={new Date().getFullYear()} />
  </div>
);

export default Layout;
