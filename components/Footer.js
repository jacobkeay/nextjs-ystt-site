import React from "react";
import Link from "next/link";

const Footer = props => {
  return (
    <footer className="fixed-bottom bg-dark pt-2 text-white">
      <div className="container text-center d-flex justify-content-between align-items-center pb-1">
        <Link href="/admin/dashboard">
          <small>
            <a className="btn btn-sm btn-outline-light">
              <i className="fas fa-user"></i>
            </a>
          </small>
        </Link>
        <small>
          <p className="text-muted mb-0 p-0">
            Copyright &copy; {props.year} YSTT | Designed by{" "}
            <a
              href="https://sytetech.co.uk"
              target="_blank"
              className="text-light m-0 p-0"
            >
              SyteTech Web Solutions
            </a>
          </p>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
