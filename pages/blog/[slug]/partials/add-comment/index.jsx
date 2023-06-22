import { useRef } from "react";
import Button from "@components/button";
import Input from "@components/input";
import Label from "@components/label";
import TextArea from "@components/text-area";
import {
  addComment,
  commentsCacheKey,
} from '../../../../../api-routes/comments';
import useSWRMutation from 'swr/mutation';

export default function AddComment({ postId }) {
  const formRef = useRef();
   const { trigger: addTrigger, isMutating } = useSWRMutation(
     commentsCacheKey,
     addComment,
     {
       onError: (error) => {
         console.log(error);
       },
     }
   );

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { author, comment } = Object.fromEntries(formData);
    const newComment = {
      author,
      comment,
      post_id: postId,
    };

    const { status, error } = await addTrigger(newComment)

    formRef.current.reset();
  };

  return (
    <div className='w-full pt-2'>
      <h2>Add a comment</h2>
      <form ref={formRef} onSubmit={handleOnSubmit}>
        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" />
        </div>

        <div>
          <Label htmlFor="comment">Comment</Label>
          <TextArea id="comment" name="comment" className='bg-lightColor'/>
        </div>

        <Button className='text-darkColor' type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
