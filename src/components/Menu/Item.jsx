import React from 'react';
import { AiFillPlaySquare} from 'react-icons/ai';
import {Link} from 'react-router-dom';

import './item.css';

const Item = ({item, index}) =>{
    return (
        <div className='itemContainer'>
            <div className="textContainer">
                <h1 className="itemTitle">{item.name}</h1>
                <p className="itemDescription">{item.description}</p>
            </div>
            <Link to={`/play/${index}`} >
                    <div className='iconStyle'>
                        <AiFillPlaySquare />
                    </div>
            </Link>
        </div>
    )
}

export default Item