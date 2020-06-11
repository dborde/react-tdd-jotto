import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container" data-test="component-app">     
        <h1>Jotto</h1>  
        <Congrats success={false}/>
        <GuessedWords guessedWords={[]}/>
        <Input />
      </div>
    );
  }
}

export default App;
