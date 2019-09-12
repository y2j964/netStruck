import React, { useEffect } from 'react';
import { useFilmValues } from '../../context';
import EmptyList from './EmptyList';
import StaticTileGroup from '../../components/Tiles/StaticTileGroup';
// import Spinner from '../../icons/Spinner';

export default function MyList() {
  useEffect(() => {
    document.title = 'My List - NetStruck';
  }, []);

  const { state } = useFilmValues();
  const { myList } = state;
  const myListLength = myList.length;

  return (
    <main>
      <header className='text-center pb-8 pt-2 md:pt-8'>
        <h1 className='text-white text-3xl'>MyList</h1>
      </header>
      {myListLength === 0 ? (
        <EmptyList />
      ) : (
        <div className='p-10 mb-10 max-w-80 mx-auto'>
          <StaticTileGroup filmList={myList} />
        </div>
      )}
    </main>
  );
}
