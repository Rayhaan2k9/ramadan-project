import { Firestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useState } from 'react';
import './App.css';
import { db } from './firebase';


function App() {
  let arr = []
  const [messageList, setMessageList] = useState(null)
  const [message, setMessage] = useState('')
  const querySnapshot = getDocs(collection(db, "instead-of"))
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      arr.push({...doc.data()})
      console.log(arr)
    })
    setMessage(arr[0].try)
  })

  return (
    <div className="App">
      <header className="App-header">
       {message}
      </header>
    </div>
  );
}

export default App;
