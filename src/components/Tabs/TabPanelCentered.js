import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TabPanelCentered({ tabPanel, isActive, index }) {
  return (
    <div
      className='tab-panel tab-panel--centered'
      id={`tab-panel-${index + 1}`}
      aria-hidden={!isActive}
      aria-labelledby={`tab-${index + 1}`}
    >
      <h2 className='sr-only'>{tabPanel.heading}</h2>
      <div className='tab-panel--centered__img-group'>
        <div className='ratio-2-1'>
          <picture>
            <source
              sizes='(min-width: 800px) calc(50vw - 1em), 100vw'
              srcSet={`${tabPanel.img.webp400} 400w,
                ${tabPanel.img.webp640} 640w,
                ${tabPanel.img.webp800} 800w,
                ${tabPanel.img.webp1024} 1024w,
                ${tabPanel.img.webp1200} 1200w,`}
              type='image/webp'
            />
            <source
              sizes='(min-width: 800px) calc(50vw - 1em), 100vw'
              srcSet={`${tabPanel.img.webp400} 400w,
                ${tabPanel.img.jpg640} 640w,
                ${tabPanel.img.jpg800} 800w,
                ${tabPanel.img.jpg1024} 1024w,
                ${tabPanel.img.jpg1200} 1200w,`}
            />
            <img src={tabPanel.img.jpg800} alt='' className='object-cover' />
          </picture>
        </div>
      </div>
      <div className='tab-panel--centered__text-group'>
        <p className='tab-panel__text'>{tabPanel.text}</p>
        <Link
          to={'/signup'}
          className='btn-primary btn-primary--wider'
          tabIndex={isActive ? '0' : '-1'}
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
}

TabPanelCentered.propTypes = {
  tabPanel: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
