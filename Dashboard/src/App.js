import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import StudentComponent from './StudentComponent';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <StudentComponent/>
    </div>
  );
}

export default App;
