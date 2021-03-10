import React from "react";
import Link from "next/link";

const BlogIssueCard = ({ issue }) => {
  return (
    <div className="my-4 py-2">
      <div className="row">
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <img
            className="img-article rounded"
            src="/logo-big-red.jpeg"
            alt="Issue image"
          />
        </div>
        <div className="col-md-9 border-left px-4 pt-3 mb-0 pb-0">
          <h4 className="my-0 py-0">{issue.name}</h4>
          <small className="text-muted">
            {issue.createdAt.substring(0, 10)}
          </small>
          <br />
          <span>{" - "}</span>
          {issue.articles.map(article => {
            return (
              <span key={article.id}>
                <span className="text-muted px-2">{article.title}</span>
                <span>{"-"}</span>
              </span>
            );
          })}
          <br />
          <Link href={`/cortado/${issue.id}`}>
            <button className="btn btn-sm btn-outline-primary mt-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogIssueCard;
