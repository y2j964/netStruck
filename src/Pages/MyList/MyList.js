import React, { useEffect } from 'react';
import { useNetStruckDataState } from '../../context';
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
              />
            </InfiniteScroller>
          </div>
        )}
      />
    </main>
  );
}

// import React, { useState, useEffect } from 'react';
// import { useNetStruckDataState } from '../../context';
// import EmptyList from './EmptyList';
// import TileChunks from '../../components/Tiles/TileChunks';
// import InfiniteScroller from '../../components/InfiniteScroller';
// import WithEmpty from '../../components/WithEmpty';
// import useWindowWidth from '../../utilityFunctions/useWindowWidth';
// import usePagination from '../../utilityFunctions/usePagination';
// import getUpdatedtilesPerPosition from '../../utilityFunctions/getUpdatedtilesPerPosition';

// const postsPerPageMinimum = 6;

// export default function MyList() {
//   useEffect(() => {
//     document.title = 'My List - NetStruck';
//   }, []);

//   const { state } = useNetStruckDataState();
//   const { myList } = state;

//   const myListLength = myList.length;

//   const windowWidth = useWindowWidth();
//   // for pagination to be responsive, we need window width and tilesPerPosition
//   const [tilesPerPosition, settilesPerPosition] = useState();

//   // when windowWidth changes, update tilesPerPosition
//   useEffect(() => {
//     getUpdatedtilesPerPosition(windowWidth, tilesPerPosition).then(res =>
//       settilesPerPosition(res),
//     );
//   }, [windowWidth, tilesPerPosition]);

//   // take the postsPerPageMinimum if the latter value is too paltry
//   const postsPerPage = Math.max(postsPerPageMinimum, tilesPerPosition * 2);
//   // break up filtered films into tranches via pagination
//   const [currentPosts, loadMore] = usePagination(postsPerPage, myList);

//   return (
//     <main>
//       <header className='text-center mt-2 md:mt-8'>
//         <h1 className='text-white text-3xl'>My List</h1>
//       </header>
//       {myListLength === 0 ? (
//         <EmptyList />
//       ) : (
//         <div className='px-10 pt-8 md:pt-10 pb-4 overflow-x-hidden'>
//           <InfiniteScroller loadMore={loadMore}>
//             <TileChunks
//               filmGroupData={currentPosts}
//               tilesPerPosition={tilesPerPosition}
//             />
//           </InfiniteScroller>
//         </div>
//       )}
//     </main>
//   );
// }
