import React from "react";
import UploadMembers from "../admin/UploadMembers";

const DashMembers = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Add a new member</h4>
      <UploadMembers />
    </div>
  );
};

export default DashMembers;
