import React, { useState, useEffect } from "react";
import UploadIssue from "./UploadIssue";
import UploadTag from "./UploadTag";
import UploadArticle from "./UploadArticle";
import Spinner from "../../components/Spinner";

const DashCortado = () => {
  const [tags, setTags] = useState(null);
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    const server = process.env.API_ADDRESS;

    let res = await fetch(`${server}/api/cortado/index`, {
      method: "GET",
    });

    const tagData = await res.json();

    res = await fetch(`${server}/api/cortado/issues`);
    const issueData = await res.json();
    const issues = [];

    issueData.data.forEach(issue => {
      issues.push({
        name: issue.num,
        id: issue.id,
        createdAt: issue.createdAt,
      });
    });

    const data = {
      tags: tagData.tags.sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }),
      issues: issues.sort(function (a, b) {
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        return 0;
      }),
    };

    console.log(data.issues);

    if (data.tags && data.issues) {
      setTags(data.tags);
      setIssues(data.issues);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="card-body">
      {issues && tags && (
        <div>
          <h4 className="card-title">Add a new issue no.:</h4>
          <UploadIssue setLoading={setLoading} fetchItems={fetchItems} />
          <p className="mt-3 mb-0 p-0">Current issues: </p>
          {!loading && issues ? (
            issues.map((issue, index) => {
              return (
                <span key={index + 1} className="text-muted p-0 m-0">
                  - {issue.name}{" "}
                </span>
              );
            })
          ) : (
            <Spinner path="/Loader.gif" text="Loading issues..." />
          )}
          <hr className="mt-5" />
          <h4 className="card-title">Add a new tag:</h4>
          <UploadTag setLoading={setLoading} fetchItems={fetchItems} />
          <p className="mt-3 mb-0 p-0">Current tags: </p>
          {!loading && tags ? (
            tags.map((tag, index) => {
              return (
                <span key={index + 1} className="text-muted p-0 m-0">
                  - {tag}{" "}
                </span>
              );
            })
          ) : (
            <Spinner path="/Loader.gif" text="Loading tags..." />
          )}
          <hr className="mt-5" />
          <h4 className="card-title">Add an article to an issue:</h4>
          <UploadArticle indexTags={tags} indexIssues={issues} />
          <hr className="mt-5" />
          <h4 className="card-title">Current issues:</h4>
          <hr />
        </div>
      )}
    </div>
  );
};

export default DashCortado;
