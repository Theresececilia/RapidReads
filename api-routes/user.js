import supabase from "../lib/supabaseClient";

export const getUser = () => {
  //Handle get authenticated user information
  const { data, error } = await supabase
  .from('Users')
  .select()

  console.log(data, error)

  return data
};
