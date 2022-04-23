import { Firestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../firebase';
import Clock from "react-live-clock"
import moment from "moment"
import { PrayerTimes } from './PrayerTimes';

export function Date() {


    return (
        <div className='date-container'>
            <div className='date-time'>
            <h1>Today is {moment().format("dddd, MMMM Do YYYY")}</h1>

            <Clock
          format={'h:mm:ss a'}
          style={{fontSize: '1.5em'}}
          ticking={true} />

          <PrayerTimes />
            </div>

        </div>
    )
}