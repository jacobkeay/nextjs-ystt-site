import React, { useState, useEffect } from "react";
import UploadIssue from "./UploadIssue";
import UploadTag from "./UploadTag";
import UploadArticle from "./UploadArticle";

const DashCortado = () => {
  const [tags, setTags] = useState(null);
  const [issues, setIssues] = useState(null);

  const fetchItems = async () => {
    const server = process.env.API_ADDRESS;

    const res = await fetch(`${server}/api/cortado/index`, {
      method: "GET",
    });

    const data = await res.json();
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
          <h4 className="card-title">Add a new issue #:</h4>
          <UploadIssue />
          <p className="mt-3 mb-0 p-0">Current issues: </p>
          {issues &&
            issues.map((issue, index) => {
              return (
                <span key={index + 1} className="text-muted p-0 m-0">
                  - {issue}{" "}
                </span>
              );
            })}
          <hr className="mt-5" />
          <h4 className="card-title">Add a new tag:</h4>
          <UploadTag />
          <p className="mt-3 mb-0 p-0">Current tags: </p>
          {tags &&
            tags.map((tag, index) => {
              return (
                <span key={index + 1} className="text-muted p-0 m-0">
                  - {tag}{" "}
                </span>
              );
            })}
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
