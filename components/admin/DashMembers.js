import React from "react";
import UploadMembers from "../admin/UploadMembers";
import ListOnDash from "./ListOnDash";

const DashMembers = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Add a new member</h4>
      <UploadMembers />
      <hr className="mt-5" />
      <h4 className="card-title">Current members:</h4>
      <hr />
      <ListOnDash collection={"members"} />
    </div>
  );
};

export default DashMembers;
