import React from 'react';

import './Status.css'
const statusContainer = {
    width: "810px",
    height: "30px",
    background: "darkblue",
    color: "white",
    fontSize: "22px",
    lineHeight: "30px",
    borderRadius: "10px",
    border: "5px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontFamily: "monospace"
};

const limitWidth = {
    width: "220px"
}
const limitWidthCpm = {
    width: "130px"
}

const Status = ({index, time, errors}) => {
    const formatTime = () => {
        if(time <= 0){
            return '00:00.00'
        }
        var seconds = Math.round(time/100)
        var minutes = 0;
        var hours = 0;
        while(seconds >= 3600){
            seconds -= 3600;
            hours += 1;
        }
        while(seconds >= 60){
            seconds -= 60;
            minutes += 1;
        }
        seconds = seconds > 9 ? seconds.toString() : '0' + seconds.toString();
        minutes = minutes > 9 ? minutes.toString() : '0' + minutes.toString();
        hours = hours > 0 ? (hours > 9 ? hours.toString() + ':' : '0' + hours.toString() + ':') : "";
        return `${hours}${minutes}:${seconds}.${time.toString().slice(-2)}`
    };
    console.log(formatTime())

    const formatCpm = () => {
        return Math.round(index/(time/100)*600)/10
    };
    const formatErr = () => {
        return Math.round(errors/(index + 1)*100)/100 
    };

    return (
        <div style={statusContainer}>
            <span style={limitWidth}>Time: {formatTime()} </span>
            <span> | </span>
            <span style={limitWidthCpm}>CPM: {formatCpm()} </span>
            <span> | </span>
            <span>Error Rate: {formatErr()} </span>
            <span> | </span>
            <span>Chars: {index} </span>
        </div>
    )
}

export default Status;