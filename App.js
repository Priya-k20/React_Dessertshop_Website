import APIExample from './API/APIExample';
import ContactAPIProject from './API/ContactAPI';
import logo from './logo.svg';
/* import './App.css'; */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DessertList from './components/DessertList';
import Cart from './components/Cart';
import { Counter } from './features/counter/Counter';
import Weather from './API/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/*   <img src={logo} className="App-logo" alt="logo" /> */}
{/*    <APIExample/> */}
{/* <ContactAPIProject/> */}

{/* <Counter/>  */}
    {/* <Router>
      <Routes>
        <Route path="/" element={<DessertList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router> */}
    <Weather/>
  
    
      </header>
    </div>
  );
}

export default App;
