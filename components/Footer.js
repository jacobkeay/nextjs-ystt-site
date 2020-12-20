import React from "react";

const Footer = props => {
  return (
    <footer className="bg-dark pt-2 text-white">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-outline-light mt-4">
              <i className="fas fa-user"></i> Admin Portal
            </button>
          </div>
          <div className="col-md-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
