import React from 'react';
import PropTypes from 'prop-types';

import languageContext from './contexts/languageContext';
import stringsModules from './helpers/strings';
// import { getLetterMatchCount } from './helpers';

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={stringsModules.getStringByLanguage(language, 'guessInputPlaceholder')}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          // TODO: update guessedWords context.
          // Check against secret word and optionally update success context
          data-test="submit-button"
          onClick={(e) => {
            e.preventDefault();
            if (currentGuess === secretWord) {
              setSuccess(true);
            }
            // clear input box
            setCurrentGuess('');
          }}
          className="btn btn-primary mb-2"
        >
          {stringsModules.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>    
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input;
