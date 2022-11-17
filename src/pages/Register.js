import React from "react";
import axios from "axios";

const URL = 'http://localhost:8080/register';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.makePostReq = this.makePostReq.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async makePostReq() {
        let res = await axios({
            method: 'post',
            url: URL,
            withCredentials: true,
            data: {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            }
        })
        .then((res) => {
            if (res.status === 200) {
                console.log("Registration successful!");
            }
            else {
                console.log(`Status: ${res.status}`);
            }
        })
        .catch((error) => {
            console.error(error.message)
        });
    }

    handleChange(e) {
        let id = e.target.id;
        let value = e.target.value;

        switch (id) {
            case 'username':
                this.setState({ username: value });
                break;
            case 'password':
                this.setState({ password: value });
                break;
            case 'email':
                this.setState({ email: value });
                break;
            default:
                console.log(`Unexpected element: ${e.target}`);
        }
    }

    render() {
        let username = this.state.username;
        let password = this.state.password;
        let email = this.state.email;
        let validEmail = false;
        let disabled = true;

        // Check for a valid email address format
        let splitEmail = email.split('@');
        if (splitEmail.length === 2) {
            let domain = splitEmail[1].split('.');
            domain.length === 2 && domain[1] !== '' ? validEmail = true : validEmail = false;
        }

        // Ensure the required conditions are met before enabling the register button
        username && password && validEmail ? disabled = false : disabled = true;

        return (
            <div className="Registration-form">
                <h1>Register a new account</h1>
                <div className="Form-field">
                    <label>Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        placeholder="Enter your username"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="Form-field">
                    <label>Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="Form-field">
                    <label>Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        onChange={this.handleChange}
                    />
                </div>
                <button 
                    className="Form-button" 
                    onClick={this.makePostReq}
                    disabled={disabled}
                >
                    Register
                </button>
            </div>
        );
    }
}