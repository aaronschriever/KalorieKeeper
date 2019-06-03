import React, { Component } from 'react';
import './App.css';
import BmrForm from './component/BmrForm';
import ScalesSVG from './component/ScalesSVG';
import LoginForm from './component/LoginForm';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    }
    
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kalorie Keeper </h1><ScalesSVG color={"white"} strokeWidth={"15"} fill={"none"} />
        </header>
         { isLoggedIn? <BmrForm/> : <LoginForm/> } 
        
        
      
      </div>
      
    );
  }
}

export default App;
