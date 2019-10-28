import PropTypes from 'prop-types';

function WithHasMore({ hasMore, render }) {
  return !hasMore ? null : render();
}

WithHasMore.propTypes = {
  hasMore: PropTypes.bool,
  render: PropTypes.func,
};

export default WithHasMore;
