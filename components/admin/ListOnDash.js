import React, { useState, useEffect } from "react";
import ListedItem from "./ListedItem";

const ListOnDash = ({ collection, loading }) => {
  const [docs, setDocs] = useState([]);

  const fetchItems = async () => {
    const server = process.env.API_ADDRESS;

    const res = await fetch(`${server}/api/${collection}`, {
      method: "GET",
    });

    const data = await res.json();
    if (data.success) {
      setDocs(data.data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    fetchItems();
  }, [loading]);

  return (
    <div>
      {docs &&
        !loading &&
        docs.map((doc, index) => {
          return (
            <ListedItem
              key={doc.id}
              index={index}
              collection={collection}
              doc={doc}
              fetchItems={fetchItems}
            ></ListedItem>
          );
        })}
    </div>
  );
};

export default ListOnDash;
