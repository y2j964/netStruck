import React from 'react';
import PropTypes from 'prop-types';
import WithSearchInputPrompt from '../WithSearchInputPrompt';
import WithLoadingIndicator from '../WithLoadingIndicator';
import WithEmpty from '../WithEmpty';
import SearchResultsNone from './SearchResultsNone';
import SearchLoadingText from './SearchLoadingText';

function SearchResultsRenderer({
  debouncedInputValue,
  isLoading,
  totalResults,
  children,
}) {
  return (
    // order is important
    <WithSearchInputPrompt
      debouncedInputValue={debouncedInputValue}
      render={() => (
        <WithLoadingIndicator
          isLoading={isLoading}
          Component={SearchLoadingText}
          render={() => (
            <WithEmpty
              length={totalResults}
              Component={SearchResultsNone}
              render={() => children}
            />
          )}
        />
      )}
    />
  );
}

export default SearchResultsRenderer;

SearchResultsRenderer.propTypes = {
  debouncedInputValue: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  totalResults: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
