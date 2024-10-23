
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DessertList from './components/DessertList';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
    <Router>
      <Routes>
        <Route path="/" element={<DessertList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router> 
      </header>
    </div>
  );
}

export default App;
