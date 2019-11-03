import React from 'react';
import PropTypes from 'prop-types';
import SearchInputPrompt from './SearchFilter/SearchInputPrompt';

export default function WithSearchInputPrompt({ debouncedInputValue, render }) {
  return !debouncedInputValue ? <SearchInputPrompt /> : render();
}

WithSearchInputPrompt.propTypes = {
  debouncedInputValue: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};
