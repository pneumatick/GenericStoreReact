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
      loggedIn: false
    };

    this.loginToggle = this.loginToggle.bind(this);
  }

  loginToggle() {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  render() {
    let loggedIn = this.state.loggedIn;
    console.log(loggedIn)

    return (
      <div className='App'>
        <BrowserRouter>
          <div className='App-header'>
            <NavLinks/>
            <AccountLinks loggedIn={loggedIn}/>
          </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login loginToggle={this.loginToggle}/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
