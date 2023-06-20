import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { searchPosts } from '../../api-routes/search';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = async () => {
    const { data } = await searchPosts(searchQuery);
  };

  return (
      <form onSubmit={handleSearch} className='flex items-center space-x-5 bg-lightColor rounded-md p-2 m-6 w-full'>
        <input
          type="text"
          id="title"
          name="title"
          value={searchQuery}
          className='flex-1 outline-none p-2 text-darkColor'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className='p-2 border-2 border-darkGrey rounded-md bg-lightGrey'>
          Search
        </button>
      </form>
  );
};

export default Search;
