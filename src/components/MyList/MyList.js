import React, { useEffect } from 'react';
import Spinner from '../../icons/Spinner';

export default function MyList() {
  useEffect(() => {
    document.title = 'My List - NetStruck';
  }, []);
  return (
    <div>
      <h1 className='sr-only'>NetStruck MyList</h1>
      <Spinner />
    </div>
  );
}
