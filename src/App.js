import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props){
    super(props)
    this.state={curTime:null}
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        curTime:new Date().toLocaleTimeString()
      })
    },1000)
  }

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
        <p>The time is: {this.state.curTime}</p>
      </div>
      
    );
  }
}

export default App;
