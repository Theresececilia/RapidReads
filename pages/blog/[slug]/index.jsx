import { useRouter } from "next/router";
import styles from "./blog-post.module.css";
import Comments from "./partials/comments";
import AddComment from "./partials/add-comment";
import Button from "@components/button";
import Heading from "@components/heading";
import BlogImageBanner from "@components/blog-image-banner";
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr'
import { removePost, getPost, postsCacheKey } from "../../../api-routes/posts";

export default function BlogPost() {
  const router = useRouter();

  const { slug } = router.query;

  const {data: { data = [] } = {}, error} = useSWR(slug ? `${postsCacheKey}${slug}` : null, () => getPost({slug}))

  const { trigger: deleteTrigger, isMutating } = useSWRMutation(postsCacheKey, removePost, {
    onError: (error) => {
      console.log(error);
    }
  });

  const handleDeletePost = async (id) => {
    const { status, data, error } = await deleteTrigger(id)

    if (!error) {
      router.push(`/blog`);
    }
    
  };

  const handleEditPost = () => {
    router.push(`/blog/${slug}/edit`);
  };

  return (
    <>
      <section className={styles.container}>
        <Heading>{data.title}</Heading>
        {data?.image && <BlogImageBanner src={post.image} alt={data.title} />}
        <div className={styles.dateContainer}>
          <time className={styles.date}>{data.created_at}</time>
          <div className={styles.border} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
        <span className={styles.author}>Author: {data?.Users?.alias ?? "Ghost Writer"}</span>

        {/* The Delete & Edit part should only be showed if you are authenticated and you are the author */}
        <div className={styles.buttonContainer}>
          <Button onClick={handleDeletePost}>Delete</Button>
          <Button onClick={handleEditPost}>Edit</Button>
        </div>
      </section>

      <Comments postId={data.id} />

      {/* This component should only be displayed if a user is authenticated */}
      <AddComment postId={data.id} />
    </>
  );
}
