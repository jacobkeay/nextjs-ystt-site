import Head from "next/head";
import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import BlogLayout from "../../components/blog/BlogLayout";
import Spinner from "../../components/Spinner";
import ResultItem from "../../components/blog/ResultItem";

const Find = ({ indexTags, indexIssues }) => {
  const [keyword, setKeyword] = useState("none");
  const [tag, setTag] = useState("none");
  const [issue, setIssue] = useState("none");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const server = process.env.API_ADDRESS;
    if (tag) {
      const res = await fetch(
        `${server}/api/cortado/search?tag=${tag}&issue=${issue}&keyword=${keyword}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      if (data.success) {
        setResults(data.data);
        setLoading(false);
        console.log(results);
      } else {
        console.log(data);
      }
    }
  };

  const checkResults = () => {
    if (results) {
      setDisplay(true);
    }
  };

  return (
    <BlogLayout>
      <Head>
        <title>Cortado Journal | YSTT</title>
      </Head>
      <div className="container my-5 pt-3">
        <div className="card mt-5 p-3 bg-light text-center">
          <h1>
            <i className="fas fa-search mb-2"></i>
          </h1>
          <div className="h5 mb-2">Find an Article</div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="tag">By Keyword:</label>
                  <input
                    className="form-control"
                    onChange={e => setKeyword(e.target.value)}
                    type="text"
                    id="keyword"
                    placeholder="Keyword..."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="issue">By Tag:</label>
                  <select
                    value={tag}
                    onChange={e => setTag(e.target.value)}
                    className="form-control"
                    id="issue"
                  >
                    <option value="none">None</option>
                    {indexTags.map((indexTag, index) => {
                      return (
                        <option key={index + 1} value={indexTag}>
                          {indexTag}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="issue">By Issue:</label>
                  <select
                    value={issue}
                    onChange={e => setIssue(e.target.value)}
                    className="form-control"
                    id="issue"
                  >
                    <option value="none">None</option>
                    {indexIssues.map((indexIssue, index) => {
                      return (
                        <option key={index + 1} value={indexIssue}>
                          {indexIssue}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="container">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {loading ? (
        <Spinner path="/Loader.gif" text="Retrieving articles..." />
      ) : (
        <div className="container">
          {results.length > 0 ? (
            <div>
              {results.map(result => (
                <ResultItem key={result.id} result={result} />
              ))}
            </div>
          ) : (
            <p>No articles found!</p>
          )}
        </div>
      )}
    </BlogLayout>
  );
};

Find.getInitialProps = async ctx => {
  const data = await fetchItems();
  return { indexTags: data.tags, indexIssues: data.issues };
};

const fetchItems = async () => {
  const server = process.env.API_ADDRESS;

  const res = await fetch(`${server}/api/cortado/index`, {
    method: "GET",
  });

  const data = await res.json();
  if (data.tags && data.issues) {
    return data;
  } else {
    console.log(data);
  }
};

export default Find;
