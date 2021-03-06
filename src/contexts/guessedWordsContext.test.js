import React from 'react';
import { shallow } from 'enzyme';


import guessedWordsContext from './GuessedWordsContext';

// a functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
  guessedWordsContext.useGuessedWords();
  return <div />;
}

test('useGuessedWords throws error when not wrapped in GuessedWordsProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow('useGuessedWords must be used within a GuessedWordsProvider');
});

test('useGuessedWords does not throw error when wrapped in GuessedWordsProvider', () => {
  expect(() => {
    shallow(
      <guessedWordsContext.GuessedWordsProvider>
        <FunctionalComponent />
      </guessedWordsContext.GuessedWordsProvider>
    );
  }).not.toThrow();
});
