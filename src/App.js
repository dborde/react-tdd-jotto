import React from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Congrats success={true}/>
      <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}/>
    </div>
  );
}

export default App;
