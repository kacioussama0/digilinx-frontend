import {db} from "./firestore.js";
import {collection, getDocs, getDoc, doc, query, where, setDoc} from "firebase/firestore";


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


// add service

export const addService = async (serviceObj) => {
  try {
    const docRef = await setDoc(doc(db, "services", serviceObj.id), {
      name: serviceObj.name,
      description: serviceObj.description,
      icon: serviceObj.icon,
      color: serviceObj.color,
      enabled: serviceObj.enabled,
      featured: serviceObj.enabled,
    });


    return true



  } catch (error) {
    console.error("Error adding service:", error);

    return false
  }
};

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
