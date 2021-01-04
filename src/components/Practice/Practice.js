import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import {Keyboard, TextViewer, Status, CountDown} from '.';

import characters from './TextViewer/characters';
import Levels from '../../Levels'
import './Practice.css';

const centerAll = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const mainContainer = {
    width: "100ww",
    background: "#141221",
    ...centerAll
}

const practiceContaier = {
    background: "rgba(61, 31, 31, 1)",
    width: "840px",
    height: "100vh",
    ...centerAll,
    flexDirection: "column",
    borderLeft: "30px solid black",
    borderRight: "30px solid black"
}

const Practice = () => {
    let Lessons = {};
    Object.keys(Levels()).forEach(item => Lessons = {...Levels()[item], ...Lessons});
    const [text] = useState(Lessons[useLocation().pathname.replace('/play/','')]['text']);
    const [nextLetter, setNextLetter] = useState('');
    const [expectedKeys, setExpectedKeys] = useState([]);
    const [badPrevious, setBadPrevious] = useState('');
    const [shift, setShift] = useState(false);
    const [index, setIndex] = useState(0);
    const [errors, setErrors] = useState(0);
    const [time, setTime] = useState(-300);

    const handleShift = (event, state) => {
        if(event.key === "Shift"){
            setShift(state)
        };
    };

    const handleKeyPress = (event) => {
        event.preventDefault();
        if(event.key === nextLetter){
            setIndex(index + 1)
        }
        else if(event.key === 'Enter' && nextLetter === '\n'){
            setIndex(index + 1)
        }
        else{
            if(characters.Ignored.indexOf(event.key) === -1){
                setErrors(errors + 1);
            }
            try {
                setBadPrevious(characters[event.key][0])
              }
              catch(err) {
                setBadPrevious('')
              }
        }
    };

    const handleKeyDown = (event) => {
        if(time > -50){
            handleShift(event, true);
            handleKeyPress(event);
        }
    };

    const handleKeyUp = (event) => {
        handleShift(event, false)
    }; 
    
    const setNextCharacter = (letter) => {
        setExpectedKeys(characters[letter]);
        setNextLetter(letter);
    };


    useEffect(() => {
        const timer = setInterval(() => {
          setTime(time + 9);
        }, 90);
                   // clearing interval
        return () => clearInterval(timer);
      });
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    })

    return (
        <div style={mainContainer} tabIndex="0">
            <div style={practiceContaier}>
                <CountDown time={time} />
                <TextViewer
                    index={index}
                    setNextCharacter={setNextCharacter}
                    text={text}
                    />
                <Status 
                    time={time}
                    index={index}
                    errors={errors}/>
                <Keyboard
                    expectedKeys={expectedKeys}
                    badPrevious={badPrevious}
                    shift={shift}
                    />
            </div>
        </div>
    )
}


export default Practice;