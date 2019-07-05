import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MasterComponent from './Components/master-component'

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server.
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stock Options Analysis</h1>
        </header>
        <MasterComponent className="App-body">{this.state.data}</MasterComponent>
      </div>
    );
  }
}

export default App;
