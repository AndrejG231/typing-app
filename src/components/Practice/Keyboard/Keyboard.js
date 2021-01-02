import React from 'react';

import KeyButton from './KeyButton';
import keysData from './keysData';


const row = {
    display: "flex",
    flexDirection: "row",
}

const keyboardStyle = {
    width: "800px",
    height: "280px",
    background: "#9F9F9F",
    borderRadius: "5px",
    position: 'relative',
    left: '10px',
    top: '10px',
}

const container = {
    width: "820px",
    height: "300px",
    background: "#1F1F1F",
    borderRadius: "8px",
}

const Keyboard = ({expectedKeys, badPrevious, shift}) => {
    return (
        <div style={container}>
            <div style={keyboardStyle}>
                <div style={row}>
                    {keysData.numberRow.map((item) => {
                        return (
                            <KeyButton
                                key={item.id}
                                mainKey={item}
                                expectedKeys={expectedKeys}
                                badPrevious={badPrevious}
                                shift={shift}
                                />
                        )
                    })}
                </div>
                <div style={row}>
                    {keysData.upperRow.map((item) => {
                        return (
                            <KeyButton
                                key={item.id}
                                mainKey={item}
                                expectedKeys={expectedKeys}
                                badPrevious={badPrevious}
                                shift={shift}
                                />
                        )
                    })}
                </div>
                <div style={row}>
                    {keysData.middleRow.map((item) => {
                        return (
                            <KeyButton
                            key={item.id}
                            mainKey={item}
                            expectedKeys={expectedKeys}
                            badPrevious={badPrevious}
                            shift={shift}
                            />
                        )
                    })}
                </div>
                <div style={row}>
                    {keysData.lowerRow.map((item) => {
                        return (
                            <KeyButton
                                key={item.id}
                                mainKey={item}
                                expectedKeys={expectedKeys}
                                badPrevious={badPrevious}
                                shift={shift}
                                />
                        )
                    })}
                </div>
                <div style={row}>
                    {keysData.bottomRow.map((item) => {
                        return (
                            <KeyButton
                                key={item.id}
                                mainKey={item}
                                expectedKeys={expectedKeys}
                                badPrevious={badPrevious}
                                shift={shift}
                                />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Keyboard;