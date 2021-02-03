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
      <div className="row">
        <div className="col-md-4">
          <hr className="mt-3 mb-0 p-0" />
          <div className="bg-light p-3 text-center">
            <h4>Issue #5</h4>
            <p className="text-muted m-0 p-1">Sample article #1</p>
            <p className="text-muted m-0 p-1">Sample article #2</p>
            <p className="text-muted m-0 p-1">Sample article #3</p>
            <p className="text-muted m-0 p-1">Sample article #4</p>
            <p className="text-muted m-0 p-1">Sample article #5</p>
            <button className="mt-2 btn btn-sm btn-outline-primary">
              Read more
            </button>
          </div>
          <hr className="mt-0 mb-3 p-0" />
        </div>
        <div className="col-md-4">
          <hr className="mt-3 mb-0 p-0" />
          <div className="bg-light p-3 text-center">
            <h4>Issue #4</h4>
            <p className="text-muted m-0 p-1">Sample article #1</p>
            <p className="text-muted m-0 p-1">Sample article #2</p>
            <p className="text-muted m-0 p-1">Sample article #3</p>
            <p className="text-muted m-0 p-1">Sample article #4</p>
            <p className="text-muted m-0 p-1">Sample article #5</p>
            <p className="text-muted m-0 p-1">Sample article #6</p>
            <p className="text-muted m-0 p-1">Sample article #7</p>
            <p className="text-muted m-0 p-1">Sample article #8</p>
            <p className="text-muted m-0 p-1">Sample article #9</p>
            <button className="mt-2 btn btn-sm btn-outline-primary">
              Read more
            </button>
          </div>
          <hr className="mt-0 mb-3 p-0" />
        </div>
        <div className="col-md-4">
          <hr className="mt-3 mb-0 p-0" />
          <div className="bg-light p-3 text-center">
            <h4>Issue #3</h4>
            <p className="text-muted m-0 p-1">Sample article #1</p>
            <p className="text-muted m-0 p-1">Sample article #2</p>
            <p className="text-muted m-0 p-1">Sample article #3</p>
            <p className="text-muted m-0 p-1">Sample article #4</p>
            <p className="text-muted m-0 p-1">Sample article #5</p>
            <p className="text-muted m-0 p-1">Sample article #6</p>
            <p className="text-muted m-0 p-1">Sample article #7</p>
            <button className="mt-2 btn btn-sm btn-outline-primary">
              Read more
            </button>
          </div>
          <hr className="mt-0 mb-3 p-0" />
        </div>
        <div className="col-md-4">
          <hr className="mt-3 mb-0 p-0" />
          <div className="bg-light p-3 text-center">
            <h4>Issue #2</h4>
            <p className="text-muted m-0 p-1">Sample article #1</p>
            <p className="text-muted m-0 p-1">Sample article #2</p>
            <p className="text-muted m-0 p-1">Sample article #3</p>
            <p className="text-muted m-0 p-1">Sample article #4</p>
            <p className="text-muted m-0 p-1">Sample article #5</p>
            <p className="text-muted m-0 p-1">Sample article #6</p>
            <p className="text-muted m-0 p-1">Sample article #7</p>
            <p className="text-muted m-0 p-1">Sample article #8</p>
            <button className="mt-2 btn btn-sm btn-outline-primary">
              Read more
            </button>
          </div>
          <hr className="mt-0 mb-3 p-0" />
        </div>
        <div className="col-md-4">
          <hr className="mt-3 mb-0 p-0" />
          <div className="bg-light p-3 text-center">
            <h4>Issue #1</h4>
            <p className="text-muted m-0 p-1">Sample article #1</p>
            <p className="text-muted m-0 p-1">Sample article #2</p>
            <p className="text-muted m-0 p-1">Sample article #3</p>
            <p className="text-muted m-0 p-1">Sample article #4</p>
            <button className="mt-2 btn btn-sm btn-outline-primary">
              Read more
            </button>
          </div>
          <hr className="mt-0 mb-3 p-0" />
        </div>
      </div>
    </div>
  </BlogLayout>
);

export default Blog;
