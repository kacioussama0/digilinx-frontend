import {db} from "./firestore.js";
import {collection, getDocs,getDoc,doc,query,where} from "firebase/firestore";


const servicesCollection = collection(db, "services");

// show services
export const getServices = async () => {
  const servicesSnapshot = await getDocs(servicesCollection);
    return servicesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));
};


// get service

export const getService = async (id) => {

  const snap = await getDoc(doc(db, "services", id));


  if (!snap.exists()) return null;


  return {
    id: snap.id,
    ...snap.data(),
  };


}

export const getServiceCategories = async (serviceId) => {
  const categoriesRef = collection(db, "categories")

  const q = query(
      categoriesRef,
      where('allowServices','array-contains',serviceId),
      where("isActive", "==", true),
      where('isRoot','==',false),
  )

  const snapshot = await getDocs(q)

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}
