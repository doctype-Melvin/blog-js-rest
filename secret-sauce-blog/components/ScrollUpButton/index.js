'use client';

import { BsArrowUpSquareFill as Arrow } from 'react-icons/bs';
import { useState, useEffect } from 'react';

export default function ScrollUpArrow() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='fixed bottom-5 right-5 z-10' onClick={jumpToTop}>
      {showButton && <Arrow size='2.5rem' />}
    </button>
  );
}
