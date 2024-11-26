import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);

    let items = [];

    querySnapshot.forEach((doc) => {
        let docData = doc.data();
        let item = {
            id: doc.id,
            name: docData.name,
            quantity: docData.quantity,
            category: docData.category,
        }
        items.push(item);
    })

    return items;
}

export async function addItem(userId, item) {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);

    return docRef.id;
}