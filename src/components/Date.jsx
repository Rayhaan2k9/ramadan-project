import { Firestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../firebase';
import Clock from "react-live-clock"
import moment from "moment"
import { PrayerTimes } from './PrayerTimes';

export function Date() {
const [newDay, setnewDay] = useState(null)
const [today, setToday] = useState(null)
const now = moment().format("dddd, MMMM Do YYYY")

useEffect(() => {
    setToday(now)
}, [newDay])

    return (
        <div className='date-container'>
            <div className='date-time'>
            <h2>{today}</h2>

            <Clock
          format={'h:mm:ss a'}
          style={{fontSize: '1.5em'}}
          ticking={true} />

          <PrayerTimes setnewDay = {setnewDay} newDay = {newDay}/>
            </div>

        </div>
    )
}