import React from "react";
import Link from "next/link";

const HomeCards = () => {
  return (
    <div className="row text-white text-center">
      <div className="col-md-4">
        <div className="rounded bg-home-1 p-3 m-1">
          <h3>
            <strong>Projects</strong>
          </h3>
          <p>
            Find out more about how we run our research projects, and which of
            those projects are in progress now.
          </p>
          <Link href="/research">
            <a className="btn btn-outline-light">
              <i className="fas fa-arrow-right"></i> Our Projects
            </a>
          </Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="rounded bg-home-2 p-3 m-1">
          <h3>
            <strong>Get Involved</strong>
          </h3>
          <p>
            Join the York Student Think Tank to gain exclusive access to all of
            our events and projects.
          </p>
          <Link href="/contact">
            <a className="btn btn-outline-light">
              <i className="fas fa-arrow-right"></i> Get In Touch
            </a>
          </Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="rounded bg-home-3 p-3 m-1">
          <h3>
            <strong>Cortado</strong>
          </h3>
          <p>
            We run a weekly journal on current affairs, and we're always looking
            for new writers.
          </p>
          <Link href="/cortado/journal">
            <a className="btn btn-outline-light">
              <i className="fas fa-arrow-right"></i> Find Out More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
