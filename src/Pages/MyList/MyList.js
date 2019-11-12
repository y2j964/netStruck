import React, { useEffect } from 'react';
import { useNetStruckDataState } from '../../NetStruckDataContext';
import EmptyList from './EmptyList';
import TileChunks from '../../components/Tiles/TileChunks';
import InfiniteScroller from '../../components/InfiniteScroller';
import WithEmpty from '../../components/WithEmpty';
import useResponsivePagination from '../../utilityFunctions/useResponsivePagination';

const postsPerPageMinimum = 6;

export default function MyList() {
  useEffect(() => {
    document.title = 'My List - NetStruck';
  }, []);

  const { state } = useNetStruckDataState();
  const { myList } = state;

  const myListLength = myList.length;

  const { currentPosts, loadMore, itemsPerPosition } = useResponsivePagination(
    postsPerPageMinimum,
    myList,
  );

  return (
    <main>
      <header className='text-center mt-2 md:mt-8'>
        <h1 className='text-white text-3xl'>My List</h1>
      </header>
      <WithEmpty
        length={myListLength}
        Component={EmptyList}
        render={() => (
          <div className='px-10 pt-8 md:pt-10 pb-4 overflow-x-hidden'>
            <InfiniteScroller loadMore={loadMore}>
              <TileChunks
                filmGroupData={currentPosts}
                tilesPerPosition={itemsPerPosition}
                isUnmountable={true}
              />
            </InfiniteScroller>
          </div>
        )}
      />
    </main>
  );
}
