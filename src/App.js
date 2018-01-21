import React, { Component } from 'react';
import Navbar from './Views/navbar.js';
import './Views/css/app.css';
import Main from './Main.js'


class App extends Component {

  componentWillMount(){
    fetch("http://localhost:8090", {mode: 'cors', credentials: 'include'}).then(response => response.json()).then(responseBody => console.log(responseBody));
  }

  render() {
    document.body.style = 'background: #e7dfdd;';

    return (
      <div className="App">
        <Navbar></Navbar>

        <Main />

      </div>
    );
  }
}
App.defaultProps = {
   name: "fundz"
}

export default App;
