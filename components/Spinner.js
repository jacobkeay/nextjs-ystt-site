import React from "react";

const Spinner = ({ path, text }) => {
  return (
    <div className="mt-3 text-center">
      <img src={path} alt="loader" />
      <p className="mt-3">{text}</p>
    </div>
  );
};

export default Spinner;
