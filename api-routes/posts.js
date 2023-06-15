import { supabase } from "../lib/supabaseClient";
import { uploadImage } from "../utils/uploadImage";
export const postsCacheKey = '/api/posts'

export const getPosts = async () => {
  const { data, error, status } = await supabase
  .from('posts')
  .select()

  return {data}
};

export const getPost = async ({ slug }) => {
  const { data, error, status } = await supabase
  .from('posts')
  .select(`
  *,
  users (
    alias
  )
`)
  .single()
  .eq('slug', slug)

  return {data}
}

export const addPost = async (_, {arg: newPost}) => {
  const {slug, title, body } = newPost
  let image = ""
  if(newPost?.image) {
   const {publicUrl, error } = await uploadImage(newPost?.image)
   if(!error) {
    image = publicUrl;
   }
    //create a function that takes in the uploaded image fromm the client
    //upload it to our bucket
    //get the public url and return it
  }
  console.log(image, newPost)
  const { data, error } = await supabase
  .from('posts')
  .insert(...newPost, image)
  .select()
  .single();

  // if (error) {
  //   console.log("Failed to add new data.");
  // }
 
  return {data};
};

export const removePost = async (_, {arg: id}) => {
  const { error } = await supabase
  .from('posts')
  .delete()
  .eq('id', id)

  console.log(id)
  if (error) {
    console.log("Failed to delete data.");
  }

  return({message: "Character has been deleted."})
};

export const editPost = async (_, {arg: updatedPost}) => {
  let image = updatedPost?.image ?? ""
  const { error, status, data } = await supabase
  .from('posts')
  .update(updatedPost)
  .eq('id', updatedPost.id)
  .single()
  .select()

  return { data, status };
};
