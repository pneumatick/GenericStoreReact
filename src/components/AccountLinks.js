import React from "react";
import { Link } from 'react-router-dom';

export default class AccountLinks extends React.Component {
    render() {
        let cart = this.props.cart;
        let links;

        if (this.props.loggedIn) {
            links = [
                <button key="cart">Cart: {cart.length}</button>,
                <button 
                    key="logout"
                    onClick={() => this.props.loginToggle(false)}
                >
                    Log out
                </button>
            ];
        }
        else {
            links = [
                <Link key="register" className='App-link' to="/register">Register</Link>,
                <Link key="login" className='App-link' to="/login">Log in</Link>
            ];
        }

        return (
            <div className='Account-links'>
                {links}
            </div>
        );
    }
}