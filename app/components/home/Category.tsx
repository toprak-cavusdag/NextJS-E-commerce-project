'use client';
import React from 'react';

const Category = () => {
  const categoryList = [
    {
      name: 'Ayakkabı',
    },
    {
      name: 'Ayakkabı',
    },
    {
      name: 'Ayakkabı',
    },
    {
      name: 'Ayakkabı',
    },
    {
      name: 'Ayakkabı',
    },
    {
      name: 'Ayakkabı',
    },
  ];

  return (
    <div className='flex  items-center px-3 md:px-10 justify-center gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto'>
      {categoryList.map((cate, index) => (
        <div
          className='border text-slate-500 rounded-full min-w-[120px] flex flex-1 items-center justify-center px-4 py-2 text-center cursor-pointer'
          key={index}
        >
          {cate.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
