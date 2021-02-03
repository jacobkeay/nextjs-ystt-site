import React from "react";
import UploadIssue from "./UploadIssue";
import UploadArticle from "./UploadArticle";

const DashCortado = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Add a new Cortado issue:</h4>
      <UploadIssue />
      <hr className="mt-5" />
      <h4 className="card-title">Add an article to an issue:</h4>
      <UploadArticle />
      <hr className="mt-5" />
      <h4 className="card-title">Current issues:</h4>
      <hr />
    </div>
  );
};

export default DashCortado;
