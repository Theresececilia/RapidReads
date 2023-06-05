import {supabase} from "../lib/supabaseClient";
export const postsCacheKey = '/api/posts'

export const getPosts = async () => {
  const { data, error, status } = await supabase
  .from('Posts')
  .select()

  return {data}
};

export const getPost = async ({ slug }) => {
  const { data, error, status } = await supabase
  .from('Posts')
  .select(`
  *,
  Users (
    alias
  )
`)
  .single()
  .eq('slug', slug)

  return {data}
}

export const addPost = async (_, {arg: newPost}) => {
  const {slug, title, body } = newPost

  const { data, error } = await supabase
  .from('Posts')
  .insert(newPost)
  .select()
  .single();

  if (error) {
    console.log("Failed to add new data.");
  }
 
  return {data};
};

export const removePost = async (_, {arg: id}) => {
  const { data, error } = await supabase
  .from('Posts')
  .delete()
  .eq('id', id)

  if (error) {
    console.log("Failed to delete data.");
  }

  return {data};
};

export const editPost = () => {
  //Handle edit post here
};
