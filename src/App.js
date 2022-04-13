import { Firestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { Language } from './components/Language';
import { db } from './firebase';


function App() {
  const array = []
  const [prayerTimes, setPrayerTimes] = useState([])
  const [timeStamp, setTimeStamp] = useState(null)
  const [formattedTime, setFormattedTime] = useState(null)

  function formatTime(timestamp) {
    let date = new Date(timestamp * 1000)
    console.log(date);
  setFormattedTime("Date: "+date.getDate()+
  "/"+(date.getMonth()+1)+
  "/"+date.getFullYear()+
  " "+date.getHours()+
  ":"+date.getMinutes()+
  ":"+date.getSeconds());
  }
  
  

  useEffect(() => {
    getDocs(collection(db, "prayer-times"))
    .then((snapshot) => {
    //  array.push(snapshot.docs[0]._document.data.value.mapValue.fields['02/04/22']);
    snapshot.docs.forEach((doc) => {
      array.push({...doc.data()})
    })
    })
    .then(() => {
      setPrayerTimes(array)
    })
    .then(() => {
      
      setTimeStamp(prayerTimes[0]["02/04/22"].Fajar.seconds)
      console.log(timeStamp)
    })
    .then(() => {
      formatTime(timeStamp)
      console.log(formattedTime)
    })
  }, [formattedTime, timeStamp])

  return (
    <div className="App">
      <header className="App-header">
      <h2>Fajar: {formattedTime}</h2>
      <Language />
      </header>
    </div>
  );
}

export default App;
