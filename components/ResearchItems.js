import React, { Fragment } from "react";
import useFirestore from "../hooks/useFirestore";

const ResearchItems = () => {
  const { docs } = useFirestore("research");
  return (
    <div className="mt-5">
      {docs &&
        docs.map(doc => {
          return (
            <Fragment>
              <div className="row">
                <div className="col-md-4 pt-3 text-center">
                  <img
                    className="img-research rounded mb-4"
                    src={doc.url}
                    alt={doc.description}
                  />
                </div>
                <div className="col-md-8">
                  <h4 className="px-4 pt-3">
                    <strong>{doc.name}</strong>
                  </h4>
                  <p className="px-4">{doc.description}</p>
                </div>
              </div>
              <hr className="my-4" />
            </Fragment>
          );
        })}
    </div>
  );
};

export default ResearchItems;
