import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import moment from "moment"



export function PrayerTimes() {

    const timesArray = []
    const [prayerTimes, setPrayerTimes] = useState('ray')
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
                setPrayerTimes({...doc.data()})
            })
        })
        .then(() => {
            
            setFajar(prayerTimes[now].Fajar.seconds)
            setZohar(prayerTimes[now].Zohar.seconds)
            setAsar(prayerTimes[now].Asar.seconds)
            setMagrib(prayerTimes[now].Magrib.seconds)
            setIsha(prayerTimes[now].Isha.seconds)
            setIsLoading(false)
        })
       
    }, [])
    


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