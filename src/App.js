import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
//import Register from './pages/register';
//import Store from './pages/store';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
      </header>
      <a href="http://localhost:8080/login"><p>Log in</p></a>
      <a href="http://localhost:8080/register"><p>Register</p></a>
      <a href="http://localhost:8080/store"><p>Store</p></a>
    </div>
  );*/
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to="/login">Log in</Link>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
