import React from 'react';

/**
 * Functional react component for congradulatory message.
 * @function
 * @param {object} props -React props.
 * @returns {JSX.Element} - Renderd component (or null if `success` prop is false).
 */
export default (props) => {
  return (
    <div data-test="component-congrats">
      {props.success && (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      )}
    </div>    
  )
}