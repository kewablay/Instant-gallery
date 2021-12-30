import React,{useEffect} from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, error, url } = useStorage(file);
  useEffect(() => {
    if(url){
      setFile(null)
    }
  },[url])
  return(
    <>
      {file && <div>loading....</div>}
      <div className="progress-bar" style={{ width: progress + "%"}}></div>
    </>
  ) 
  
};

export default ProgressBar;
