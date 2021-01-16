import React from "react";
import useFirestore from "../hooks/useFirestore";

const AboutProfiles = () => {
  const { docs } = useFirestore("members");
  return (
    <div className="row mt-5">
      {docs &&
        docs.map(doc => {
          return (
            <div className="col-md-4 mb-4" key={doc.id}>
              <div className="text-center">
                <img
                  className="img-about img-thumbnail"
                  src={doc.url}
                  alt={doc.description}
                />
                <p className="pt-2 mb-0">
                  <strong>{doc.name}</strong>
                </p>
                <p className="mt-0">{doc.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AboutProfiles;
