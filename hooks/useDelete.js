import { projectFirestore } from "../firebase/config";

const useDelete = (collection, id) => {
  projectFirestore
    // Access specified collection
    .collection(collection)
    // Delete and log the document with provided ID
    .doc(id)
    .delete()
    .then(function () {
      console.log("Deleted " + id);
    });
};

export default useDelete;
