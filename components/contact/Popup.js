import React from "react";

const Popup = ({ closePopup }) => {
  return (
    <div className="alert alert-success alert-dismissable">
      <button className="close" onClick={closePopup}>
        <span>x</span>
      </button>
      <strong>Subscribed!</strong> You're on our mailing list.
    </div>
  );
};

export default Popup;
