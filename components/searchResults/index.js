import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SearchResults = ({ results }) => {
  return (
    <div className='grid grid-cols-3 gap-x-4 gap-y-16 p-8 absolute top-1/2 md:top-1/4 bg-darkColor'>
      {results.map(({ id, image, slug, title }) => (
        <Link key={id} href={`/blog/${slug}`}>
          {image ? (
            <Image
              className='aspect-square object-cover border-1 border-dark-900'
              src={image}
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
