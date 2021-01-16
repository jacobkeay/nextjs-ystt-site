import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

import Popup from "./Popup";

const MailForm = () => {
  const [address, setAddress] = useState("");
  const [popup, setPopup] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(`/api/mailjet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setAddress("");
      setPopup(true);
    }
  }

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="card mt-5 p-5 bg-light w-login text-center">
      <h1>
        <i className="fas fa-envelope mb-4"></i>
      </h1>
      <div className="h5 mb-4">Subscribe to our newsletter:</div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="email"
            type="text"
            placeholder="Enter your email address..."
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </form>

      {popup ? <Popup closePopup={togglePopup} /> : null}

      <h5 className="mt-4">
        Or contact us with any questions at{" "}
        <strong className="text-primary">thinktank@yusu.org</strong>!
      </h5>
    </div>
  );
};

export default MailForm;
