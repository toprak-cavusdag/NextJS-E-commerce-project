'use client';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href='/'
      className='bg-orange-700 px-2 py-2 rounded-md text-lg md:text-2xl cursor-pointer'
    >
      Burada<span className='text-sm'>.com</span>
    </Link>
  );
};

export default Logo;
