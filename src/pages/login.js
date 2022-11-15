import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:8080/login';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.logIn = this.logIn.bind(this);
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
            default:
                console.log(`Unexpected element ${id}`);
        }
    }

    async logIn() {
        const res = axios({
            method: 'post',
            url: URL,
            data: {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then((res) => {
            console.log('Log in successful!');
        })
        .catch((error) => {
            console.error(`${error}`);
        });
    }

    render() {
        return (
            <div>
                <h1>Log in</h1>
                <div className="login-form">
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
                    <button onClick={this.logIn}>Log in</button>
                </div>
            </div>
        );
    }
}