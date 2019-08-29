import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
  useEffect(() => {
    document.title = '404 Error - NetStruck';
  }, []);
  return (
    <div className='p-12'>
      <h1 className='text-white text-2xl text-center mb-12'>
        404 Error: Page Not Found
      </h1>
      <p className='text-white mb-10'>
        Woah, we couldn't find that url, partner. Here's another handy link back
        home:{' '}
      </p>
      <Link to={'/'} className='mt-6 text-white border-white border px-2 py-1'>
        NetStruck
      </Link>
    </div>
  );
}
