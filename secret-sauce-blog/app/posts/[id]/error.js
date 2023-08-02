'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <section
      aria-label='Error page message'
      className='flex flex-1 flex-col items-center justify-center'
    >
      <h1>So, it looks like we had a server error, apologies.</h1>
      <div aria-label='Home Button'>
        &rarr; <Link href='/'>Home</Link> &larr;
      </div>
    </section>
  );
}
