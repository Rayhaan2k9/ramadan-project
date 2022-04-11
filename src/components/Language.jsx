import {
  Firestore,
  collection,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export function Language() {
  let arr = [];
  const insteadOf = [];
  const use = [];
  const prayerTimes = [];
  const [tryList, setTryList] = useState([]);
  const [insteadOfList, setInsteadOfList] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "instead-of"))
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          arr.push({ ...doc.data() });
        });
      })
      .then(() => {
        arr.forEach((doc) => {
          insteadOf.push(doc.instead);
          use.push(doc.try);
        });
      })
      .then(() => {
        setInsteadOfList(insteadOf);
        setTryList(use);
      });
  }, []);

  return (
    <div>
      <div className="language-list">
        <ul>
          <h3>Instead of</h3>
          {insteadOfList.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>

        <ul>
          <h3>Try</h3>
          {tryList.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
