import { Firestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import Clock from "react-live-clock"
import moment from "moment"
import { Date } from './components/Date';


function App() {
  // const array = []
  // const [prayerTimes, setPrayerTimes] = useState([])
  // const [timeStamp, setTimeStamp] = useState(null)
  // const [formattedTime, setFormattedTime] = useState(null)
  

  // function formatTime(timestamp) {
  //   let date = new Date(timestamp * 1000)
  //   console.log(date)
  //   console.log(moment(date).format("DD"))
  // setFormattedTime("Date: "+date.getDate()+
  // "/"+(date.getMonth()+1)+
  // "/"+date.getFullYear()+
  // " "+date.getHours()+
  // ":"+date.getMinutes()+
  // ":"+date.getSeconds());
  // }
  
 
//  const now = moment().format("dddd, MMMM Do YYYY")

  // useEffect(() => {
  //   getDocs(collection(db, "prayer-times"))
  //   .then((snapshot) => {
  //   //  array.push(snapshot.docs[0]._document.data.value.mapValue.fields['02/04/22']);
  //   snapshot.docs.forEach((doc) => {
  //     array.push({...doc.data()})
  //   })
  //   })
  //   .then(() => {
  //     setPrayerTimes(array)
  //   })
  //   .then(() => {
      
  //     setTimeStamp(prayerTimes[0]["02/04/22"].Fajar.seconds)
  //     console.log(timeStamp)
  //   })
  //   .then(() => {
  //     console.log(formattedTime)
  //   })
  // }, [formattedTime, timeStamp])

  return (
    <div className="App">
      
<Date />
      
    </div>
  );
}

export default App;
