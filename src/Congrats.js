import React from 'react';

import successContext from './contexts/successContext';
import languageContext from './contexts/languageContext';
import stringsModules from './helpers/strings';

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Renderd component (or null if `success` prop is false).
 */
const Congrats = () => {
  const [success] = successContext.useSuccess();
  const language = React.useContext(languageContext);
  return (
    <div data-test="component-congrats" className="alert alert-success">
      {success && (
        <span data-test="congrats-message">
          {stringsModules.getStringByLanguage(language, 'congrats')}
        </span>
      )}
    </div>    
  )
}

export default Congrats;
