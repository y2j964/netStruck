import React from 'react';
import PropTypes from 'prop-types';
import SearchFilterTrigger from '../SearchFilterTrigger/SearchFilterTrigger';
import SortDirectionToggle from '../SortDirectionToggle/SortDirectionToggle';

export default function FilmTableViewOptions({
  filmDataLength,
  sortIsAscending,
  selectCustom,
  toggleSortDirection,
}) {
  return (
    <div className="all-films">
      <div className="all-films__intro">
        <h2 className="text-3xl text-white text-center md:text-left">
          All Films
        </h2>
        <span className="hidden md:block text-white">
          {filmDataLength} Results
        </span>
      </div>
      <div className="all-films__filter-options">
        <SearchFilterTrigger />
        {selectCustom}
      </div>
      <div className="all-films__sorting-direction">
        <span className="md:hidden text-white">{filmDataLength} Results</span>
        <SortDirectionToggle
          controls="filmTable"
          sortIsAscending={sortIsAscending}
          handleClick={toggleSortDirection}
        />
      </div>
    </div>
  );
}

FilmTableViewOptions.propTypes = {
  filmDataLength: PropTypes.number.isRequired,
  sortIsAscending: PropTypes.bool.isRequired,
  toggleSortDirection: PropTypes.func.isRequired,
  selectCustom: PropTypes.element.isRequired,
};
