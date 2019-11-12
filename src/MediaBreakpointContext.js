/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useMedia from './utilityFunctions/useMedia';
import {
  mediaQueries,
  slidesPerPosition,
  defaultSlidesPerPosition,
} from './mediaQueries';

const mediaBreakpointState = React.createContext();

const MediaBreakpointProvider = props => {
  const updatedSlidesPerPosition = useMedia(
    mediaQueries,
    slidesPerPosition,
    defaultSlidesPerPosition,
  );

  return (
    <mediaBreakpointState.Provider value={updatedSlidesPerPosition}>
      {props.children}
    </mediaBreakpointState.Provider>
  );
};

function useMediaBreakpointState() {
  const context = useContext(mediaBreakpointState);
  if (context === undefined) {
    throw new Error(
      'useMediaBreakpointState must be used within a MediaBreakpointProvider',
    );
  }
  return context;
}

export { MediaBreakpointProvider, useMediaBreakpointState };

MediaBreakpointProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
