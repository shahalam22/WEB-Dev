import {useState, useEffect} from 'react';
import * as Datefns from 'date-fns';
import Layout31 from "../components/layout/Layout31";

function getTimes(date){
    return {
        hour: Datefns.getHours(date),
        minute: Datefns.getMinutes(date),
        seconds: Datefns.getSeconds(date)
    }
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function Clock32() {

    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        setTimeout(()=>{
            setDate(new Date());
        }, 1000);
    }, [date]);

    const time = getTimes(date);

    return (
        <Layout31>
            <h1>Clock</h1>
            <h1>{formatTime(time.hour)} : {formatTime(time.minute)} : {formatTime(time.seconds)}</h1>
        </Layout31>
    )
}


export default Clock32;