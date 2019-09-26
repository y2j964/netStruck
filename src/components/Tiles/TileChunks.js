import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TileGroup from './TileGroup';
import Spinner from '../../icons/Spinner';
import useWindowWidth from '../../utilityFunctions/useWindowWidth';
import mediaBreakpoints from '../../mediaBreakpoints';

// from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk
const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

const resizeWindow = (windowWidth, slidesPerPosition, callback) => {
  // console.log('resize');
  switch (true) {
    case windowWidth < mediaBreakpoints.sm && slidesPerPosition !== 2: {
      const updatedSlidesPerPosition = 2;
      callback(updatedSlidesPerPosition);
      break;
    }
    case windowWidth > mediaBreakpoints.sm &&
      windowWidth < mediaBreakpoints.md &&
      slidesPerPosition !== 3: {
      const updatedSlidesPerPosition = 3;
      callback(updatedSlidesPerPosition);
      break;
    }
    case windowWidth > mediaBreakpoints.md &&
      windowWidth < mediaBreakpoints.lg &&
      slidesPerPosition !== 4: {
      const updatedSlidesPerPosition = 4;
      callback(updatedSlidesPerPosition);
      break;
    }
    case windowWidth > mediaBreakpoints.lg &&
      windowWidth < mediaBreakpoints.xl &&
      slidesPerPosition !== 5: {
      const updatedSlidesPerPosition = 5;
      callback(updatedSlidesPerPosition);
      break;
    }
    case windowWidth > mediaBreakpoints.xl && slidesPerPosition !== 6: {
      const updatedSlidesPerPosition = 6;
      callback(updatedSlidesPerPosition);
      break;
    }
    default:
  }
};

export default function TileChunks({ filmGroupData }) {
  const [slidesPerPosition, setSlidesPerPosition] = useState();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    resizeWindow(windowWidth, slidesPerPosition, setSlidesPerPosition);
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
// import useWindowWidth from '../../utilityFunctions/useWindowWidth';
// import mediaBreakpoints from '../../mediaBreakpoints';

// // from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk
// const chunk = (input, size) => {
//   return input.reduce((arr, item, idx) => {
//     return idx % size === 0
//       ? [...arr, [item]]
//       : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
//   }, []);
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

// export default function TileChunks({ filmGroupData }) {
//   const [slidesPerPosition, setSlidesPerPosition] = useState();

//   const windowWidth = useWindowWidth();

//   useEffect(() => {
//     resizeWindow(windowWidth, slidesPerPosition, setSlidesPerPosition);
//   }, [windowWidth, filmGroupData.length, slidesPerPosition]);

//   if (slidesPerPosition) {
//     const tileRows = chunk(filmGroupData, slidesPerPosition);

//     const tileRowFrags = tileRows.map((row, i) => (
//       <TileGroup
//         key={i}
//         filmGroupData={row}
//         slidesPerPosition={slidesPerPosition}
//         tileIsUnmountedOnRemove={true}
//         tileIsAnimatedOnMount={true}
//       />
//     ));

//     return <React.Fragment>{tileRowFrags}</React.Fragment>;
//   }
//   return (
//     <div className='flex justify-center items-center'>
//       <Spinner />
//     </div>
//   );
// }

// TileChunks.propTypes = {
//   filmGroupData: PropTypes.array.isRequired,
// };
