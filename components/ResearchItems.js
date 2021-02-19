import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Spinner from "./Spinner";

const ResearchItems = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchItems = async () => {
    setLoading(true);
    const server = process.env.API_ADDRESS;

    const res = await fetch(`${server}/api/research`, {
      method: "GET",
    });

    const data = await res.json();
    setLoading(false);
    if (data.success) {
      setDocs(data.data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="mt-5">
      {loading ? (
        <Spinner path="Loader.gif" text="Loading research items..." />
      ) : (
        docs.map((doc, index) => {
          return (
            <Fragment key={index}>
              <div className="row">
                <div className="col-lg-4 pt-3 text-center">
                  <img
                    className="img-research rounded mb-4"
                    src={doc.imageUrl}
                    alt={doc.description}
                  />
                </div>
                <div className="col-lg-8">
                  <h4 className="px-4 pt-3">
                    <strong>{doc.name}</strong>
                  </h4>
                  <p className="px-4">{doc.description}</p>
                </div>
              </div>
              <hr className="my-4" />
            </Fragment>
          );
        })
      )}
    </div>
  );
};

export default ResearchItems;
