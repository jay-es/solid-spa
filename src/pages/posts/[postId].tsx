import { useParams } from "solid-app-router";
import { Component, createResource, Show } from "solid-js";
import { fetchPostById, fetchPostComments } from "~/api/fetch";
import { CommentList } from "~/components/CommentList";

const Page: Component = () => {
  const { postId } = useParams();
  const [post] = createResource(postId, fetchPostById);
  const [comments] = createResource(postId, fetchPostComments);

  return (
    <>
      <Show when={!post.loading}>
        <h2>{post()?.title}</h2>
        <p>{post()?.body}</p>
      </Show>
      <h3>Comments</h3>
      <CommentList comments={comments() ?? []} />
    </>
  );
};

export default Page;
