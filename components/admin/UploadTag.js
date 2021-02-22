import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";

const UploadTag = ({ setLoading, fetchItems }) => {
  const [tag, setTag] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const server = process.env.API_ADDRESS;
    if (tag) {
      const res = await fetch(`${server}/api/cortado/index/tags`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tag }),
      });

      await res.json();
      fetchItems();
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="tag">Tag name</label>
        <input
          className="form-control"
          onChange={e => setTag(e.target.value)}
          type="text"
          id="tag"
          placeholder="E.g. 'UK Politics'"
        />
      </div>
      <button className="btn btn-sm btn-primary" type="submit">
        <strong>+</strong> Add
      </button>
    </form>
  );
};

export default UploadTag;
