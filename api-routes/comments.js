import { supabase } from '../lib/supabaseClient';
export const commentsCacheKey = '/api/comments';

export const getComments = async () => {
  const { data, error, status } = await supabase.from('comments').select();

  return { data };
};

export const addComment = () => {
  //Handle add comment here
};

export const removeComment = () => {
  //Handle remove comment here
};
