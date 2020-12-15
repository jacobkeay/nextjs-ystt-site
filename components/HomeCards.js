import React from "react";

const HomeCards = () => {
  return (
    <div className="row text-white text-center">
      <div className="col-md-4">
        <div className="bg-home-1 p-3 m-1">
          <h3>
            <strong>Projects</strong>
          </h3>
          <p>
            Find out more about how we run our research projects, and which of
            those projects are in progress now.
          </p>
          <button className="btn btn-outline-light">
            <i className="fas fa-arrow-right"></i> Read More
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <div className="bg-home-2 p-3 m-1">
          <h3>
            <strong>Get Involved</strong>
          </h3>
          <p>
            Join the York Student Think Tank to gain exclusive access to all of
            our events and projects.
          </p>
          <button className="btn btn-outline-light">
            <i className="fas fa-arrow-right"></i> Read More
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <div className="bg-home-3 p-3 m-1">
          <h3>
            <strong>Events</strong>
          </h3>
          <p>
            We host a variety of events throughout the academic year, from
            speakers to workshops to socials.
          </p>
          <button className="btn btn-outline-light">
            <i className="fas fa-arrow-right"></i> Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
