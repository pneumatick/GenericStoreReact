import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountLinks from './components/AccountLinks';
import NavLinks from './components/NavLinks';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Store from './pages/Store';
import Inventory from './pages/Inventory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      permission: ''
    };

    this.loginToggle = this.loginToggle.bind(this);
    this.setPermission = this.setPermission.bind(this);
  }

  loginToggle(status) {
    this.setState({ loggedIn: status });
  }

  setPermission(permission) {
    this.setState({ permission: permission });
  }

  componentDidUpdate() {
    let loggedIn = this.state.loggedIn;
    let permission = this.state.permission;

    if (!loggedIn && permission) {
      this.setState({ permission: '' });
    }
  }

  render() {
    let loggedIn = this.state.loggedIn;

    return (
      <div className='App'>
        <BrowserRouter>
          <div className='App-header'>
            <NavLinks permission={this.state.permission}/>
            <AccountLinks 
              loggedIn={loggedIn}
              loginToggle={this.loginToggle}
            />
          </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={
                <Login 
                  loginToggle={this.loginToggle}
                  setPermission={this.setPermission}
                />
              }
            />
            <Route path="/store" element={<Store/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
