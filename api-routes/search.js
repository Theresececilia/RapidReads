import supabase from '../lib/supabaseClient'
export const searchCacheKey = '/api/search';

export const searchPosts = async (_, {arg: searchQuery }) => {
    const { data, error } = await supabase
    .from('posts')
    .select()
    .ilike('title', `%${searchQuery}%`)
  
    return {data}
  };
  