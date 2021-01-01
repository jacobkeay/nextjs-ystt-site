import React, { useState } from "react";

const DashCounter = () => {
  const [num, setNum] = useState(0);
  async function handleClick(e) {
    e.preventDefault();
    setNum(num + 1);
  }

  return (
    <div>
      <button className="btn btn-outline-dark btn-login" onClick={handleClick}>
        {num}
      </button>
    </div>
  );
};

export default DashCounter;
