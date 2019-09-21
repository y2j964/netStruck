import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

const getPlacementInViewport = (index, slidesPerPosition) => {
  if (index % slidesPerPosition === 0) {
    return 'leftEdge';
  }
  if (index % slidesPerPosition === slidesPerPosition - 1) {
    return 'rightEdge';
  }
  return 'middle';
};

export default function TileGroup({ filmGroupData, slidesPerPosition }) {
  const [leftEdgeIsHovered, setLeftEdgeIsHovered] = useState(false);
  const [rightEdgeIsHovered, setRightEdgeIsHovered] = useState(false);
  const [middleHoveredIndex, setMiddleHoveredIndex] = useState();

    const tileFrags = filmGroupData.map((film, index) => (
          <Tile
            {...film}
            key={film.id}
            index={index}
            placementInViewport={getPlacementInViewport(
              index,
              slidesPerPosition,
            )}
            leftEdgeIsHovered={leftEdgeIsHovered}
            handleLeftEdgeIsHovered={setLeftEdgeIsHovered}
            rightEdgeIsHovered={rightEdgeIsHovered}
            handleRightEdgeIsHovered={setRightEdgeIsHovered}
            middleHoveredIndex={middleHoveredIndex}
            handleMiddleHoveredIndex={setMiddleHoveredIndex}
          />
          ))

  return  <ul className='tile-group mb-12'>{tileFrags}</ul>
}

TileGroup.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
  slidesPerPosition: PropTypes.number.isRequired,
};

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Tile from './Tile';
// import Spinner from '../../icons/Spinner';
// import useWindowWidth from '../../utilityFunctions/useWindowWidth';

// // from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk
// const chunk = (input, size) => {
//   return input.reduce((arr, item, idx) => {
//     return idx % size === 0
//       ? [...arr, [item]]
//       : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
//   }, []);
// };

// const mediaBreakpoints = {
//   sm: 500,
//   md: 800,
//   lg: 1100,
//   xl: 1400,
// };

// const resizeWindow = (windowWidth, slidesPerPosition, callback) => {
//   // console.log('resize');
//   switch (true) {
//     case windowWidth < mediaBreakpoints.sm && slidesPerPosition !== 2: {
//       const updatedSlidesPerPosition = 2;
//       callback(updatedSlidesPerPosition);
//       break;
//     }
//     case windowWidth > mediaBreakpoints.sm &&
//       windowWidth < mediaBreakpoints.md &&
//       slidesPerPosition !== 3: {
//       const updatedSlidesPerPosition = 3;
//       callback(updatedSlidesPerPosition);
//       break;
//     }
//     case windowWidth > mediaBreakpoints.md &&
//       windowWidth < mediaBreakpoints.lg &&
//       slidesPerPosition !== 4: {
//       const updatedSlidesPerPosition = 4;
//       callback(updatedSlidesPerPosition);
//       break;
//     }
//     case windowWidth > mediaBreakpoints.lg &&
//       windowWidth < mediaBreakpoints.xl &&
//       slidesPerPosition !== 5: {
//       const updatedSlidesPerPosition = 5;
//       callback(updatedSlidesPerPosition);
//       break;
//     }
//     case windowWidth > mediaBreakpoints.xl && slidesPerPosition !== 6: {
//       const updatedSlidesPerPosition = 6;
//       callback(updatedSlidesPerPosition);
//       break;
//     }
//     default:
//   }
// };

// const getPlacementInViewport = (index, slidesPerPosition) => {
//   if (index % slidesPerPosition === 0) {
//     return 'leftEdge';
//   }
//   if (index % slidesPerPosition === slidesPerPosition - 1) {
//     return 'rightEdge';
//   }
//   return 'middle';
// };

// export default function StaticTileGroup({ filmList }) {
//   const [slidesPerPosition, setSlidesPerPosition] = useState();
//   const [leftEdgeIsHovered, setLeftEdgeIsHovered] = useState(false);
//   const [rightEdgeIsHovered, setRightEdgeIsHovered] = useState(false);
//   const [middleHoveredIndex, setMiddleHoveredIndex] = useState();

//   const windowWidth = useWindowWidth();

//   useEffect(() => {
//     resizeWindow(windowWidth, slidesPerPosition, setSlidesPerPosition);
//   }, [windowWidth, filmList.length, slidesPerPosition]);

//   if (slidesPerPosition) {
//     const tileRows = chunk(filmList, slidesPerPosition);

//     // rows
//       // ul  needs to be tGroup for isHoveredLogic
//     // films that make up rows
//     const tileRowFrags = tileRows.map((row, i) => (
//       <ul className='tile-group mb-12' key={i}>
//         {row.map((film, index) => (
//           <Tile
//             {...film}
//             key={film.id}
//             index={index}
//             placementInViewport={getPlacementInViewport(
//               index,
//               slidesPerPosition,
//             )}
//             leftEdgeIsHovered={leftEdgeIsHovered}
//             handleLeftEdgeIsHovered={setLeftEdgeIsHovered}
//             rightEdgeIsHovered={rightEdgeIsHovered}
//             handleRightEdgeIsHovered={setRightEdgeIsHovered}
//             middleHoveredIndex={middleHoveredIndex}
//             handleMiddleHoveredIndex={setMiddleHoveredIndex}
//           />
//         ))}
//       </ul>
//     ));

//     return <React.Fragment>{tileRowFrags}</React.Fragment>;
//   }
//   return (
//     <div className='flex justify-center items-center'>
//       <Spinner />
//     </div>
//   );
// }

// StaticTileGroup.propTypes = {
//   filmList: PropTypes.array.isRequired,
// };