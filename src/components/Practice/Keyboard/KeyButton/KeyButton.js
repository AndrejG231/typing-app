import React, { useState, useEffect } from 'react';

import keyColors from '../keyColors';

const KeyButton = ({ mainKey, expectedKeys, badPrevious, shift }) => {
    const buttonSizes = {
        "Tab": { width: "70px", fontSize: "35px" },
        "Backspace": { width: "100px", fontSize: "20px" },
        "Enter": { width: "79px", fontSize: "30px" },
        "Space": { width: "340px", fontSize: "30px" },
        "CapsLock": { width: "90px", fontSize: "22px" },
        "ShiftLeft": { width: "60px", fontSize: "30px" },
        "ShiftRight": { width: "139px", fontSize: "30px" },
        "ControlLeft":{ width: "70px", fontSize: "22px" },
        "ControlRight":{ width: "70px", fontSize: "22px" },
        "###": { width: "59px", fontSize: "22px" },
        "Win":{ width: "60px", fontSize: "30px" },
        "Alt":{ width: "60px", fontSize: "30px" },
    }

    const buttonBackgrounds = {
        a: 'rgba(255, 255, 26, 0.35)',
        s: 'rgba(230, 0, 0, 0.35)',
        d: 'rgba(51, 255, 51, 0.35)',
        f: 'rgba(0, 92, 153, 0.35)',
        j: 'rgba(26, 26, 255, 0.35)',
        k: 'rgba(51, 255, 51, 0.35)',
        l: 'rgba(230, 0, 0, 0.35)',
        ";": 'rgba(255, 255, 26, 0.35)',
    }

    const getButtonWidth = () => {
        return (buttonSizes[mainKey.code] === undefined ? { width: "50px", fontSize: "35px" } : buttonSizes[mainKey.code]);
    }
    
    const getButtonBackground = () => {
        return (buttonBackgrounds[mainKey.key] === undefined ? 'lightgray' : buttonBackgrounds[mainKey.key]);
    }

    const mainStyle = {
        ...getButtonWidth(),
        height: "50px",
        textAlign: "center",
        lineHeight: "50px",
        borderRadius: "10px",
        margin: "1px",
    };

    const defaultStyle = { border: "2px solid gray", background: getButtonBackground() };
    const [keyStyle, setKeyStyle] = useState(defaultStyle);

    useEffect(() => {
        if (expectedKeys.indexOf(mainKey.code) >= 0) {
            setKeyStyle({ border: defaultStyle.border, background: keyColors[mainKey.color] });
        } else if (badPrevious === mainKey.code) {
            setKeyStyle({ border: "2px solid red", background: defaultStyle.background });
        } else {
            setKeyStyle({ border: defaultStyle.border, background: defaultStyle.background })
        };
    }, [expectedKeys, mainKey, keyStyle.border, badPrevious, defaultStyle.border, defaultStyle.background]);

    return (
        <div style={{ ...mainStyle, ...keyStyle }}>
            {shift ? mainKey.shift : mainKey.key}
        </div>
    )
    }

    export default KeyButton;