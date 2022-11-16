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
        return (
            <div>
                <h1>Register</h1>
                <label>Username</label>
                <input 
                    id="username" 
                    type="text" 
                    placeholder="Enter your username"
                    onChange={this.handleChange}
                />
                <label>Password</label>
                <input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    onChange={this.handleChange}
                />
                <label>Email</label>
                <input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    onChange={this.handleChange}
                />
                <button onClick={this.makePostReq}>Register</button>
            </div>
        );
    }
}