import Head from "next/head";
import BlogLayout from "../../components/blog/BlogLayout";
import BlogAboutText from "../../components/blog/BlogAboutText";

const Blog = () => (
  <BlogLayout>
    <Head>
      <title>Cortado Blog | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <BlogAboutText />
    </div>
  </BlogLayout>
);

export default Blog;
