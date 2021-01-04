import React, { useEffect, useState } from 'react';
import './TextViewer.css';

const centerContent = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const outerContainer = {
    ...centerContent,
    width: "820px",
    height: "320px",
    background: "#2b2b3f",
    borderRadius: '10px',
}

const innerContainer = {
    ...centerContent,
    width: "800px",
    height: "300px",
    background: "#3b3b4f",
    borderRadius: '7px',

}

const textContainer = {
    width: "800px",
    height: "300px",
    background: "#3b3b4f",
    borderRadius: '7px',
    overflow: 'hidden',
    position: 'relative',
}

const textStyle = {
    whiteSpace: 'nowrap',
    color: '#FFFFFF',
    fontSize: '30px',
    lineHeight: '60px',
    position: 'relative',
    lineSpacing: '0px',
    left: '0px',
    fontFamily: 'monospace',
    // -30 to make text apprear right
}

const textHighlight = {
    width: "820px",
    height: "60px",
    position: "absolute",
    background: "rgba(255,255,255,0.25)",
    right: "",
    top: "120px",
};

const TextViewer = ({index ,text, setNextCharacter}) => {
    const [displayText, setDisplayText] = useState(text);
    const [textTopPosition, setTextTopPosition] = useState(90);
    const [textLeftPosition, setTextLeftPosition] = useState(50);

    useEffect(() => {
        setNextCharacter(text[index]);
        setDisplayText(
            '<span style="color: white">'
            + text.substr(0, index).replaceAll(' ', '&nbsp;').replaceAll('<','&lsaquo;').replaceAll('>','&rsaquo;').replaceAll('\n', '<br>')
            + '</span><span style="color: darkblue; background: rgba(97, 255, 255, 0.5); border-radius: 5px">'
            + text[index].replaceAll(' ', '&nbsp;').replaceAll('\n', '<br>')
            + '</span><span  style="color: lightgray">'
            + text.substr(index + 1, text.length).replaceAll(' ', '&nbsp;').replaceAll('<','&lsaquo;').replaceAll('>','&rsaquo;').replaceAll('\n', '<br>'))
    }, [text, index, setNextCharacter])

    useEffect(() => {
        let charIndex = index;
        let lines = text.replaceAll('\n', ' \n').split('\n');
        let lineCount = 0;

        while(charIndex > lines[0].length -1){
            charIndex -= lines[0].length
            lines.shift();
            lineCount++;
        }
        setTextTopPosition(120- 60 * lineCount);
        setTextLeftPosition(50 - 16.5 * charIndex);
    }, [text, index])


    return (
        <div>
            <div style={outerContainer}>
                <div style={innerContainer}>
                    <div style={textContainer}>
                        <div style={textHighlight} />
                        <p style={{...textStyle, top: textTopPosition + "px", left: textLeftPosition + "px"}} dangerouslySetInnerHTML={{ __html: displayText }} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TextViewer;