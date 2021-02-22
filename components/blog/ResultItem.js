import React from "react";

const ResultItem = ({ result }) => {
  return (
    <div>
      <h4 className="pt-1 mb-0">
        <strong>{result.title}</strong>
      </h4>
      <div className="text-white">
        {result.tags.map((tag, index) => {
          return (
            <span key={index + 1} className="badge badge-primary my-1 mr-2">
              #{tag}
            </span>
          );
        })}
      </div>
      <h6 className="text-muted">
        {result.author} - {result.issue} - {result.createdAt.substring(0, 10)}
      </h6>
      <p>{result.body}</p>
      <hr />
    </div>
  );
};

export default ResultItem;
