import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import moment from "moment"



export function PrayerTimes({newDay, setnewDay}) {

    const timesArray = []
    const [prayerTimes, setPrayerTimes] = useState({})
    const [fajar, setFajar] = useState(null)
    const [zohar, setZohar] = useState(null)
    const [asar, setAsar] = useState(null)
    const [magrib, setMagrib] = useState(null)
    const [isha, setIsha] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    
    const midnight = "0:00:00"
    const today = moment().format("DD/MM/YY")
    let now = null;
    
    setInterval(() => {
        now = moment().format("H:mm:ss")
        if (now === midnight) {
            setnewDay(today)
        }
    }, 1000);

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
       
    }, [newDay])

    useEffect(() => {
        
        if (prayerTimes[today]) {
        setFajar(prayerTimes[today].Fajar.seconds)
                setZohar(prayerTimes[today].Zohar.seconds)
                setAsar(prayerTimes[today].Asar.seconds)
                setMagrib(prayerTimes[today].Magrib.seconds)
                setIsha(prayerTimes[today].Isha.seconds)
                setTimeout(() => {
                  setIsLoading(false)  
                }, 600);
                
        }
        
    }, [prayerTimes])
    


    return (
        isLoading ? <p>Loading prayer times...</p> :
        <div className="prayer-container">
            
            <div className="prayer-times">
                <h1>Fajar: {moment(fajar * 1000).format("h:mm")}am </h1>
                <h1>Zohar: {moment(zohar * 1000).format("h:mm")}pm</h1>
                <h1>Asar: {moment(asar * 1000).format("h:mm")}pm</h1>
                <h1>Magrib: {moment(magrib * 1000).format("h:mm")}pm</h1>
                <h1>Isha: {moment(isha * 1000).format("h:mm")}pm</h1>
            </div>
        </div>
    )
}