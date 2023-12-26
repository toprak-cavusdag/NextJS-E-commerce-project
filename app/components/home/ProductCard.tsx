'use client';
import textClip from '@/utils/TextClip';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductCard = ({ product }: any) => {
  const router = useRouter();
  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className='w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md'
    >
      <div className='relative h-[150px]'>
        <Image
          fill
          src={product.image}
          alt='Product Image'
          className='object-contain'
        />
      </div>
      <div className='text-center mt-2'>
        <div className='mt-3'>{textClip(product.name)}</div>
        <Rating name='read-only' value={productRating} readOnly />
        <div className='text-orange-600 font-bold space-y-1 text-lg md:text-xl'>
          {product.price}tl
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
