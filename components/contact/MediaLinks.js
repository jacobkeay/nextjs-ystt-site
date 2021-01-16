import React from "react";

const MediaLinks = () => {
  return (
    <div>
      <h5 className="pt-2 text-center">
        <strong>Follow us online!</strong>
      </h5>
      <div className="d-flex text-primary justify-content-around my-4 mx-5 px-5">
        <a href="https://www.facebook.com/yorkstudentthinktank" target="_blank">
          <h1>
            <i className="fab fa-facebook-square"></i>
          </h1>
        </a>
        <a href="https://twitter.com/YorkThinkTank" target="_blank">
          <h1>
            <i className="fab fa-twitter-square"></i>
          </h1>
        </a>
        <a
          href="https://www.linkedin.com/company/york-think-tank/about/"
          target="_blank"
        >
          <h1>
            <i className="fab fa-linkedin"></i>
          </h1>
        </a>
        <a href="https://www.instagram.com/yorkthinktank/" target="_blank">
          <h1>
            <i className="fab fa-instagram"></i>
          </h1>
        </a>
      </div>
    </div>
  );
};

export default MediaLinks;
