import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, error, url } = useStorage(file);
  console.log(error)
  console.log(progress, url)
  return <div className="progress-bar"></div>;
};

export default ProgressBar;
