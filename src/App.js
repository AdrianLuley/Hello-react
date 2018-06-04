import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render(){
    return(<h1 style={{color:this.props.color}}>Hello, {this.props.name}</h1>)
  }
  
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Text name="Adrian" color="red"/>
      </div>
    );
  }
}

export default App;
