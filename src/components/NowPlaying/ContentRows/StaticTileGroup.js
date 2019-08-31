import React from 'react';
import PropTypes from 'prop-types';
import StaticTile from './StaticTile';

export default function StaticTileGroup({ filmList }) {
  const tileFrags = filmList.map(film => (
    <StaticTile
      title={film.title}
      img={film.img}
      isAddedToMyList={film.isAddedToMyList}
      slug={film.slug}
      id={film.id}
      key={film.id}
    />
  ));
  return (
    <ul className='p-10 mb-10 max-w-80 flex mx-auto flex-wrap'>{tileFrags}</ul>
  );
}

StaticTileGroup.propTypes = {
  filmList: PropTypes.array.isRequired,
};
