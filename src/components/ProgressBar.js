import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress, error } = useStorage(file);
  console.log(progress, url)
  console.log(error)
  return <div className="progress-bar"></div>;
};

export default ProgressBar;
