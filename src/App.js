import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentTime from './Components/CurrentTime'
import SquareView from './Components/Square'



class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to asbReact</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CurrentTime/>
        <SquareView bgcolor='red' text='1'/>
        <SquareView bgcolor='blue' text='2'/>
        <SquareView bgcolor='pink' text='3'/>
      </div>
      
    );
  }
}

export default App;
