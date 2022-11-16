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
        const res = await axios({
            method: 'post',
            url: URL,
            withCredentials: true,
            data: {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then((res) => {
            console.log(res.headers)
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
                <div className="Login-form">
                    <div className='Form-field'>
                        <label>Username</label>
                        <input 
                            id="username"
                            type="text" 
                            placeholder="Enter your username"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='Form-field'>
                        <label>Password</label>
                        <input 
                            id="password"
                            type="password" 
                            placeholder="Enter your password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button 
                        className='Form-button' 
                        onClick={this.logIn}
                    >
                        Log in
                    </button>
                </div>
            </div>
        );
    }
}