import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { imgType } from '../../netStruckDataTypes';

export default function TabPanel({ heading, img, text, isActive, index }) {
  return (
    <div
      className="tab-panel"
      id={`tab-panel-${index + 1}`}
      aria-hidden={!isActive}
      aria-labelledby={`tab-${index + 1}`}
    >
      <h2 className="sr-only">{heading}</h2>
      <picture>
        <source
          sizes="100vw"
          srcSet={`${img.webp400} 400w,
				  ${img.webp640} 640w,
				  ${img.webp800} 800w,
				  ${img.webp1024} 1024w,
				  ${img.webp1200} 1200w,
				  ${img.webp1366} 1366w,
				  ${img.webp1600} 1600w,
				  ${img.webp1920} 1920w`}
          type="image/webp"
        />
        <source
          sizes="100vw"
          srcSet={`${img.jpg400} 400w,
				  ${img.jpg640} 640w,
				  ${img.jpg800} 800w,
				  ${img.jpg1024} 1024w,
				  ${img.jpg1200} 1200w,
				  ${img.jpg1366} 1366w,
				  ${img.jpg1600} 1600w,
				  ${img.jpg1920} 1920w`}
        />
        <img src={img.jpg800} alt="" className="absolutely-covered" />
      </picture>
      <div className="absolutely-centered">
        <div className="tab-panel__text-block">
          <p className="tab-panel__text">{text} </p>
          <Link
            to={'/signup'}
            className="btn-primary btn-primary--wider"
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
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: imgType.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
