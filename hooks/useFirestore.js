import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = collection => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      // Access specified collection
      .collection(collection)
      // Order by date created in descending order (newest first)
      .orderBy("createdAt", "asc")
      // Listen to collection, get a snapshot when updated
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    // Returns cleanup function
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
