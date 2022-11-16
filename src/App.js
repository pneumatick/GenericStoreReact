import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Store from './pages/Store';
import Inventory from './pages/Inventory';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );*/
  return (
    <div className='App'>
      <BrowserRouter>
        <Link className='App-link' to="/">Home</Link>
        <Link className='App-link' to="/register">Register</Link>
        <Link className='App-link' to="/login">Log in</Link>
        <Link className='App-link' to="/store">Store</Link>
        <Link className='App-link' to="/inventory">Inventory</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
