import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
// import Input from './Input';
import './App.css';
import hookActions from './actions/hookActions';

/**
 * reducer to update state, called automatically by dispatch
 * @param {object} existing state 
 * @param {object} - action constains 'type' and 'payload' properties for the state upda
 *                   for example: { type: "setSecretWord", payload: "party" }
 * @returns {object}  -new state
 */
function reducer(state, action) {
  switch (action.type) {
    case "SET_SECRET_WORD":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type : ${action.type}`);
  }
  
}

function App() {
  // not destructuring useReducer on import for testing purposes
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null }
  )

  const setSecretWord = (secretWord) =>
    dispatch({ type: "SET_SECRET_WORD", payload: secretWord });

  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  )
  
  return (
    <div className="container" data-test="component-app">     
      <h1>Jotto</h1> 
      <Congrats success={false}/>
      <GuessedWords guessedWords={[]}/>
    </div>
  );
}

export default App;
