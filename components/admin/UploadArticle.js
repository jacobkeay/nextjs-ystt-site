import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";

const UploadArticle = ({ indexTags, indexIssues }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [issue, setIssue] = useState("Issue 1");
  const [loading, setLoading] = useState(false);
  const [displayAdded, setDisplayAdded] = useState(false);

  const types = ["image/png", "image/jpeg", "image/jpg"];

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

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("body", body);
    formData.append("tags", tags);
    formData.append("issue", issue);

    const server = process.env.API_ADDRESS;
    if (title && author && body && tags && issue && file) {
      const res = await fetch(`${server}/api/cortado`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
        body: formData,
      });

      const data = await res.json();
      setLoading(false);
      setDisplayAdded(true);
      setTimeout(() => {
        setDisplayAdded(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="issue">
          <strong className="text-primary">1: </strong>For Issue:
        </label>
        <select
          value={issue}
          onChange={e => setIssue(e.target.value)}
          className="form-control"
          id="issue"
        >
          {indexIssues.map((indexIssue, index) => {
            return (
              <option key={index + 1} value={indexIssue}>
                {indexIssue}
              </option>
            );
          })}
        </select>
      </div>
      <p>
        <strong className="text-primary">2: </strong>Tags:
      </p>
      <fieldset className="form-group d-flex">
        {indexTags.map((indexTag, index) => {
          return (
            <div key={index + 1} className="form-check mr-2">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={indexTag}
                  onChange={e =>
                    setTags(tags =>
                      !tags.includes(e.target.value)
                        ? [...tags, e.target.value]
                        : tags.filter(tag => tag !== e.target.value)
                    )
                  }
                />
                {indexTag}
              </label>
            </div>
          );
        })}
      </fieldset>
      <span>
        <strong className="text-primary">3: </strong>Article Image
      </span>
      <div className="custom-file my-3">
        <input
          type="file"
          id="myfile"
          className="custom-file-input"
          onChange={handleImage}
        />
        <label className="custom-file-label" htmlFor="myfile">
          {file ? file.name : "Choose article image..."}
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="title">
          <strong className="text-primary">4: </strong>Article Title
        </label>
        <input
          className="form-control"
          onChange={e => setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="Enter article title..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">
          <strong className="text-primary">5: </strong>Article Author
        </label>
        <input
          className="form-control"
          onChange={e => setAuthor(e.target.value)}
          type="text"
          id="author"
          placeholder="Enter name of author..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">
          <strong className="text-primary">6: </strong>Article Text
        </label>
        <textarea
          className="form-control"
          onChange={e => setBody(e.target.value)}
          id="description"
          rows="3"
          placeholder="Enter article text..."
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
      {error && (
        <div className="alert alert-warning my-3">
          <strong>Error!</strong> {error}
        </div>
      )}
    </form>
  );
};

export default UploadArticle;
