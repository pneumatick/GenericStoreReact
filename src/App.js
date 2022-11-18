import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
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
      permission: '',
      cart: []
    };

    this.loginToggle = this.loginToggle.bind(this);
    this.setPermission = this.setPermission.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  loginToggle(status) {
    this.setState({ loggedIn: status });

    if (status) {
      console.log(`Status: ${status}`);
    }
  }

  setPermission(permission) {
    this.setState({ permission: permission });
  }

  addToCart(name) {
    this.setState({ cart: [...this.state.cart, name] });
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
    let permission = this.state.permission;
    let cart = this.state.cart;

    return (
      <div className='App'>
        <BrowserRouter>
          <Header 
            loggedIn={loggedIn}
            permission={permission}
            cart={cart}
            loginToggle={this.loginToggle}
          />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={
                loggedIn ? <Navigate to="/store"/> : <Login 
                  loginToggle={this.loginToggle}
                  setPermission={this.setPermission}
                />
              }
            />
            <Route path="/store" element={<Store addToCart={this.addToCart} />}/>
            <Route path="/inventory" element={<Inventory/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
