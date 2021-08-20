import { useParams } from "solid-app-router";
import { Component, createResource, For, Show } from "solid-js";
import { fetchCommentsByPostId, fetchPostById } from "~/fetch";
import styles from "./Index.module.css";

const Page: Component = () => {
  const params = useParams();
  const [post] = createResource(params.postId, fetchPostById);
  const [comments] = createResource(params.postId, fetchCommentsByPostId);

  return (
    <>
      <Show when={!post.loading}>
        <h2>{post().title}</h2>
        <p>{post().body}</p>
      </Show>
      <h3>Comments</h3>
      <For each={comments()}>
        {(item) => (
          <div class={styles.commentItem}>
            <h4>
              {item.name} <span>({item.email})</span>
            </h4>
            <p>{item.body}</p>
          </div>
        )}
      </For>
    </>
  );
};

export default Page;
