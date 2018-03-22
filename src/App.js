import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={status: {}};
  }

  componentDidMount() {
    fetch('http://raspberrypi:3000/status')
    .then(function(response) { 
      // Convert to JSON
      console.log(response);
      return response.json();
    })
    .then(status => { 
      this.setState({ status });
      console.log(status);
    });
  }

  render() {
    var status = Object.assign({}, this.state.status);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sown App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {Object.keys(nameObj).map((index) => (
          <div>{status[index].status}</div>
        ))}
        <div>{this.state.status}</div>
      </div>
    );
  }

}

export default App;