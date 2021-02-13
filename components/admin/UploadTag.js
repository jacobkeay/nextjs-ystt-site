import React, { useState } from "react";

const UploadTag = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (name) {
      setReady(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Tag name</label>
        <input
          className="form-control"
          onChange={e => setName(e.target.value)}
          type="text"
          id="name"
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
