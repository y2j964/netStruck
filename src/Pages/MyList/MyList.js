import React, { useEffect } from 'react';
import { useNetStruckDataState } from '../../context';
import EmptyList from './EmptyList';
import TileChunks from '../../components/Tiles/TileChunks';

export default function MyList() {
  useEffect(() => {
    document.title = 'My List - NetStruck';
  }, []);

  const { state } = useNetStruckDataState();
  const { myList } = state;

  const myListLength = myList.length;

  return (
    <main>
      <header className='text-center pb-3 mt-2 md:mt-8'>
        <h1 className='text-white text-3xl'>My List</h1>
      </header>
      {myListLength === 0 ? (
        <EmptyList />
      ) : (
        <div className='px-10 pt-10 pb-4 overflow-x-hidden'>
          <TileChunks filmGroupData={myList} isLazyLoaded />
        </div>
      )}
    </main>
  );
}
