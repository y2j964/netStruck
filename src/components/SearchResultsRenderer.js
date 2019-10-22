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

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import TileChunks from './Tiles/TileChunks';
// import BtnPrimary from './BtnPrimary/BtnPrimary';
// import Spinner from '../icons/Spinner';

// export default function SearchResults({
//   filteredFilms,
//   debouncedInputValue,
//   loadMore,
//   totalResults,
// }) {
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(false);
//   }, [filteredFilms]);

//   const handleClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       loadMore();
//     }, 500);
//   };

//   if (!debouncedInputValue) {
//     return (
//       <div className='search-filter__results'>
//         <p className='light-gray text-center font-bold'>
//           Start typing to see results
//         </p>
//       </div>
//     );
//   }

//   if (debouncedInputValue && !totalResults) {
//     return (
//       <div className='search-filter__results'>
//         <p className='light-gray text-center font-bold'>
//           Can't find anything matching those terms. Try something else.
//         </p>
//       </div>
//     );
//   }
//   return (
//     <div className='search-filter__results' aria-live='polite'>
//       <h3 className='text-white text-center text-2xl uppercase font-bold light-gray mb-8'>
//         {totalResults} Results
//       </h3>
//       <TileChunks filmGroupData={filteredFilms} />
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <div className='text-center'>
//           <BtnPrimary handleClick={handleClick} additionalClasses='mb-12'>
//             Show More
//           </BtnPrimary>
//         </div>
//       )}
//     </div>
//   );
// }

// SearchResults.propTypes = {
//   filteredFilms: PropTypes.array,
//   debouncedInputValue: PropTypes.string,
//   loadMore: PropTypes.func,
//   totalResults: PropTypes.number,
// };
