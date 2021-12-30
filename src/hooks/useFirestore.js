import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
    .orderBy('createdAt', 'desc')
    .onSnapshot((images) => {
      images.forEach((image) => {
        let documents = [];

        documents.push({ ...image.data(), id: image.id });
        setDocs(documents);
      });

      return () => unsub();
    });
  }, [collection]);

  return { docs };
};


export default useFirestore