import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={status: false};
  }
  timer() {
    fetch('http://localhost:5000/status')
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
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    var statusObj = Object.assign({}, this.state.status);
    console.log(statusObj.status);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sown App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{statusObj.status}</div>
      </div>
    );
  }

}

export default App;