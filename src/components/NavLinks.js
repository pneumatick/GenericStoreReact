import React from "react";
import { Link } from 'react-router-dom';

const HIGH_PERMISSIONS = ['admin', 'employee'];

export default class NavLinks extends React.Component {
    render() {
        let inventoryLink = <Link className='App-link' to="/inventory">Inventory</Link>;
        let highPermission = HIGH_PERMISSIONS.includes(this.props.permission);

        return (
            <div className='Nav-links'>
                <Link className='App-link' to="/">Home</Link>
                <Link className='App-link' to="/store">Store</Link>
                {highPermission ? inventoryLink : null}
            </div>
        );
    }
}