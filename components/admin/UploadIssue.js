import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";

const UploadIssue = ({ setLoading, fetchItems }) => {
  const [issue, setIssue] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const server = process.env.API_ADDRESS;
    if (issue) {
      const res = await fetch(`${server}/api/cortado/index/issues`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ issue }),
      });

      await res.json();
      fetchItems();
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-0">
        <label htmlFor="issue">Issue No.</label>
        <input
          className="form-control"
          onChange={e => setIssue(e.target.value)}
          type="text"
          id="issue"
          placeholder="E.g. 'Issue 13'"
        />
      </div>
      <small>
        <strong className="text-primary">IMPORTANT!</strong> Do not use hashes
        (#) in issue names, as this can interfere with search results.
      </small>
      <br />
      <button className="mt-2 btn btn-sm btn-primary" type="submit">
        <strong>+</strong> Add
      </button>
    </form>
  );
};

export default UploadIssue;
