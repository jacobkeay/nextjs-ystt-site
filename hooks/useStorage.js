import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import { codeGen } from "../utils/tools";

const useStorage = (file, name, description, collection) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(codeGen());
    const collectionRef = projectFirestore.collection(collection);

    storageRef.put(file).on(
      "state_changed",
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      err => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, name, description, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
