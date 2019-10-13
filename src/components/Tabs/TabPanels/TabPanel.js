import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TabPanel({ tabPanel, isActive, index }) {
  return (
    <div className='tab-panel' id={`tab-panel-${index + 1}`} aria-hidden={!isActive} aria-labelledby={`tab-${index + 1}`}>
      <h2 className='sr-only'>{tabPanel.heading}</h2>
      <picture>
        <source
          sizes='100vw'
          srcSet={`${tabPanel.img.webp400} 400w,
				  ${tabPanel.img.webp640} 640w,
				  ${tabPanel.img.webp800} 800w,
				  ${tabPanel.img.webp1024} 1024w,
				  ${tabPanel.img.webp1200} 1200w,
				  ${tabPanel.img.webp1366} 1366w,
				  ${tabPanel.img.webp1600} 1600w,
				  ${tabPanel.img.webp1920} 1920w`}
          type='image/webp'
        />
        <source
          sizes='100vw'
          srcSet={`${tabPanel.img.jpg400} 400w,
				  ${tabPanel.img.jpg640} 640w,
				  ${tabPanel.img.jpg800} 800w,
				  ${tabPanel.img.jpg1024} 1024w,
				  ${tabPanel.img.jpg1200} 1200w,
				  ${tabPanel.img.jpg1366} 1366w,
				  ${tabPanel.img.jpg1600} 1600w,
				  ${tabPanel.img.jpg1920} 1920w`}
        />
        <img src={tabPanel.img.jpg800} alt='' className='absolutely-covered' />
      </picture>
      <div className='absolutely-centered'>
        <div className='tab-panel__text-block'>
          <p className='tab-panel__text'>{tabPanel.text} </p>
          <Link
            to={'/signup'}
            className='btn-primary btn-primary--wider'
            tabIndex={isActive ? '0' : '-1'}
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}

TabPanel.propTypes = {
  tabPanel: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
