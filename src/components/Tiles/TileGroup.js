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
      placementInViewport={getPlacementInViewport(index, slidesPerPosition)}
      leftEdgeIsHovered={leftEdgeIsHovered}
      handleLeftEdgeIsHovered={setLeftEdgeIsHovered}
      rightEdgeIsHovered={rightEdgeIsHovered}
      handleRightEdgeIsHovered={setRightEdgeIsHovered}
      middleHoveredIndex={middleHoveredIndex}
      handleMiddleHoveredIndex={setMiddleHoveredIndex}
    />
  ));

  return <ul className='tile-group'>{tileFrags}</ul>;
}

TileGroup.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
  slidesPerPosition: PropTypes.number.isRequired,
};
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Tile from './Tile';

// const getPlacementInViewport = (index, slidesPerPosition) => {
//   if (index % slidesPerPosition === 0) {
//     return 'leftEdge';
//   }
//   if (index % slidesPerPosition === slidesPerPosition - 1) {
//     return 'rightEdge';
//   }
//   return 'middle';
// };

// const timeout = 200;

// export default function TileGroup({
//   filmGroupData,
//   slidesPerPosition,
//   tileIsUnmountedOnRemove,
//   tileIsAnimatedOnMount,
// }) {
//   const [leftEdgeIsHovered, setLeftEdgeIsHovered] = useState(false);
//   const [rightEdgeIsHovered, setRightEdgeIsHovered] = useState(false);
//   const [middleHoveredIndex, setMiddleHoveredIndex] = useState();

//   const tileFrags = !tileIsAnimatedOnMount
//     ? filmGroupData.map((film, index) => (
//         <Tile
//           {...film}
//           key={film.id}
//           index={index}
//           placementInViewport={getPlacementInViewport(index, slidesPerPosition)}
//           leftEdgeIsHovered={leftEdgeIsHovered}
//           handleLeftEdgeIsHovered={setLeftEdgeIsHovered}
//           rightEdgeIsHovered={rightEdgeIsHovered}
//           handleRightEdgeIsHovered={setRightEdgeIsHovered}
//           middleHoveredIndex={middleHoveredIndex}
//           handleMiddleHoveredIndex={setMiddleHoveredIndex}
//           tileIsUnmountedOnRemove={tileIsUnmountedOnRemove}
//         />
//       ))
//     : filmGroupData.map((film, index) => (
//         <CSSTransition
//           timeout={timeout + index * 100}
//           classNames='myList-tile'
//           key={film.id}
//         >
//           <Tile
//             {...film}
//             index={index}
//             style={{ animationDelay: `${timeout + index * 100}ms` }}
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
//             tileIsUnmountedOnRemove={tileIsUnmountedOnRemove}
//           />
//         </CSSTransition>
//       ));

//   return (
//     <TransitionGroup component={null}>
//       <ul className='tile-group mb-12'>{tileFrags}</ul>
//     </TransitionGroup>
//   );
// }

// TileGroup.propTypes = {
//   filmGroupData: PropTypes.array.isRequired,
//   slidesPerPosition: PropTypes.number.isRequired,
//   tileIsUnmountedOnRemove: PropTypes.bool.isRequired,
//   tileIsAnimatedOnMount: PropTypes.bool.isRequired,
// };
