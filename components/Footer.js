import React from "react";

const Footer = props => {
  return (
    <footer className="bg-dark pt-2 text-white">
      <div className="container d-flex align-items-center justify-content-between">
        <button className="btn btn-outline-light">
          <i className="fas fa-user"></i> Admin Portal
        </button>
        <div className="pt-3">
          <p className="text-muted">Copyright &copy; {props.year} YSTT</p>
          <p className="text-muted">
            Designed by{" "}
            <a href="https://sytetech.co.uk" className="text-light">
              SyteTech Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
