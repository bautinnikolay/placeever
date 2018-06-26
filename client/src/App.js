import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Placeever</h1>
          <div className="user-bar">
            <div id="uLogin" data-ulogin="display=panel;theme=classic;fields=first_name,last_name;providers=vkontakte,facebook,google,yandex,twitter;hidden=;redirect_uri=http%3A%2F%2F;mobilebuttons=0;"></div>
          </div>
        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
