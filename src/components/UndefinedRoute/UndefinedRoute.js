import React from 'react';
import { Link } from 'react-router-dom';

const UndefinedRoute = () =>{
    return (
        <div>
            <h1>This page is not ready yet.</h1>
            <h2>Click <Link to='/'>here</Link> to go back to menu.</h2>
        </div>
    )
}

export default UndefinedRoute;