import React, { useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import fetch from "isomorphic-unfetch";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const server = process.env.API_ADDRESS;

    const res = await fetch(`${server}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(res);

    const data = await res.json();
    setLoading(false);

    if (data && data.error) {
      setLoginError(data.message);
    }
    if (data && data.token) {
      //set cookie
      cookie.set("token", data.token, { expires: 1 });
      Router.push("/admin/dashboard");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <input
            className="form-control"
            name="email"
            type="text"
            placeholder="Username"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-unlock-alt"></i>
            </span>
          </div>
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            disabled={loading ? "disabled" : null}
            className="btn btn-outline-dark btn-login"
            type="submit"
          >
            <i className="fas fa-arrow-right"></i> Submit
          </button>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
