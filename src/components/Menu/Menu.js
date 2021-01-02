import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import Item from './Item'
import './Menu.css'

import Levels from '../../Levels';

const Menu = () => {
    return (
        <div className="windowContainer">
            <div className="menuContainer">
                <Scrollbars
                    style={{
                        width: "70vw"
                        }}>
                    <div className="gridContainer">
                        {Object.keys(Levels).map((item, index) => {
                            return <Item item={Levels[item]} key={Levels.id} index={Object.keys(Levels)[index]} />
                        })}
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}

export default Menu;