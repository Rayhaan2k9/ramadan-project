import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import moment from "moment"



export function PrayerTimes() {

    const timesArray = []
    const [prayerTimes, setPrayerTimes] = useState([])
    const [fajar, setFajar] = useState(null)

    function formatTime(timestamp) {
        let time = new Date(timestamp * 1000)

    }

    useEffect(() => {
        getDocs(collection(db, "prayer-times"))
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                timesArray.push({...doc.data()})
            })
        })
        .then(() => {
            setPrayerTimes(timesArray)
            setFajar(prayerTimes[0][23].Fajar.seconds)
            console.log(fajar)
        })
    }, [])


    return (
        <div className="prayer-container">
            <div className="prayer-times">
                <h5>Fajar: {moment(fajar * 1000).format("h:mm")}am </h5>
                <h5>Zohar: </h5>
                <h5>Asar: </h5>
                <h5>Magrib: </h5>
                <h5>Isha: </h5>
            </div>
        </div>
    )
}