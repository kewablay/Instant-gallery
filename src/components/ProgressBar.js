import React,{useEffect} from "react";
import useStorage from "../hooks/useStorage";
import {motion} from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {
  const { progress, error, url } = useStorage(file);
  useEffect(() => {
    if(url){
      setFile(null)
    }
  },[url])
  return(
    <>
      <motion.div 
      className="progress-bar" 
      initial={{width: 0}}
      animate={{ width: progress + "%"}}
      transition={{type: "tween"}}
      ></motion.div>
    </>
  ) 
  
};

export default ProgressBar;
