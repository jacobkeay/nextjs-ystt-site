import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";

const ProgressResearcj = ({ file, setFile, data, setReady }) => {
  const { name, description } = data;
  const { url, progress } = useStorage(file, name, description, "research");

  useEffect(() => {
    if (url) {
      setFile(null);
      setReady(false);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressResearcj;
