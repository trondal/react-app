import React from 'react';
import Hello from './components/Hello';
import Clock from './components/Clock';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <React.StrictMode>
    <div className="App">
      <Header></Header>
      <Hello/>
      <Clock/>
      <Clock></Clock>
      <Clock></Clock>
    </div>
    </React.StrictMode>
  );
}

export default App;
