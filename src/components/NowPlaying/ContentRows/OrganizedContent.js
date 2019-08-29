import React from 'react';
import PropTypes from 'prop-types';

export default function OrganizedContent({ children }) {
  return (
    <section>
      <h2 className='sr-only'>Organized Content</h2>
      {children}
    </section>
  );
}

OrganizedContent.propTypes = {
  children: PropTypes.node.isRequired,
};
