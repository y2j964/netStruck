import PropTypes from 'prop-types';

export const imgType = PropTypes.shape({
  webp400: PropTypes.string,
  webp640: PropTypes.string,
  webp800: PropTypes.string,
  webp1024: PropTypes.string,
  webp1200: PropTypes.string,
  jpg400: PropTypes.string,
  jpg640: PropTypes.string,
  jpg800: PropTypes.string,
  jpg1200: PropTypes.string,
});

export const filmDataType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: imgType,
  enterFrom: PropTypes.oneOf(['', 'left', 'right']),
  exitTo: PropTypes.oneOf(['', 'left', 'right']),
});
