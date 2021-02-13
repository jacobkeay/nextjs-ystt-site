import React from "react";

const BlogIssueCard = ({ issue }) => {
  return (
    <div className="my-4 py-2">
      <div className="row">
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <img
            className="img-article rounded"
            src={issue.articles[0].imageUrl}
            alt="Issue image"
          />
        </div>
        <div className="col-md-9 border-left px-4 pt-3">
          <h4>{issue.issue}</h4>
          {issue.articles.map(article => {
            return (
              <span className="text-muted" key={article.id}>
                - {article.title}{" "}
              </span>
            );
          })}
          <br />
          <button className="btn btn-sm btn-outline-primary mt-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogIssueCard;
