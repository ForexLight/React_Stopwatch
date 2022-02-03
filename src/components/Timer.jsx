import React, {useEffect, useState} from 'react';
import {clear} from "@testing-library/user-event/dist/clear";

const Timer = ({start , refresh, setRefresh, setStart, circle, addCircle, setCircle}) => {

    const [time, setTime] = useState(0)


    useEffect(() => {
        console.log(start)
        let intId = null
        if (start){
            intId = setInterval(() => {
                setTime(prevState => prevState + 10)
            }, 10)
        }else if (!start){
            clearInterval(intId)
        }
        return () => clearInterval(intId)

    }, [start])

    useEffect(() => {
        if(refresh) {
            setTime(0)
            setRefresh(!refresh)
            setStart(false)
        }
    }, [refresh])

    useEffect(() => {
        if(circle){
            addCircle(time)
        }
        setCircle(false)
    },[circle])




    console.log(time)

    const currTime = new Date(time)
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span> h : {currTime.getHours()-3}</span>
            <span> m : {currTime.getMinutes()} </span>
            <span> s : {currTime.getSeconds()} </span>
            <span> ms : {currTime.getMilliseconds()} </span>
        </div>
    );
};

export default Timer;