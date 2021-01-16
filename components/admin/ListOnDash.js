import React from "react";
import useFirestore from "../../hooks/useFirestore";
import useDelete from "../../hooks/useDelete";

const ListOnDash = ({ collection }) => {
  const { docs } = useFirestore(collection);
  return (
    <div>
      {docs &&
        docs.map((doc, index) => {
          return (
            <div key={doc.id}>
              <div className="row my-2">
                <div className="col-md-3 d-flex">
                  <h1 className="mr-3">#{index + 1}</h1>
                  <img
                    className="img-dash img-thumbnail"
                    src={doc.url}
                    alt={doc.description}
                  />
                </div>
                <div className="col-md-9">
                  <p className="pl-2 pt-2">
                    <strong>Name: </strong>
                    {doc.name}
                  </p>
                  <p className="pl-2">
                    <strong>Description: </strong>
                    {doc.description}
                  </p>
                  <button
                    className="btn btn-outline-primary btn-sm ml-2"
                    onClick={() => useDelete(collection, doc.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <hr className="my-3" />
            </div>
          );
        })}
    </div>
  );
};

export default ListOnDash;
