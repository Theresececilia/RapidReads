import { useEffect, useRef, useState } from 'react';
import { searchPosts, searchCacheKey } from '../../api-routes/search';
import { usePathname } from 'next/navigation'
import useSWRMutation from 'swr/mutation';
import SearchResults from '@components/searchResults/index';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false)

  const { trigger: searchTrigger, data: { data = [] } = {} } = useSWRMutation(
    `${searchCacheKey}/${searchQuery}`,
    searchPosts,
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      await searchTrigger(searchQuery);
    };
    fetchData();
  }, [searchQuery, searchTrigger]);

  const formRef = useRef();
  const path = usePathname()

  useEffect(() => {
    setSearchQuery('');
    setSearchResults([])
    setIsSearched(false)
  }, [path]);

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchTrigger(searchQuery);
    setIsSearched(true)
    setSearchResults(data || []);
  };

  const handleOnChange = (event) => {
    setSearchQuery(event.target.value);
  };
 
  return (
  <>
    <form
      onSubmit={handleSearch}
      className="flex items-center space-x-5 bg-lightColor rounded-md p-2 m-6 w-5/6 md:w-full"
      ref={formRef}
    >
      <input
        type="text"
        id="title"
        name="title"
        value={searchQuery}
        className="flex-1 outline-none p-2 text-darkColor"
        onChange={handleOnChange}
      />
      <button
        type="submit"
        className="p-2 text-lightColor border-2 border-darkGrey rounded-md bg-lightGrey"
      >
        Search
      </button>
     
    </form>
     {searchResults.length > 0 && (
        <SearchResults results={searchResults} />
      )}
      {(searchResults.length === 0 && isSearched) && (
        <div className='mt-4'>
        <span className='text-dark-700'>no results for </span>
        <span>{`"${searchQuery}"`}</span>
    </div>
      )}
      </>
  );
};

export default Search;
