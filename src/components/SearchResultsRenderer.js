import React from 'react';
import PropTypes from 'prop-types';
import WithSearchInputPrompt from './WithSearchInputPrompt';
import WithLoadingIndicator from './WithLoadingIndicator';
import WithSearchResultsNone from './WithSearchResultsNone';
import SearchResults from './SearchResults';
import SearchLoadingText from './SearchLoadingText';

function SearchResultsRenderer({
  filteredFilms,
  debouncedInputValue,
  loadMore,
  isLoading,
  totalResults,
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
            <WithSearchResultsNone
              totalResults={totalResults}
              render={() => (
                <SearchResults
                  totalResults={totalResults}
                  filteredFilms={filteredFilms}
                  loadMore={loadMore}
                />
              )}
            />
          )}
        />
      )}
    />
  );
}

export default SearchResultsRenderer;

SearchResultsRenderer.propTypes = {
  filteredFilms: PropTypes.array,
  debouncedInputValue: PropTypes.string,
  loadMore: PropTypes.func,
  totalResults: PropTypes.number,
  isLoading: PropTypes.bool,
};
