import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props -React props.
 * @returns {JSX.Element} - Renderd component (or null if `success` prop is false).
 */
const Congrats = (props) => {
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

// Congrats.defaultProps = {
//   success: false
// };

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;
