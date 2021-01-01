import React, { useState } from "react";
import DashResearch from "./DashResearch";
import DashMembers from "./DashMembers";
import DashArticles from "./DashArticles";

const DashMain = () => {
  const [tab, setTab] = useState(0);

  const getContent = () => {
    if (tab === 0) {
      return <DashMembers />;
    } else if (tab === 1) {
      return <DashResearch />;
    } else {
      return <DashArticles />;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a
              className={tab === 0 ? "nav-link active" : "nav-link"}
              onClick={() => setTab(0)}
            >
              Members
            </a>
          </li>
          <li className="nav-item">
            <a
              className={tab === 1 ? "nav-link active" : "nav-link"}
              onClick={() => setTab(1)}
            >
              Research
            </a>
          </li>
          <li className="nav-item">
            <a
              className={tab === 2 ? "nav-link active" : "nav-link"}
              onClick={() => setTab(2)}
            >
              Articles
            </a>
          </li>
        </ul>
      </div>
      {getContent()}
    </div>
  );
};

export default DashMain;
