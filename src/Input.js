import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  // not destructuring useState in import above so that we can mock it.
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          // TODO: update guessedWords context.
          // Check against secret word and optionally update success context
          data-test="submit-button"
          onClick={(e) => {
            e.preventDefault();
            // clear input box
            setCurrentGuess('');
          }}
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    </div>    
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input;
