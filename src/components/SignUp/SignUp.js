import React, { useEffect } from 'react';
import SubscriptionType from './SubscriptionType';
import SubscriptionDetails from './SubscriptionDetails';
import UserInfo from './UserInfo';

export default function SignUp() {
  useEffect(() => {
    document.querySelector('body').classList.toggle('bg-form');
    return () => document.querySelector('body').classList.toggle('bg-form');
  }, []);

  return (
    <div className='px-5 max-w-7xl'>
      <header className='mb-10 mt-5'>
        <h1 className='text-white text-4xl font-bold'>NetStruck Sign Up</h1>
      </header>
      <div className='lg:flex'>
        <div className='lg:flex-1 mr-16 mb-12 lg:mb-0'>
          <SubscriptionType />
          <SubscriptionDetails />
        </div>
        <div className='lg:flex-1 justify-center mb-12'>
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
