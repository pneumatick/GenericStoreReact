import React from "react";
import { Link } from 'react-router-dom';

export default class AccountLinks extends React.Component {
    render() {
        let links;

        if (this.props.loggedIn) {
            links = [<p key="shut up">log out placeholder</p>];
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