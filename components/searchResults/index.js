import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SearchResults = ({ results }) => {
  return (
    <div className='grid grid-cols-4 gap-x-4 gap-y-16 p-8 bg-accentGreen'>
      {results.map(({ id, cover_image, slug, title }) => (
        <Link key={id} href={`/blog/${slug}`}>
          {cover_image ? (
            <Image
              className='aspect-square object-cover border-1 border-dark-900'
              src={cover_image}
              alt=''
              width={664}
              height={664}
            />
          ) : (
            <div className='aspect-square w-full border-1 border-dark-900 bg-accent'></div>
          )}
          <h2 className='text-xl mt-2'>{title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
