import { Firestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';


function App() {
  let arr = []
  const insteadOf = []
  const use = []
  const[tryList, setTryList] = useState([])
  const [insteadOfList, setInsteadOfList] = useState([])
  const [message, setMessage] = useState('')
  
  
  
  

  useEffect(() => {
   getDocs(collection(db, "instead-of"))
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      arr.push({...doc.data()})
    })
  })
  .then(() => {
   arr.forEach((doc) => {
     insteadOf.push(doc.instead)
     use.push(doc.try)
   })
  })
  .then(() => {
    setInsteadOfList(insteadOf)
    setTryList(use)
  })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Instead of</h3>
       <ul>
       {insteadOfList.map((doc, index) => <li key={index}>{doc}</li>)}
       </ul>

    <h3>Try</h3>
    <ul>
      {tryList.map((doc, index) => <li key={index}>{doc}</li>)}
    </ul>

      </header>
    </div>
  );
}

export default App;
