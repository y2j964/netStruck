import React from 'react';
import StaticTile from './StaticTile';

export default function StaticTileGroup({ filmsOfSameGenre }) {
  const tileFrags = filmsOfSameGenre.map(film => (
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
