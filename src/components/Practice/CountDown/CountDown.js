import React from 'react';
import './CountDown.css';



const CountDown = ({time}) => {
    const getTime = () => ((time+30)/100*-1 + 1).toString()[0]
    return (
        <div className="countdownContainer">
            <div className="countdownBox">{getTime()}</div>
        </div>
    )
}

export default CountDown;