import Head from "next/head";
import BlogLayout from "../../components/blog/BlogLayout";

const Blog = () => (
  <BlogLayout>
    <Head>
      <title>Cortado Blog | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <h1 className="pt-5 text-center">Cortado Journal</h1>
      <h2 className="pt-3 text-center">Our latest issues:</h2>
    </div>
  </BlogLayout>
);

export default Blog;
