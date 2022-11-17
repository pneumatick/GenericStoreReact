import React from "react";
import { Link } from 'react-router-dom';

export default class NavLinks extends React.Component {
    render() {
        return (
            <div className='Nav-links'>
                <Link className='App-link' to="/">Home</Link>
                <Link className='App-link' to="/store">Store</Link>
                <Link className='App-link' to="/inventory">Inventory</Link>
            </div>
        );
    }
}