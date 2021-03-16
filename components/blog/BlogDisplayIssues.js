import React, { useState, useEffect } from "react";
import BlogIssueCard from "./BlogIssueCard";
import Spinner from "../Spinner";
import fetch from "isomorphic-unfetch";

const BlogDisplayIssues = () => {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    setLoading(true);
    const server = process.env.API_ADDRESS;

    const res = await fetch(`${server}/api/cortado/issues`, {
      method: "GET",
    });

    const data = await res.json();
    if (data.success) {
      setIssues(
        data.data.sort(function (a, b) {
          if (a.createdAt < b.createdAt) {
            return 1;
          }
          if (a.createdAt > b.createdAt) {
            return -1;
          }
          return 0;
        })
      );
      setLoading(false);
    } else {
      console.log("Error: major fuckup");
    }
  };

  return (
    <div>
      {issues && !loading ? (
        <div>
          {issues.map(issue => {
            console.log(issue);
            return <BlogIssueCard key={issue.id} issue={issue} />;
          })}
        </div>
      ) : (
        <Spinner path="/Loader.gif" text="Loading journal items..." />
      )}
    </div>
  );
};

export default BlogDisplayIssues;
