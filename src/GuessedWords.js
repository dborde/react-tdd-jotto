import React from 'react';
import languageContext from './contexts/languageContext';
import stringsModules from './helpers/strings';
import guessedWordsContext from './contexts/guessedWordsContext';

const GuessedWords = () => {
  const [guessedWords] = guessedWordsContext.useGuessedWords();
  const language = React.useContext(languageContext);
  let contents; 
  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        {stringsModules.getStringByLanguage(language, 'guessPrompt')}
      </span>
    );
  } else {
    const guessedWordRows = guessedWords.map(word => (
      <tr data-test="guessed-word" key={word.guessedWord}>
        <td>{ word.guessedWord }</td>
        <td>{ word.letterMatchCount }</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>{stringsModules.getStringByLanguage(language, 'guessedWords')}</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>{stringsModules.getStringByLanguage(language, 'guessColumnHeader')}</th>
              <th>{stringsModules.getStringByLanguage(language, 'matchingLettersColumnHeader')}</th>
            </tr> 
          </thead>
          <tbody>
            {guessedWordRows}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  );

}

export default GuessedWords;
