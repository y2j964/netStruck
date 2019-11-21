import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
  const ref = useRef();
  useEffect(() => {
    document.title = '404 Error - NetStruck';
    // focus h1 on route change to let screen reader know we changed route
    ref.current.focus();
  }, []);
  return (
    <main className="p-12">
      <h1
        className="text-white text-2xl text-center mb-12"
        tabIndex="-1"
        ref={ref}
      >
        404 Error: Page Not Found
      </h1>
      <p className="text-white mb-10">
        Whoa, we couldn&apos;t find that url, partner. Here&apos;s another handy
        link back home:{' '}
      </p>
      <Link to={'/'} className="mt-6 text-white border-white border px-2 py-1">
        NetStruck
      </Link>
    </main>
  );
}
