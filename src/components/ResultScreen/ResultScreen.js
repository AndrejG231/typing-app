import React from 'react';

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


const ResultScreen = () => {
    return (
        <div className="resultsContainer">
            <div className="resTextContainer">
                <p className="resText">
                    <pre>
                    {text.split('').map((item, index) => {
                        if(indexes.indexOf(index) >= 0){
                            return <span className="resWrongText">{item}</span>
                        }else{
                            return item
                        }
                    })}
                    </pre>
                </p>
            </div>
            <div className="resStatsContainer">

            </div>
        </div>
    )
};

export default ResultScreen
