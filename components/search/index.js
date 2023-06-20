import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { searchPosts } from '../../api-routes/search'
import styles from './search.module.css'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = async () => {
    const { data } = await searchPosts(searchQuery)

  };

  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="title"
          name="title"
          value={searchQuery}
          className={styles.searchBar}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={styles.searchBtn}>Search</button>
      </form>
    </div>
  );
};

export default Search;
