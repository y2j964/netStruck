import React, { useEffect, useRef } from 'react';
import { useNetStruckDataState } from '../../NetStruckDataContext';
import EmptyList from '../../components/EmptyList';
import TileChunks from '../../components/Tiles/TileChunks';
import InfiniteScroller from '../../components/InfiniteScroller';
import WithEmpty from '../../components/WithEmpty';
import useResponsivePagination from '../../utilityFunctions/useResponsivePagination';

const postsPerPageMinimum = 6;

export default function MyList() {
  const ref = useRef();
  useEffect(() => {
    document.title = 'My List - NetStruck';
    // focus h1 on route change to let screen reader know we changed route
    ref.current.focus();
  }, []);

  const { state } = useNetStruckDataState();
  const { myList } = state;

  const myListLength = myList.length;

  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   // if (myListLength) {
  //   //   body.style.overflowY = 'scroll';
  //   //   return () => {
  //   //     body.style.removeProperty('overflow-y');
  //   //   };
  //   // }

  //   // if empty, add marginRight so there is no scrollbar jump
  //   // const documentWidth = document.documentElement.clientWidth;
  //   // const windowWidth = window.innerWidth;
  //   // const scrollBarWidth = windowWidth - documentWidth;
  //   // console.log(documentWidth, windowWidth);

  //   body.style.width = '100vw';
  //   body.style.overflowX = 'hidden';
  //   return () => {
  //     body.style.removeProperty('width');
  //     // body.style.removeProperty('padding-left');
  //     body.style.removeProperty('overflow-x');
  //   };
  // }, [myListLength]);

  const { currentPosts, loadMore, itemsPerPosition } = useResponsivePagination(
    postsPerPageMinimum,
    myList
  );

  return (
    <main id="myList">
      <header className="text-center mt-2 md:mt-8">
        <h1 className="text-white text-3xl" tabIndex="-1" ref={ref}>
          My List
        </h1>
      </header>
      <WithEmpty
        length={myListLength}
        Component={EmptyList}
        render={() => (
          <div className="px-10 pt-8 md:pt-10 pb-4 overflow-x-hidden">
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
