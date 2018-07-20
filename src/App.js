import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavItem,Icon} from 'react-materialize'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar style={{backgroundColor:'black'}} fixed={true} brand={<img src={logo} width='60' className='App-logo' alt='logo' />} left>
      
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" width='5%' alt="logo" />
          <h1 className="App-title">Welcome to asbReact</h1>
        </header> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
    );
  }
}

export default App;
