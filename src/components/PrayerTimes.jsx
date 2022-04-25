import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import moment from "moment"



export function PrayerTimes() {

    const timesArray = []
    const [prayerTimes, setPrayerTimes] = useState([])
    const [fajar, setFajar] = useState(null)
    const [zohar, setZohar] = useState(null)
    const [asar, setAsar] = useState(null)
    const [magrib, setMagrib] = useState(null)
    const [isha, setIsha] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    

    const now = moment().format("D")
    

    function formatTime(timestamp) {
        let time = new Date(timestamp * 1000)
    }

    useEffect(() => {
        setIsLoading(true)
        getDocs(collection(db, "prayer-times"))
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                timesArray.push({...doc.data()})
            })
        })
        .then(() => {
            setPrayerTimes(timesArray)
        })
        .then(() => {
            setFajar(prayerTimes[0][now].Fajar.seconds)
            setZohar(prayerTimes[0][now].Zohar.seconds)
            setAsar(prayerTimes[0][now].Asar.seconds)
            setMagrib(prayerTimes[0][now].Magrib.seconds)
            setIsha(prayerTimes[0][now].Isha.seconds)
        })
        .then(() => {
            setIsLoading(false)
        })
    }, [now, prayerTimes])


    return (
        isLoading ? <p>Loading prayer times...</p> :
        <div className="prayer-container">
            
            <div className="prayer-times">
                <h5>Fajar: {moment(fajar * 1000).format("h:mm")}am </h5>
                <h5>Zohar: {moment(zohar * 1000).format("h:mm")}pm</h5>
                <h5>Asar: {moment(asar * 1000).format("h:mm")}pm</h5>
                <h5>Magrib: {moment(magrib * 1000).format("h:mm")}pm</h5>
                <h5>Isha: {moment(isha * 1000).format("h:mm")}pm</h5>
            </div>
        </div>
    )
}