import React from "react";
import cookie from "js-cookie";
import fetch from "isomorphic-unfetch";

const ListedItem = ({ doc, index, collection, fetchItems }) => {
  const handleDelete = async () => {
    const server = process.env.API_ADDRESS;

    const res = await fetch(`${server}/api/${collection}/${doc.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    });

    const data = await res.json();
    if (!data.success) {
      console.log(data);
    } else {
      console.log(data);
      fetchItems();
    }
  };

  return (
    <div>
      <div className="row my-2">
        <div className="col-md-3 d-flex">
          <h1 className="mr-3">#{index + 1}</h1>
          <img
            className="img-dash img-thumbnail"
            src={doc.imageUrl}
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
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
      </div>
      <hr className="my-3" />
    </div>
  );
};

export default ListedItem;
