import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='h-[237px] bg-black flex justify-center items-center'>
      <div className='h-[140px] relative w-full'>
        <Image src={'/hepsi.jpeg'} alt='' fill className='object-cover' />
      </div>
    </div>
  );
};

export default Banner;
