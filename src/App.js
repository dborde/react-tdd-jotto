// TODO: check if destructuring these hooks really does create test problems
import React from 'react';
import './App.css';
import hookActions from './actions/hookActions';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';
import guessedWordsContext from './contexts/guessedWordsContext'

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import LanguagePicker from './LanguagePicker';

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
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type : ${action.type}`);
  } 
}

function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null, language: 'en' }
  )

  const setSecretWord = (secretWord) =>
    dispatch({ type: "SET_SECRET_WORD", payload: secretWord });

  const setLanguage = (language) =>
    dispatch({ type: "SET_LANGUAGE", payload: language });

  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  )

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <guessedWordsContext.GuessedWordsProvider>
          <successContext.SuccessProvider>
            <Congrats />
            <Input secretWord={state.secretWord} />
          </successContext.SuccessProvider>
          <GuessedWords />
        </guessedWordsContext.GuessedWordsProvider>
      </languageContext.Provider>
    </div>
  );
}

export default App;
