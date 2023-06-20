import styles from './comments.module.css';
import Comment from '../comment';
import {
  getComments,
  commentsCacheKey,
} from '@/api-routes/comments';
import useSWR from 'swr';

export default function Comments({ postId }) {

  const { data: { data = [] } = {}, error } = useSWR(
    postId ? commentsCacheKey : null,
    () => getComments(postId)
  );

  return (
    <div className={styles.container}>
      <h2 className='text-lg font-semibold'>Comments</h2>
      {data.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}
