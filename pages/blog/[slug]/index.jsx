import { useRouter } from "next/router";
import Comments from "./partials/comments";
import AddComment from "./partials/add-comment";
import Button from "@components/button";
import Heading from "@components/heading";
import BlogImageBanner from "@components/blog-image-banner";
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr'
import { removePost, getPost, postsCacheKey } from "../../../api-routes/posts";
import { useUser } from "@supabase/auth-helpers-react";

export default function BlogPost() {
  const router = useRouter();
  const user = useUser()
  const { slug } = router.query;

  const {data: { data = [] } = {}, error} = useSWR(slug ? `${postsCacheKey}${slug}` : null, () => getPost({slug}))

  const { trigger: deleteTrigger, isMutating } = useSWRMutation(postsCacheKey, removePost, {
    onError: (error) => {
      console.log(error);
    }
  });

  const handleDeletePost = async () => {
    const postId = data.id
    const { status, error } = await deleteTrigger(postId)

    if (!error) {
      router.push(`/blog`);
    }
    
  };

  const handleEditPost = () => {
    router.push(`/blog/${slug}/edit`);
  };

  return (
    <>
      <section className="p-4">
        <Heading>{data.title}</Heading>
        {data?.image && <BlogImageBanner src={data.image} alt={data.title} />}
        <div>
          <time>{data.created_at}</time>
          <div/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
        <span>
          Author: {data?.Users?.alias ?? 'Ghost Writer'}
        </span>

        {/* The Delete & Edit part should only be showed if you are authenticated and you are the author */}
        <div className='flex text-lightColor mt-2'>
          <Button onClick={() => handleDeletePost(data.id)} className='mr-2'>Delete</Button>
          <Button onClick={handleEditPost}>Edit</Button>
        </div>

      </section>
      {/* This component should only be displayed if a user is authenticated */}
      <AddComment postId={data.id} />
      <Comments postId={data.id} />
      
    </>
  );
}
