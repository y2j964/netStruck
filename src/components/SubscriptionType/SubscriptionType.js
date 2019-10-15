import React from 'react';
import PropTypes from 'prop-types';

export default function SubscriptionType({ radioOne, radioTwo }) {
  return (
    <form action='' className='subscription-type'>
      <div className='subscription-type__form-group'>
        <label htmlFor='annualSub' className=''>
          <span className='sm:text-lg font-bold'>Annual </span>
          <span className='sm:text-lg'>- $99.99 / year</span>
        </label>
        {radioOne}
      </div>
      <div className='subscription-type__form-group'>
        <label htmlFor='monthlySub' className='mb-2'>
          <span className='sm:text-lg font-bold'>Monthly </span>
          <span className='sm:text-lg'>- $10.99 / month</span>
        </label>
        {radioTwo}
      </div>
    </form>
  );
}

SubscriptionType.propTypes = {
  radioOne: PropTypes.element.isRequired,
  radioTwo: PropTypes.element.isRequired,
};
