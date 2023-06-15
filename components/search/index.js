import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { searchPosts } from '../../api-routes/posts'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await searchPosts(null, { query: searchQuery });
      if (error) {
        throw new Error(error.message);
      }
      // Handle the search results, e.g., redirect to a search results page
      router.push(`/blog/${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    } catch (error) {
      console.error('Error searching posts:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="title"
          name="title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
