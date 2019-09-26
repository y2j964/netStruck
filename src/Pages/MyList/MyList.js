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
      <header className='text-center pb-8 mt-2 md:mt-8'>
        <h1 className='text-white text-3xl'>MyList</h1>
      </header>
      {myListLength === 0 ? (
        <EmptyList />
      ) : (
        <div className='p-10 mb-10 overflow-x-hidden'>
          <TileChunks filmGroupData={myList} />
        </div>
      )}
    </main>
  );
}
// import React, { useEffect } from 'react';
// import { TransitionGroup } from 'react-transition-group';
// import { useNetStruckDataState } from '../../context';
// import EmptyList from './EmptyList';
// import TileChunks from '../../components/Tiles/TileChunks';

// export default function MyList() {
//   useEffect(() => {
//     document.title = 'My List - NetStruck';
//   }, []);

//   const { state } = useNetStruckDataState();
//   const { myList } = state;
//   const myListLength = myList.length;

//   return (
//     <main>
//       <header className='text-center pb-8 mt-2 md:mt-8'>
//         <h1 className='text-white text-3xl'>MyList</h1>
//       </header>
//       {myListLength === 0 ? (
//         <EmptyList />
//       ) : (
//         <div className='p-10 mb-10 overflow-x-hidden'>
//           <TransitionGroup component={null}>
//             <TileChunks filmGroupData={myList} />
//           </TransitionGroup>
//         </div>
//       )}
//     </main>
//   );
// }
