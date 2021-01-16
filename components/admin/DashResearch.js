import React from "react";
import UploadResearch from "../admin/UploadResearch";
import ListOnDash from "./ListOnDash";

const DashResearch = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Add a new research item</h4>
      <UploadResearch />
      <hr className="mt-5" />
      <h4 className="card-title">Current research items:</h4>
      <hr />
      <ListOnDash collection={"research"} />
    </div>
  );
};

export default DashResearch;
