import Editor from "@components/editor/editor";
import { useState } from "react";
import Button from "@components/button";
import Input from "@components/input";
import Label from "@components/label";
import Heading from "@components/heading";
import ImageUpload from "@components/upload-image";

export default function BlogEditor({
  content = "",
  src = null,
  title = "",
  heading = "",
  onSubmit,
  buttonText = "Submit",
}) {
  const [image, setImage] = useState(src);
  const [editorContent, setEditorJsonContent] = useState(content);
  const [titleInput, setTitleInput] = useState(title);

  const handleOnChange = (content) => {
    setEditorJsonContent(content);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    onSubmit({ editorContent, titleInput, image });
  };

  return (
    <section className="p-4 ">
      <Heading>{heading}</Heading>
      <form onSubmit={handleOnSubmit} className="flex flex-col">
        <ImageUpload
          src={image}
          onImageUpload={(file) => setImage(file)}
          onReset={() => setImage(null)}
        />
        <Label>Title</Label>
        <input
          name="title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          className="border-2 border-black"
        />
        <Editor
          content={content}
          onChange={handleOnChange}
        />
        <button type="submit" className="bg-lightColor">
          {buttonText}
        </button>
      </form>
    </section>
  );
}
