import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavWrapper } from './components/NavWrapper';

function App() {
  return (
    <Router>
      <NavWrapper/>
    </Router>
    
  );
}

export default App;
