import supabase from '../lib/supabaseClient'

export const searchPosts = async (_, {arg: query}) => {
    const { data, error } = await supabase
    .from('posts')
    .select()
    .ilike('title', `%${query}%`)
  
    return {data}
  };
  