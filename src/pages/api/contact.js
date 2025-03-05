import { db } from "../../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, phone, email, message } = req.body;

      if (!name || !phone || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const docRef = await addDoc(collection(db, "Contact-Information"), {
        name,
        phone,
        email,
        message,
      });

      return res
        .status(200)
        .json({ message: "Data added successfully!", id: docRef.id });
    } catch (error) {
      console.error("Error adding data to Firestore: ", error);
      return res.status(500).json({ error: "Error saving data to Firestore" });
    }
  } else if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(
        collection(db, "Contact-Information")
      );

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return res.status(200).json({ data });
    } catch (error) {
      console.error("Error fetching data from Firestore: ", error);
      return res
        .status(500)
        .json({ error: "Error fetching data from Firestore" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
