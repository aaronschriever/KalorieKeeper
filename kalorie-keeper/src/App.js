import React, { Component } from 'react';
import './App.css';
import BmrForm from './component/BmrForm';
import ScalesSVG from './component/ScalesSVG';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kalorie Keeper </h1><ScalesSVG color={"white"} strokeWidth={"15"} fill={"none"} />
        </header>
      <BmrForm/>  
      </div>
      
    );
  }
}

export default App;
