import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import appFirebase from "../libs/firebase";
import { userDataFirebase } from "../types/firebase";
import bcrypt from "bcrypt";

const fireStore = getFirestore(appFirebase);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(fireStore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retriveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(fireStore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signUp(userData: userDataFirebase, callback: Function) {
  const q = query(
    collection(fireStore, "users"),
    where("email", "==", userData.email)
  );

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback(false);
  } else {
    if (!userData.role) {
      userData.role = "member";
    }
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.created_at = new Date();
    userData.updated_at = new Date();
    userData.image =
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1705219864/person_u2rq22.png";
    await addDoc(collection(fireStore, "users"), userData)
      .then(() => {
        callback(true);
      })
      .catch((error) => {
        callback(false);
        console.log(error);
      });
  }
}

export async function signIn(email: string) {
  const q = query(collection(fireStore, "users"), where("email", "==", email));

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function loginWithGoogle(
  data: userDataFirebase,
  callback: Function
) {
  const q = query(
    collection(fireStore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user.length > 0) {
    callback(user[0]);
  } else {
    data.role = "member";
    data.password = "";
    data.created_at = new Date();
    data.updated_at = new Date();
    await addDoc(collection(fireStore, "users"), data).then(() => {
      callback(data);
    });
  }
}

export async function updateData(
  collectionName: string,
  id: string,
  data: any,
  callback: Function
) {
  const docRef = doc(fireStore, collectionName, id);
  await updateDoc(docRef, data)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}

export async function deleteData(
  collectionName: string,
  id: string,
  callback: Function
) {
  const docRef = doc(fireStore, collectionName, id);
  await deleteDoc(docRef)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}
