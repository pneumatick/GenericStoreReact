import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
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
        <Link to="/register">Register</Link>
        <Link to="/login">Log in</Link>
        <Link to="/store">Store</Link>
        <Link to="/inventory">Inventory</Link>
        <Routes>
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
