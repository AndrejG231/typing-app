import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import Item from './Item'
import './Menu.css'

import Levels from '../../Levels';
import { useLocation } from 'react-router-dom';

const Menu = () => {
    const Lessons = Levels[useLocation().pathname.replace('/menu/','')];
    return (
        <div className="windowContainer">
            <div className="menuContainer">
                <Scrollbars
                    style={{
                        width: "70vw"
                        }}>
                    <div className="gridContainer">
                        {Object.keys(Lessons).map((item, index) => {
                            return <Item item={Lessons[item]} key={Lessons[item]['id']} index={Object.keys(Lessons)[index]} />
                        })}
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}

export default Menu;