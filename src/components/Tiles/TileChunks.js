import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TileGroup from './TileGroup';
import Spinner from '../../icons/Spinner';
import useWindowWidth from '../../utilityFunctions/useWindowWidth';
import getUpdatedSlidesPerPosition from '../../utilityFunctions/getUpdatedSlidesPerPosition';

// from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk
const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

export default function TileChunks({ filmGroupData }) {
  const [slidesPerPosition, setSlidesPerPosition] = useState();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    getUpdatedSlidesPerPosition(windowWidth, slidesPerPosition).then(res =>
      setSlidesPerPosition(res),
    );
  }, [windowWidth, filmGroupData.length, slidesPerPosition]);

  if (slidesPerPosition) {
    const tileRows = chunk(filmGroupData, slidesPerPosition);

    const tileRowFrags = tileRows.map((row, i) => (
      <TileGroup
        key={i}
        filmGroupData={row}
        slidesPerPosition={slidesPerPosition}
      />
    ));

    return <React.Fragment>{tileRowFrags}</React.Fragment>;
  }
  return (
    <div className='flex justify-center items-center'>
      <Spinner />
    </div>
  );
}

TileChunks.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
};

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import TileGroup from './TileGroup';
// import Spinner from '../../icons/Spinner';
// import InfiniteScroller from '../InfiniteScroller';
// import useWindowWidth from '../../utilityFunctions/useWindowWidth';
// import getUpdatedSlidesPerPosition from '../../utilityFunctions/getUpdatedSlidesPerPosition';
// import usePaginatedPosts from '../../utilityFunctions/usePaginatedPosts';

// const postsPerPage = 3;

// // from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk
// const chunk = (input, size) => {
//   return input.reduce((arr, item, idx) => {
//     return idx % size === 0
//       ? [...arr, [item]]
//       : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
//   }, []);
// };

// export default function TileChunks({ filmGroupData, isLazyLoaded }) {
//   // initialize slidesPerPosition with value of 1 so that passes chunk func
//   // but it will be changed respective to the windowWidth asap
//   const [slidesPerPosition, setSlidesPerPosition] = useState(1);

//   const windowWidth = useWindowWidth();

//   useEffect(() => {
//     getUpdatedSlidesPerPosition(windowWidth, slidesPerPosition).then(res => setSlidesPerPosition(res));
//   }, [windowWidth, filmGroupData.length, slidesPerPosition]);

//   const tileRows = chunk(filmGroupData, slidesPerPosition);

//   const [currentPosts, loadMore] = usePaginatedPosts(postsPerPage, tileRows);

//   // loading state; waiting for getUpdatedSlidesPerPosition to calculate an accurate slidesPerPosition value
//   if (slidesPerPosition === 1) {
//     return (
//       <div className='flex justify-center items-center'>
//         <Spinner />
//       </div>
//     );
//   }

//   if (isLazyLoaded) {
//     const tileRowFrags = currentPosts.map((row, i) => (
//       <TileGroup
//         key={i}
//         filmGroupData={row}
//         slidesPerPosition={slidesPerPosition}
//       />
//     ));
//     return (
//       <React.Fragment>
//         <InfiniteScroller loadMore={loadMore}>{tileRowFrags}</InfiniteScroller>
//       </React.Fragment>
//     );
//   }

//   const tileRowFrags = tileRows.map((row, i) => (
//     <TileGroup
//       key={i}
//       filmGroupData={row}
//       slidesPerPosition={slidesPerPosition}
//     />
//   ));
//   return <React.Fragment>{tileRowFrags}</React.Fragment>;
// }

// TileChunks.propTypes = {
//   filmGroupData: PropTypes.array.isRequired,
//   isLazyLoaded: PropTypes.bool.isRequired,
// };
