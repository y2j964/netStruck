import React, { useEffect, useState } from 'react';
import { useFilmValues } from '../../context';
import EmptyList from './EmptyList';
import TileGroups from '../../components/Tiles/TileGroups';

export default function MyList() {
  useEffect(() => {
    document.title = 'My List - NetStruck';
  }, []);

  const { state } = useFilmValues();
  const { myList } = state;
  const myListLength = myList.length;

  // const [filmRemoved, setFilmRemoved] = useState(false);
  // useEffect(() => {

  // }, [myList])

  return (
    <main>
      <header className='text-center pb-8 mt-2 md:mt-8'>
        <h1 className='text-white text-3xl'>MyList</h1>
      </header>
      {myListLength === 0 ? (
        <EmptyList />
      ) : (
        <div className='p-10 mb-10 overflow-x-hidden'>
          <TileGroups filmGroupData={myList} />
        </div>
      )}
    </main>
  );
}
