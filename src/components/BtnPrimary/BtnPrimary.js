import React from 'react';
import PropTypes from 'prop-types';

export default function BtnPrimary({
  additionalClasses,
  children,
  handleClick,
}) {
  return (
    <button
      className={`btn-primary ${additionalClasses}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

BtnPrimary.propTypes = {
  additionalClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
