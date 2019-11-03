import PropTypes from 'prop-types';

export const imgType = PropTypes.shape({
  webp400: PropTypes.string,
  webp640: PropTypes.string,
  webp800: PropTypes.string,
  webp1024: PropTypes.string,
  webp1200: PropTypes.string,
  webp1366: PropTypes.string,
  webp1600: PropTypes.string,
  webp1920: PropTypes.string,
  jpg400: PropTypes.string,
  jpg640: PropTypes.string,
  jpg800: PropTypes.string,
  jpg1024: PropTypes.string,
  jpg1200: PropTypes.string,
  jpg1366: PropTypes.string,
  jpg1600: PropTypes.string,
  jpg1920: PropTypes.string,
});

export const imgTypeMini = PropTypes.shape({
  webp400: PropTypes.string,
  jpg400: PropTypes.string,
});

export const netStruckDataTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  director: PropTypes.string,
  actors: PropTypes.arrayOf(PropTypes.string),
  img: imgType,
  alt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  isAddedToMyList: PropTypes.bool.isRequired,
});
