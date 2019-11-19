import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { imgType } from '../../netStruckDataTypes';

export default function TabPanelCentered({
  heading,
  img,
  text,
  isActive,
  index,
}) {
  return (
    <div
      className="tab-panel tab-panel--centered"
      id={`tab-panel-${index + 1}`}
      aria-hidden={!isActive}
      aria-labelledby={`tab-${index + 1}`}
    >
      <h2 className="sr-only">{heading}</h2>
      <div className="tab-panel--centered__img-group">
        <div className="ratio-2-1">
          <picture>
            <source
              sizes="(min-width: 800px) calc(50vw - 1em), 100vw"
              srcSet={`${img.webp400} 400w,
                ${img.webp640} 640w,
                ${img.webp800} 800w,
                ${img.webp1024} 1024w,
                ${img.webp1200} 1200w,`}
              type="image/webp"
            />
            <source
              sizes="(min-width: 800px) calc(50vw - 1em), 100vw"
              srcSet={`${img.webp400} 400w,
                ${img.jpg640} 640w,
                ${img.jpg800} 800w,
                ${img.jpg1024} 1024w,
                ${img.jpg1200} 1200w,`}
            />
            <img src={img.jpg800} alt="" className="object-cover" />
          </picture>
        </div>
      </div>
      <div className="tab-panel--centered__text-group">
        <p className="tab-panel__text">{text}</p>
        <Link
          to={'/signup'}
          className="btn-primary btn-primary--wider"
          tabIndex={isActive ? '0' : '-1'}
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
}

TabPanelCentered.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: imgType.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
