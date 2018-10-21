import React, { Component } from 'react';
import './App.css';
import BmrForm from './component/BmrForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculate your BMR (Basal Metabolic Rate)</h1>
        </header>
      <BmrForm/>  
      </div>
      
    );
  }
}

export default App;
