import Head from "next/head";
import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import BlogLayout from "../../components/blog/BlogLayout";
import Spinner from "../../components/Spinner";

const Issue = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const routerQuery = router.query;
  console.log(query, routerQuery);

  const fetchItems = async () => {
    setLoading(true);
    const server = process.env.API_ADDRESS;

    const res = await fetch(
      `${server}/api/cortado/search?tag=none&issue=${query.issue}&keyword=none`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    setLoading(false);
    if (data.success) {
      setArticles(data.data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <BlogLayout>
      <Head>
        <title>Cortado Journal | YSTT</title>
      </Head>
      <div className="container my-5 pt-3 d-flex flex-column align-items-center">
        <h1 className="pt-5 text-center">Cortado Journal</h1>
        <h2 className="pt-3 pb-5 text-center">{query.issue}</h2>
        {loading && (
          <Spinner path="/Loader.gif" text="Loading journal items..." />
        )}
        {articles &&
          articles.map((article, index) => {
            return (
              <Fragment key={index}>
                <img
                  className="img-research rounded mb-4"
                  src={article.imageUrl}
                  alt={article.title}
                />
                <div className="text-center ">
                  <h4 className="pt-1 mb-0">
                    <strong>{article.title}</strong>
                  </h4>
                  <div className="text-white">
                    {article.tags.map((tag, index) => {
                      return (
                        <span
                          key={index + 1}
                          className="badge badge-primary my-0 mx-1"
                        >
                          #{tag}
                        </span>
                      );
                    })}
                  </div>
                  <h6 className="text-muted">{article.author}</h6>
                </div>
                <p className="px-4">{article.body}</p>
                <div className="d-flex justify-content-center mt-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center rounded-circle bg-cortado backdrop-cortado-sm text-center">
                    <img
                      src="/cortado-logo.jpg"
                      height="30"
                      alt="logo here"
                    ></img>
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
    </BlogLayout>
  );
};

Issue.getInitialProps = ({ query }) => {
  return { query };
};

export default Issue;
