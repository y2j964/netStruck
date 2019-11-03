import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const tabListDataTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
});
