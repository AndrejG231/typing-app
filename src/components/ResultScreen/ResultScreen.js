import React from 'react';
import { GoTextSize, } from 'react-icons/go';
import {BiTimer, BiCommentError} from 'react-icons/bi';
import {RiStarSFill} from 'react-icons/ri';
import './ResultScreen.css'

const indexes = [0,2,8,12,13,54, 99, 120,121,122,223,224,225,226,227];
const text = `\
Python supports the usual logical conditions from mathematics:
Equals: a == b
Not Equals: a != b
Less than: a < b
Less than or equal to: a <= b
Greater than: a > b
Greater than or equal to: a >= b
If statement:
if b > a:
    do something...
If statement calls needs to be indented 4 spaces.
Elif => "if the previous conditions were not true"
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
Else => "if no condition was true"
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")`

const characters = 50

const errors = 20

const time = 5040

const ResultScreen = () => {
    const textStyle = {
        fontSize: 20000/text.length
    }
    return (
        <div className="resultsContainer">
            <div className="resStatsContainer">
                <div className="resStat">
                    <div className="resStatText">
                        <h1 className="resStatTitle">Characters per minute</h1>
                        <h4 className="resStatValue">{characters/time}</h4>
                    </div>
                    <div className="resStatIcon"><GoTextSize /></div>
                </div>
                <div className="resStat">
                    <div className="resStatText">
                        <h1 className="resStatTitle">Time</h1>
                        <h4 className="resStatValue">{time}</h4>
                    </div>
                    <div className="resStatIcon"><BiTimer /></div>
                </div>
                <div className="resStat">
                    <div className="resStatText">
                        <h1 className="resStatTitle">Errors</h1>
                        <h4 className="resStatValue">{errors}</h4>
                    </div>
                    <div className="resStatIcon"><BiCommentError /></div>
                </div>
                <div className="resStat">
                    <div className="resStatText">
                        <h1 className="resStatTitle">Overall Score</h1>
                        <h4 className="resStatValue">{characters/time/errors}</h4>
                    </div>
                    <div className="resStatIcon"><RiStarSFill /></div>
                </div>
            </div>
            <div className="resTextContainer">
                <p className="resText" style={textStyle}>
                    {text.split('').map((item, index) => {
                        if(indexes.indexOf(index) >= 0){
                            return <span className="resWrongText">{item}</span>
                        }else{
                            return item
                        }
                    })}
                </p>
            </div>
            <div className="resStatsContainer">

            </div>
        </div>
    )
};

export default ResultScreen
