import {db} from "./firestore.js";
import {collection, getDocs,} from "firebase/firestore";


const servicesCollection = collection(db, "services");

// show services
export const getServices = async () => {
  const servicesSnapshot = await getDocs(servicesCollection);
    return servicesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));
};

