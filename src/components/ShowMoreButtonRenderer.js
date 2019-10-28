import React from 'react';
import PropTypes from 'prop-types';
import WithLoadingIndicator from './WithLoadingIndicator';
import WithHasMore from './WithHasMore';

function ShowMoreButtonRenderer({ isLoadingMore, hasMore, children }) {
  return (
    <WithLoadingIndicator
      isLoading={isLoadingMore}
      render={() => <WithHasMore hasMore={hasMore} render={() => children} />}
    />
  );
}

ShowMoreButtonRenderer.propTypes = {
  isLoadingMore: PropTypes.bool,
  hasMore: PropTypes.bool,
  render: PropTypes.func,
  children: PropTypes.node,
};

export default ShowMoreButtonRenderer;
