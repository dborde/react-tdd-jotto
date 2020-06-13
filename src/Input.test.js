import React from 'react';
import { mount } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Input from './Input';
import languageContext from './contexts/languageContext';

/**
 * Create a ReactWrapper for Input component for testing.
 * @function setup
 * @param {object} Contect and props specific to this specific test.
 * @returns {MountWrapper}
 */
const setup = ({ secretWord, language }) => {
  // TODO put these defaults in args
  language = language || 'en';
  secretWord = secretWord || 'party';

  return mount(
    <languageContext.Provider value={language}>
      <Input secretWord={secretWord} />
    </languageContext.Provider>  
  );
}

test('Input renders without error', () => {
  const wrapper = setup({});
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    // according to Bonnie, cannot destructure useState on import for mocks 
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({});
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };
    submitButton.simulate("click", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});

describe('languagePicker', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({ language: 'en' });
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('Submit');
  });
  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ language: 'emoji' });
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('🚀');
  });
});

