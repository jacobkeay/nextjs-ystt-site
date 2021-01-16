import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";

const ProgressMembers = ({ file, setFile, data, setReady }) => {
  const { name, description } = data;
  const { url, progress } = useStorage(file, name, description, "members");

  useEffect(() => {
    if (url) {
      setFile(null);
      setReady(false);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressMembers;
