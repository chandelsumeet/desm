import { fetchPost } from "@/app/_postActions/post";
import "./createPost.scss";
import Form from "@/app/_components/form/form";
import { post } from "@/app/_types/post.types";
import { notFound } from "next/navigation";

const Post = async ({ params }: any) => {
  const { id } = await params;
  const post: post = await fetchPost(parseInt(id));
  if (!post.id) {
    return notFound();
  }
  return (
    <div className="form-container">
      <Form postData={post} id={parseInt(id)} />
    </div>
  );
};
export default Post;
