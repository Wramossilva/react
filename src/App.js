import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter'

function App(props) {
  const name = props.name || 'Will';

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name="Noob saibot" />
        <Hello name="Sub-zero" />
        <Hello name="Frost" />
        <Hello name="Erron black"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter />
    </div>
  );
}

export default App;
