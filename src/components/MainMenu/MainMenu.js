import React from 'react';
import {Link} from 'react-router-dom';

import './MainMenu.css';

const MainMenu = () => {
    return (
        <div className="mainContainer">
            <div className="leftContainer">
                <h1 className="title">10 finger coder</h1>
                <div className="nav">
                    <ul className="navLinks">
                        <Link to={'speedTest'}>
                            <li className="navLink">Speed Test</li>
                        </Link>
                        <Link to={'/menu/codeTyping'}>
                            <li className="navLink">Code Typing Lessons</li>
                        </Link>
                        <Link to={'speedTest'}>
                            <li className="navLink">Word Typing Lessons</li>
                        </Link>
                        <Link to={'speedTest'}>
                            <li className="navLink">Vim training</li>
                        </Link>
                        <Link to={'speedTest'}>
                            <li className="navLink">About</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="rightContainer">
                <ul className="navLinks">
                    <Link to={'speedTest'}>
                        <li className="navLink personalLink">Login</li>
                    </Link>
                    <Link to={'speedTest'}>
                        <li className="navLink personalLink">Sign Up</li>
                    </Link>
                    <Link to={'speedTest'}>
                        <li className="navLink personalLink">Settings</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default MainMenu;