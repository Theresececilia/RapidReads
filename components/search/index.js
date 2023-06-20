import { useEffect, useRef, useState } from 'react';
import { searchPosts, searchCacheKey } from '../../api-routes/search';
import useSWRMutation from 'swr/mutation';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchTrigger(searchQuery);
  };

  const handleOnChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center space-x-5 bg-lightColor rounded-md p-2 m-6 w-full"
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
        className="p-2 border-2 border-darkGrey rounded-md bg-lightGrey"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
