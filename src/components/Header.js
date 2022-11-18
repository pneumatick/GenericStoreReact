import React from "react";
import AccountLinks from './AccountLinks';
import NavLinks from './NavLinks';

export default class Header extends React.Component {
    render() {
        let permission = this.props.permission;
        let loggedIn = this.props.loggedIn;
        let cart = this.props.cart;

        return (
            <div className='App-header'>
                <NavLinks permission={permission}/>
                {loggedIn ? <p>Items in cart: {cart.length}</p> : null}
                <AccountLinks 
                loggedIn={loggedIn}
                loginToggle={this.props.loginToggle}
                />
            </div>
        );
    }
}