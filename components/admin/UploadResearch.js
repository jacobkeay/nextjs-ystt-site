import React, { useState } from "react";
import ProgressResearch from "./ProgressResearch";

const UploadResearch = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const types = ["image/png", "image/jpeg"];

  const handleImage = e => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (.png or .jpeg)");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name && description) {
      setReady(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="custom-file my-3">
        <input
          type="file"
          id="myfile"
          className="custom-file-input"
          onChange={handleImage}
        />
        <label className="custom-file-label" htmlFor="myfile">
          {file ? file.name : "Choose picture..."}
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          onChange={e => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Enter name..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          onChange={e => setDescription(e.target.value)}
          id="description"
          rows="3"
          placeholder="Enter description..."
        ></textarea>
      </div>
      <button className="btn btn-sm btn-primary" type="submit">
        <strong>+</strong> Add
      </button>
      {error && (
        <div className="alert alert-warning my-3">
          <strong>Error!</strong> {error}
        </div>
      )}
      {file && ready && (
        <ProgressResearch
          file={file}
          setFile={setFile}
          data={{ name, description }}
          setReady={setReady}
        />
      )}
    </form>
  );
};

export default UploadResearch;
