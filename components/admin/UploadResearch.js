import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";
import ListOnDash from "./ListOnDash";

const UploadResearch = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayAdded, setDisplayAdded] = useState(false);

  const types = ["image/png", "image/jpeg"];

  const handleImage = e => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("description", description);

    const server = process.env.API_ADDRESS;
    if (name && description && file) {
      const res = await fetch(`${server}/api/research`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      setLoading(false);
      setDisplayAdded(true);
      setTimeout(() => {
        setDisplayAdded(false);
      }, 3000);
    }
  };

  return (
    <div>
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
        <button
          disabled={loading ? "disabled" : null}
          className="btn btn-sm btn-primary"
          type="submit"
        >
          <strong>+</strong> Add
        </button>
        {displayAdded && (
          <div className="alert alert-success my-3">
            <strong>Added!</strong>
          </div>
        )}
      </form>
      <hr className="mt-5" />
      <h4 className="card-title">Current research:</h4>
      <hr />
      <ListOnDash collection={"research"} loading={loading} />
    </div>
  );
};

export default UploadResearch;
