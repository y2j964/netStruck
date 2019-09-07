import React, { useState } from 'react';

export default function SubscriptionType() {
  const [subscription, setSubscription] = useState('annual');

  return (
    <form action='' className='subscription-type'>
      <div className='subscription-type__form-group'>
        <label htmlFor='annualSub' className=''>
          <span className='text-lg font-bold'>Annual </span>
          <span className='text-lg'>- $99.99 / year</span>
        </label>
        <span
          className={`custom-radio${
            subscription === 'annual' ? ' custom-radio--is-active' : ''
          }`}
        >
          <input
            type='radio'
            name='subscriptionFrequency'
            value='annual'
            className='hidden-input'
            tabIndex='0'
            id='annualSub'
            checked={subscription === 'annual'}
            onChange={e => setSubscription(e.target.value)}
          />
          <span className='hidden-input__focus-mask'></span>
        </span>
      </div>
      <div className='subscription-type__form-group'>
        <label htmlFor='monthlySub' className='mb-2'>
          <span className='text-lg font-bold'>Monthly </span>
          <span className='text-lg'>- $10.99 / month</span>
        </label>
        <span
          className={`custom-radio${
            subscription === 'monthly' ? ' custom-radio--is-active' : ''
          }`}
        >
          <input
            type='radio'
            name='subscriptionFrequency'
            value='monthly'
            className='hidden-input'
            tabIndex='0'
            id='monthlySub'
            checked={subscription === 'monthly'}
            onChange={e => setSubscription(e.target.value)}
          />
          <span className='hidden-input__focus-mask'></span>
        </span>
      </div>
    </form>
  );
}
