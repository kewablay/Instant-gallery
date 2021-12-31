import React from "react";
import useFireStore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFireStore("images");
  console.log("Docs", docs);

  return (
    <div className="image-grid-container">
      <div className="image-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="image-container"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default ImageGrid;
