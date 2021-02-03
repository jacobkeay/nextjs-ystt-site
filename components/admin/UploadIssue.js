import React, { useState } from "react";
import ProgressMembers from "./ProgressMembers";

const UploadMembers = () => {
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);
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
        <label htmlFor="name">Issue No.</label>
        <input
          className="form-control"
          onChange={e => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="E.g. 'Issue #13'"
        />
      </div>
      <button className="btn btn-sm btn-primary" type="submit">
        <strong>+</strong> Add
      </button>
      {error && (
        <div className="alert alert-warning my-3">
          <strong>Error!</strong> {error}
        </div>
      )}
      {ready && <ProgressMembers data={{ name }} setReady={setReady} />}
    </form>
  );
};

export default UploadMembers;
