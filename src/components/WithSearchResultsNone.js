import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsNone from './SearchResultsNone';

export default function WithSearchResultsNone({ totalResults, render }) {
  return !totalResults ? <SearchResultsNone /> : render();
}

WithSearchResultsNone.propTypes = {
  totalResults: PropTypes.number,
  render: PropTypes.func,
};
