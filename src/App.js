import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="user">
            Hello ohez!
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Spice Hours</h1>
          <p className="description">Reprot your spice hours contributions!</p>
          <div>
          <form>
            <label>
              Title or Link
              <input></input>
         </label>
         <label>
           Duration <input></input>
         </label>
         <label>
           Description <textarea></textarea>
         </label>
           <button>send</button>
          </form>
          </div>
        </header>
        <p className="App-intro">
          All reported spice hour contributions
        </p>
      </div>
    );
  }
}

export default App;
