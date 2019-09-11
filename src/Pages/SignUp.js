import React, { useState, useEffect } from 'react';
import SubscriptionType from '../components/Account/SubscriptionType';
import SubscriptionDetails from '../components/Account/SubscriptionDetails';
import UserInfo from '../components/Account/UserInfo';

export default function SignUp() {
  const [subscription, setSubscription] = useState('annual');

  useEffect(() => {
    document.querySelector('body').classList.toggle('bg-form');
    return () => document.querySelector('body').classList.toggle('bg-form');
  }, []);

  return (
    <main className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center px-5 lg:px-10'>
      <div className='lg:flex-1 mb-12 lg:mb-0 lg:mr-16'>
        <header className='mb-10 mt-5'>
          <h1 className='text-white text-5xl font-bold'>NetStruck Sign Up</h1>
        </header>
        <SubscriptionType
          subscription={subscription}
          setSubscription={setSubscription}
        />
        <SubscriptionDetails />
      </div>
      <div className='lg:flex-1 mb-12 w-full'>
        <UserInfo subscription={subscription} />
      </div>
    </main>
  );
}
