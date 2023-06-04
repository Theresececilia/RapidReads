import {supabase} from "../lib/supabaseClient";
export const postsCacheKey = '/api/blogs'

export const getPosts = async () => {
  const { data, error, status } = await supabase
  .from('Posts')
  .select()

  return {data}
};

export const getPost = async ({ slug }) => {
  const { data, error, status } = await supabase
  .from('Posts')
  .select()
  .single()
  .eq('slug', slug)

  return {data}
}

export const addPost = () => {
  //Handle add post here
};

export const removePost = () => {
  //Handle remove post here
};

export const editPost = () => {
  //Handle edit post here
};
