import React from "react";
import Router from "next/router";
import cookie from "js-cookie";

const Logout = () => {
  async function handleClick(e) {
    e.preventDefault();
    cookie.remove("token");
    Router.push("/admin/login");
  }

  return (
    <button className="btn btn-sm btn-outline-dark" onClick={handleClick}>
      <i className="fas fa-sign-out-alt"></i> Log Out
    </button>
  );
};

export default Logout;
